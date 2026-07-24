-- Run this INSIDE your calculator_db database (Render's Postgres already
-- creates the database for you - you don't need CREATE DATABASE / USE here,
-- unlike MySQL).

CREATE TABLE IF NOT EXISTS calculation_history (

    id BIGSERIAL PRIMARY KEY,

    num1 DOUBLE PRECISION NOT NULL,

    num2 DOUBLE PRECISION NOT NULL,

    operation VARCHAR(30) NOT NULL,

    result DOUBLE PRECISION NOT NULL,

    calculation_time TIMESTAMP NOT NULL

);

-- ===========================================
-- Sample Data
-- ===========================================

INSERT INTO calculation_history
(num1, num2, operation, result, calculation_time)

VALUES

(20,10,'ADD',30,NOW()),

(50,25,'DIVIDE',2,NOW()),

(15,8,'SUBTRACT',7,NOW()),

(12,12,'MULTIPLY',144,NOW()),

(9,0,'SQRT',3,NOW());

-- ===========================================
-- View Data
-- ===========================================

SELECT * FROM calculation_history;
