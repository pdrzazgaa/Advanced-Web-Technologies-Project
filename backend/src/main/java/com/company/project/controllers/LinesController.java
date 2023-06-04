package com.company.project.controllers;

import com.company.project.dto.LineDTO;
import com.company.project.services.LinesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class LinesController {

    @Autowired
    LinesService linesService;
    @RequestMapping(value = "/vehicles", method = RequestMethod.GET)
    public ResponseEntity<List<LineDTO>> getVehicles() {
        System.out.println("... called getVehicles");
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(linesService.getAllLines());
    }
}
