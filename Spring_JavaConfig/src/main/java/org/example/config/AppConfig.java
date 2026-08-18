package org.example.config;

import org.example.Alien;
import org.example.Computer;
import org.example.Desktop;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class AppConfig {

    @Bean(name = {"des","sau"})
    public Desktop desktop(){
        return new Desktop();
    }

    @Bean
    public Alien alien(Computer comp){
        return new Alien(comp);
    }


}
