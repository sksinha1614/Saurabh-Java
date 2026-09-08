package com.example.springdatarestdemo.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;

import com.example.springdatarestdemo.model.JobPost;

import java.util.List;


@RepositoryRestResource(path = "jobs")
public interface JobRepo extends JpaRepository<JobPost, Integer> {

    List<JobPost> findByPostProfile(String postProfile);

    List<JobPost> findByReqExperienceGreaterThan(Integer experience);


}
