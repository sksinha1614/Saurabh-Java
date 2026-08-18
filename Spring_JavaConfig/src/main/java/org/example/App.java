package org.example;

import org.example.config.AppConfig;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {

        ApplicationContext context= new AnnotationConfigApplicationContext(AppConfig.class);


//        Desktop d1=context.getBean("des",Desktop.class);
//        d1.compile();

        Alien alien=context.getBean("alien", Alien.class);
        alien.code();


    }
}
