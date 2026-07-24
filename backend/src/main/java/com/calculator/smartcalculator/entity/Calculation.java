package com.calculator.smartcalculator.entity;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "calculation_history")
public class Calculation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private double num1;

    @Column(nullable = false)
    private double num2;

    @Column(nullable = false)
    private String operation;

    @Column(nullable = false)
    private double result;

    @Column(nullable = false)
    private LocalDateTime calculationTime;

    // Default Constructor
    public Calculation() {
    }

    // Parameterized Constructor
    public Calculation(double num1, double num2, String operation,
                       double result, LocalDateTime calculationTime) {
        this.num1 = num1;
        this.num2 = num2;
        this.operation = operation;
        this.result = result;
        this.calculationTime = calculationTime;
    }

    // Getters & Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public double getNum1() {
        return num1;
    }

    public void setNum1(double num1) {
        this.num1 = num1;
    }

    public double getNum2() {
        return num2;
    }

    public void setNum2(double num2) {
        this.num2 = num2;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }

    public double getResult() {
        return result;
    }

    public void setResult(double result) {
        this.result = result;
    }

    public LocalDateTime getCalculationTime() {
        return calculationTime;
    }

    public void setCalculationTime(LocalDateTime calculationTime) {
        this.calculationTime = calculationTime;
    }
}