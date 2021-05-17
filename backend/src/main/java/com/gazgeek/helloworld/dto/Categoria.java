package com.gazgeek.helloworld.dto;

public class Categoria {
    
     private int id;
     private String description;

    public Categoria() {
    }

    public Categoria(int id, String description) {
        this.id = id;
        this.description = description;
    }


    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }



     




    

}