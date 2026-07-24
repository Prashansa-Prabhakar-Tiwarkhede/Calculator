import "../styles/Dashboard.css";

function Dashboard({

    total,

    lastResult,

    mostUsed

}) {

    return (

        <div className="dashboard">

            <div className="card">

                <h3>Total Calculations</h3>

                <h1>{total}</h1>

            </div>

            <div className="card">

                <h3>Last Result</h3>

                <h1>{lastResult}</h1>

            </div>

            <div className="card">

                <h3>Most Used</h3>

                <h1>{mostUsed}</h1>

            </div>

        </div>

    );

}

export default Dashboard;