import React from "react";
import { createRoot } from "react-dom/client";
import './style.css';
import App from "./App";

function Page(){
    return (
        <div className="container">
            <App />
        </div>
    )
}
// Render App components into the 'root' element
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<React.StrictMode>
<Page />
</React.StrictMode>);