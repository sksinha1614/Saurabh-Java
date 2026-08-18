package org.example;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {

        ApplicationContext context= new ClassPathXmlApplicationContext("spring.xml");

        Alien obj1 = (Alien) context.getBean("alien1");
//        System.out.println(obj1.getAge());
        obj1.code();


//        Alien obj2 = (Alien) context.getBean("alien1");
//        obj2.code();
//
//        System.out.println(obj1==obj2);

//        Computer com=	context.getBean( Computer.class);
        Laptop obj= context.getBean( Laptop.class);

    }
}
