package org.example;

import java.beans.ConstructorProperties;

public class Alien {

    private int age;
//    private Laptop lap;
    private Computer comp;


    public Alien(){
        System.out.println("Alien Constructor Called...");
    }

//
//    @ConstructorProperties({"age","lap"})
//    public Alien(int age,Laptop lap) {
//        System.out.println("Alien Para Constructor Called");
//        this.age = age;
//        this.lap = lap;
//    }


    public Computer getComp() {
        return comp;
    }

    public void setComp(Computer comp) {
        this.comp = comp;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        System.out.println("Setter Called..");
        this.age = age;
    }




    public void code(){
        System.out.print("Coding by Alien and");
        comp.compile();
    }

}
