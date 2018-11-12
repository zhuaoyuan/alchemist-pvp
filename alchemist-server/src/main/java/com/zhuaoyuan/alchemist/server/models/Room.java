package com.zhuaoyuan.alchemist.server.models;

import lombok.Data;

import java.util.List;

@Data
public class Room {

    private String roomId;

    private List<String> roomMembers;

}
