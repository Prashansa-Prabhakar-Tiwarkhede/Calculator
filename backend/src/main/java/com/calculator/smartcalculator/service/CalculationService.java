package com.calculator.smartcalculator.service;

import com.calculator.smartcalculator.dto.CalculationRequest;
import com.calculator.smartcalculator.dto.CalculationResponse;
import com.calculator.smartcalculator.entity.Calculation;
import com.calculator.smartcalculator.repository.CalculationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CalculationService {

    @Autowired
    private CalculationRepository repository;

    // Perform Calculation
    public CalculationResponse calculate(CalculationRequest request) {

        double result = 0;

        switch (request.getOperation().toUpperCase()) {

            case "ADD":
                result = request.getNum1() + request.getNum2();
                break;

            case "SUBTRACT":
                result = request.getNum1() - request.getNum2();
                break;

            case "MULTIPLY":
                result = request.getNum1() * request.getNum2();
                break;

            case "DIVIDE":

                if (request.getNum2() == 0) {
                    throw new RuntimeException("Cannot divide by zero.");
                }

                result = request.getNum1() / request.getNum2();
                break;

            case "MOD":
                result = request.getNum1() % request.getNum2();
                break;

            case "POWER":
                result = Math.pow(request.getNum1(), request.getNum2());
                break;

            case "SQRT":

                if (request.getNum1() < 0) {
                    throw new RuntimeException("Square root of negative number not allowed.");
                }

                result = Math.sqrt(request.getNum1());
                break;

            case "PERCENT":
                result = (request.getNum1() * request.getNum2()) / 100;
                break;

            default:
                throw new RuntimeException("Invalid Operation");
        }

        // Save calculation
        Calculation calculation = new Calculation();

        calculation.setNum1(request.getNum1());
        calculation.setNum2(request.getNum2());
        calculation.setOperation(request.getOperation());
        calculation.setResult(result);
        calculation.setCalculationTime(LocalDateTime.now());

        repository.save(calculation);

        return new CalculationResponse(result, "Calculation Successful");
    }

    // Get all history
    public List<Calculation> getHistory() {
        return repository.findAll();
    }

    // Search by operation
    public List<Calculation> searchOperation(String operation) {
        return repository.findByOperation(operation.toUpperCase());
    }

    // Delete one calculation
    public void deleteCalculation(Long id) {
        repository.deleteById(id);
    }

    // Clear all calculations
    public void clearHistory() {
        repository.deleteAll();
    }
}