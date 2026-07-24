import { useState } from "react";

import API from "../services/Api";

import "../styles/Calculator.css";

function Calculator({ onCalculationSuccess }) {

    const [num1, setNum1] = useState("");

    const [num2, setNum2] = useState("");

    const [operation, setOperation] = useState("ADD");

    const [result, setResult] = useState("");

    const [loading, setLoading] = useState(false);

    const calculate = async () => {

        try {

            setLoading(true);

            const response = await API.post("/calculate", {

                num1: Number(num1),

                num2: Number(num2),

                operation: operation

            });

            setResult(response.data.result);
            onCalculationSuccess();
        }

        catch(error){

            if(error.response){

                alert(error.response.data.error);

            }

            else{

                alert("Server Not Running");

            }

        }

        finally{

            setLoading(false);

        }

    };

    return(

        <div className="calculator-container">

            <div className="calculator-card">

                <h2>Smart Calculator</h2>

                <label>First Number</label>

                <input

                    type="number"

                    value={num1}

                    onChange={(e)=>setNum1(e.target.value)}

                />

                <label>Second Number</label>

                <input

                    type="number"

                    value={num2}

                    onChange={(e)=>setNum2(e.target.value)}

                />

                <label>Select Operation</label>

                <select

                    value={operation}

                    onChange={(e)=>setOperation(e.target.value)}

                >

                    <option value="ADD">Addition</option>

                    <option value="SUBTRACT">Subtraction</option>

                    <option value="MULTIPLY">Multiplication</option>

                    <option value="DIVIDE">Division</option>

                    <option value="MOD">Modulus</option>

                    <option value="POWER">Power</option>

                    <option value="SQRT">Square Root</option>

                    <option value="PERCENT">Percentage</option>

                </select>

                <button

                    onClick={calculate}

                    disabled={loading}

                >

                    {loading ? "Calculating..." : "Calculate"}

                </button>

                <div className="result">

                    <h3>Result</h3>

                    <p>{result}</p>

                </div>

            </div>

        </div>

    );

}

export default Calculator;