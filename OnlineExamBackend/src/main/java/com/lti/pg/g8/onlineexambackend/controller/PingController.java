package com.lti.pg.g8.onlineexambackend.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
public class PingController {

    @GetMapping("/ping")
    public ResponseEntity<?> getPing(){
        return new ResponseEntity<>("Working", HttpStatus.OK);
    }

}
