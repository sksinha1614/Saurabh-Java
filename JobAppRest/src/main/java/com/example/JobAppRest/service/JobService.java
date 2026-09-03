package com.example.JobAppRest.service;


import com.example.JobAppRest.model.JobPost;
import com.example.JobAppRest.repo.JobRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobService {

    @Autowired
    private JobRepo repo;

    public void addJob(JobPost job){
        repo.addJob(job);
    }

    public List<JobPost> getAllJobs(){
        return repo.getAllJobs();
    }


    public JobPost getJob(int postId) {
        return repo.getJob(postId);
    }
}
