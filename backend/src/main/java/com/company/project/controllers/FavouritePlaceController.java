package com.company.project.controllers;


import com.company.project.dto.*;
import com.company.project.exceptions.*;
import com.company.project.services.FavouritePlacesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:3000")
@RequestMapping("/favourite-places")
@RestController
public class FavouritePlaceController {
    @Autowired
    FavouritePlacesService favouritePlacesService;

    @RequestMapping(method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<List<FavPlaceIdDTO>> getFavouritePlacesByClient() {
        System.out.println("... called getFavouritePlaces");
        String clientID = "1";
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(favouritePlacesService.getFavouritePlacesByClient(clientID));
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<FavPlaceIdDTO> getFavouritePlace(@PathVariable long id) throws FavouritePlaceDoesNotExistEx {
        System.out.println("... called getFavouritePlace");
        return ResponseEntity
                .status(HttpStatus.OK)
                .body(favouritePlacesService.getFavouritePlace(id));
    }

    @RequestMapping(value = "/{id}",method = RequestMethod.DELETE)
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity deleteFavouritePlace(@PathVariable long id) throws FavouritePlaceDoesNotExistEx {
        System.out.println("... called deleteFavouritePlace");
        favouritePlacesService.deleteFavouritePlace(id);
        return ResponseEntity.noContent().build();
    }

    @RequestMapping(method = RequestMethod.POST)
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity addFavouritePlace(@RequestBody FavPlaceDTO favPlaceDTO)
            throws FavouritePlaceAlreadyExistsEx, BadRequestEx {
        System.out.println("... called addFavouritePlace");
//        TODO How to read clientID from SSO?
        String clientID = "1";
        favouritePlacesService.addFavouritePlace(favPlaceDTO, clientID);
        return ResponseEntity.status(HttpStatus.OK).build();
    }
}
