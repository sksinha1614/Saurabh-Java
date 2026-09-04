package com.example.JobAppRest.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class JobPost {

    @Id
    private int postId;

    private String postProfile;
    private String postDesc;
    private int reqExperience;

    @ElementCollection
    private List<String> postTechStack;

    // constructors, getters, setters
}