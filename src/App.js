import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import OneSignal from "react-onesignal";

function App() {
    useEffect(() => {
        runOneSignal();
    }, []);

    async function runOneSignal() {
        await OneSignal.init({
            appId: "9f0514ae-7e81-4ae0-9480-0208b8dff39e",
            allowLocalhostAsSecureOrigin: true,
        });
        OneSignal.showSlidedownPrompt();
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
