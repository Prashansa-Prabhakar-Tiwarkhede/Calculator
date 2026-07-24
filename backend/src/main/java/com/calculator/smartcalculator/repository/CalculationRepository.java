package com.calculator.smartcalculator.repository;

import com.calculator.smartcalculator.entity.Calculation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CalculationRepository extends JpaRepository<Calculation, Long> {

    // Find calculations by operation (ADD, SUBTRACT, etc.)
    List<Calculation> findByOperation(String operation);

}