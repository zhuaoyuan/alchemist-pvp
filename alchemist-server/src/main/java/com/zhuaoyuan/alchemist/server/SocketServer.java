package com.zhuaoyuan.alchemist.server;

import com.zhuaoyuan.alchemist.server.models.Room;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

@ServerEndpoint(value = "/message/{roomId}/{clientName}", configurator = CustomSpringConfigurator.class)
@Component
public class SocketServer {

	private Map<String, Session> clientMap = new ConcurrentHashMap<>();
	private Map<String, String> sessionIDMap = new ConcurrentHashMap<>();

	private Map<String, Room> roomMap = new ConcurrentHashMap<>();

	@OnOpen
	public void open(Session session,
					 @PathParam(value="roomId")String roomId,
					 @PathParam(value="clientName")String clientName){
		boolean openFlag = true;
		try {
			if(session == null ||
					StringUtils.isEmpty(clientName)) {
				throw new IllegalArgumentException();
			}

			if(roomMap.putIfAbsent(roomId, new Room()) == null){

			}

			clientMap.putIfAbsent(clientName, session);

			sessionIDMap.put(session.getId(), clientName);

		} catch (Exception e) {
			openFlag = false;
		}
		try {
			if(!openFlag && session != null) {
				session.close();
			}
		} catch (IOException e) {
		}
	}


	@OnMessage
	public void onMessage(String message, Session session){

	}

	@OnClose
	public void onClose(Session session) {
		closeSession(session);
	}

    @OnError
    public void onError(Session session,Throwable e) {
    }


	public void sendMessage(String message, String clientName) throws Exception {

		try {
			syncSendMessage(clientMap.get(clientName), message);
		} catch (Exception e){
			throw new Exception("");
		}
	}

	private void closeSession(Session session){
		if(session != null) {
			String clientName = sessionIDMap.remove(session.getId());
			clientMap.remove(clientName);
		}
	}

	private void syncSendMessage(Session session, String message) throws Exception{
		synchronized (session){
			session.getBasicRemote().sendText(message);
		}
	}
}
