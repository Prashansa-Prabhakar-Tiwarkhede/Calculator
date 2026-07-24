import { useEffect, useState } from "react";
import API from "../services/Api";
import "../styles/History.css";

function History({ refresh, history, setHistory }) {

    const [operation, setOperation] = useState("");

    useEffect(() => {
        loadHistory();
    }, [refresh]);

    const loadHistory = async () => {

        try {

            const response = await API.get("/history");

            setHistory(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const deleteCalculation = async (id) => {

        try {

            await API.delete(`/history/${id}`);

            loadHistory();

        } catch (error) {

            console.log(error);

        }

    };

    const clearHistory = async () => {

        try {

            await API.delete("/history");

            loadHistory();

        } catch (error) {

            console.log(error);

        }

    };

    const searchHistory = async () => {

        if (operation === "") {

            loadHistory();

            return;

        }

        try {

            const response = await API.get(
                `/history/search?operation=${operation}`
            );

            setHistory(response.data);

        } catch (error) {

            console.log(error);

        }

    };

    const exportCSV = () => {

        let csv = "ID,Num1,Num2,Operation,Result\n";

        history.forEach(item => {

            csv += `${item.id},${item.num1},${item.num2},${item.operation},${item.result}\n`;

        });

        const blob = new Blob([csv], {
            type: "text/csv"
        });

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;

        a.download = "history.csv";

        a.click();

        URL.revokeObjectURL(url);

    };

    return (

        <div className="history-container">

            <h2>Calculation History</h2>

            <div className="history-controls">

                <select
                    value={operation}
                    onChange={(e) => setOperation(e.target.value)}
                >
                    <option value="">All Operations</option>
                    <option value="ADD">Addition</option>
                    <option value="SUBTRACT">Subtraction</option>
                    <option value="MULTIPLY">Multiplication</option>
                    <option value="DIVIDE">Division</option>
                    <option value="MOD">Modulus</option>
                    <option value="POWER">Power</option>
                    <option value="SQRT">Square Root</option>
                    <option value="PERCENT">Percentage</option>
                </select>

                <button onClick={searchHistory}>
                    Search
                </button>

                <button onClick={exportCSV}>
                    Export CSV
                </button>

                <button
                    className="clear-btn"
                    onClick={clearHistory}
                >
                    Clear All
                </button>

            </div>

            <table>

                <thead>

                    <tr>
                        <th>ID</th>
                        <th>Number 1</th>
                        <th>Number 2</th>
                        <th>Operation</th>
                        <th>Result</th>
                        <th>Time</th>
                        <th>Action</th>
                    </tr>

                </thead>

                <tbody>

                    {history.length === 0 ? (

                        <tr>

                            <td colSpan="7">
                                No calculations found.
                            </td>

                        </tr>

                    ) : (

                        history.map((item) => (

                            <tr key={item.id}>

                                <td>{item.id}</td>
                                <td>{item.num1}</td>
                                <td>{item.num2}</td>
                                <td>{item.operation}</td>
                                <td>{item.result}</td>

                                <td>
                                    {new Date(item.calculationTime).toLocaleString()}
                                </td>

                                <td>

                                    <button
                                        className="delete-btn"
                                        onClick={() => deleteCalculation(item.id)}
                                    >
                                        Delete
                                    </button>

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>

    );

}

export default History;