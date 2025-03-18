package com.example.search.controller;

import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/search")
@CrossOrigin(origins = "*") // Allows requests from any origin
public class SearchController {

    private final List<String> data = Arrays.asList(
        "Apple", "Banana", "Blueberry", "Cherry", "Dragonfruit", "Grapes", "Mango", "Orange", "Pineapple", "Strawberry", "Malta"
    );

    @GetMapping
    public List<String> getSuggestions(@RequestParam String query) {
        return data.stream()
                .filter(item -> item.toLowerCase().startsWith(query.toLowerCase()))
                .limit(5)
                .collect(Collectors.toList());
    }
}