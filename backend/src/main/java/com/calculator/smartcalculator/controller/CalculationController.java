package com.calculator.smartcalculator.controller;

import com.calculator.smartcalculator.dto.CalculationRequest;
import com.calculator.smartcalculator.dto.CalculationResponse;
import com.calculator.smartcalculator.entity.Calculation;
import com.calculator.smartcalculator.service.CalculationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CalculationController {

    @Autowired
    private CalculationService service;

    // Perform Calculation
    @PostMapping("/calculate")
    public CalculationResponse calculate(
            @RequestBody CalculationRequest request) {

        return service.calculate(request);
    }

    // Get Complete History
    @GetMapping("/history")
    public List<Calculation> getHistory() {

        return service.getHistory();
    }

    // Search By Operation
    @GetMapping("/history/search")
    public List<Calculation> searchHistory(
            @RequestParam String operation) {

        return service.searchOperation(operation);
    }

    // Delete One Record
    @DeleteMapping("/history/{id}")
    public String deleteCalculation(
            @PathVariable Long id) {

        service.deleteCalculation(id);

        return "Calculation deleted successfully.";
    }

    // Clear Entire History
    @DeleteMapping("/history")
    public String clearHistory() {

        service.clearHistory();

        return "History cleared successfully.";
    }

}