package com.example.JobAppRest.repo;

import com.example.JobAppRest.model.JobPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface JobRepo extends JpaRepository<JobPost, Integer> {

    @Query("SELECT DISTINCT j FROM JobPost j LEFT JOIN j.postTechStack skill " +
            "WHERE LOWER(j.postProfile) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
            "OR LOWER(j.postDesc) LIKE LOWER(CONCAT('%', :keyword, '%')) " +
            "OR LOWER(skill) LIKE LOWER(CONCAT('%', :keyword, '%'))")
    List<JobPost> search(@Param("keyword") String keyword);
}