import { useState } from "react";

import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import History from "./components/History";
import Dashboard from "./components/Dashboard";

function App() {

    const [refreshHistory, setRefreshHistory] = useState(false);
    const [history, setHistory] = useState([]);

    const reloadHistory = () => {
        setRefreshHistory(prev => !prev);
    };

    const getMostUsedOperation = () => {

        if (history.length === 0) {
            return "-";
        }

        const count = {};

        history.forEach(item => {
            count[item.operation] = (count[item.operation] || 0) + 1;
        });

        return Object.keys(count).reduce((a, b) =>
            count[a] > count[b] ? a : b
        );

    };

    return (
        <>
            <Navbar />

            <Calculator
                onCalculationSuccess={reloadHistory}
            />

            <Dashboard
                total={history.length}
                lastResult={
                    history.length
                        ? history[history.length - 1].result
                        : 0
                }
                mostUsed={getMostUsedOperation()}
            />

            <History
                refresh={refreshHistory}
                history={history}
                setHistory={setHistory}
            />
        </>
    );

}

export default App;