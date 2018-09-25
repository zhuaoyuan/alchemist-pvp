package com.zhuaoyuan.alchemist.server;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;

import javax.websocket.*;
import javax.websocket.server.PathParam;
import javax.websocket.server.ServerEndpoint;
import java.io.IOException;
import java.util.Map;
import java.util.Random;
import java.util.concurrent.ConcurrentHashMap;

@ServerEndpoint(value = "/message/{clientId}", configurator = CustomSpringConfigurator.class)
@Component
public class SocketServer {

	private Map<String, Map<String, Session>> sessionPool = new ConcurrentHashMap<>(256);
	private Map<String, String> sessionIDPool = new ConcurrentHashMap<>(256);

	private Random random = new Random();

	@OnOpen
	public void open(Session session,
					 @PathParam(value="clientId")String clientId){
		boolean openFlag = true;
		try {
			if(session == null ||
					StringUtils.isEmpty(clientId)) {
				throw new IllegalArgumentException();
			}

			sessionPool.putIfAbsent(clientId, new ConcurrentHashMap<>());

			sessionPool.get(clientId).putIfAbsent(session.getId(), session);
			sessionIDPool.put(session.getId(), clientId);

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


	public void sendMessage(String message, String appKey) throws Exception {

		Map<String, Session> sessions = sessionPool.get(appKey);
		if(sessions == null || sessions.size()==0) {
			throw new Exception("session not found");
		}
		try {
			String[] keys = sessions.keySet().toArray(new String[0]);
			String randomKey = keys[random.nextInt(keys.length)];

			syncSendMessage(sessions.get(randomKey),message);
		} catch (Exception e){
			throw new Exception("");
		}
	}

	private void closeSession(Session session){
		if(session != null) {
			String appKey = sessionIDPool.remove(session.getId());
			sessionPool.get(appKey).remove(session.getId());
		}
	}

	private void syncSendMessage(Session session, String message) throws Exception{
		synchronized (session){
			session.getBasicRemote().sendText(message);
		}
	}
}
