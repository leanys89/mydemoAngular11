package com.gazgeek.helloworld.dto;

public class User {

    public User() {

    }

    public User(String username, String password, String token) {
        this.username = username;
        this.password = password;
        this.token = token;
    }


    private String username;
    private String password;
    private String token;
    

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getToken() {
        return this.token;
    }

    public void setToken(String token) {
        this.token = token;
    }

}