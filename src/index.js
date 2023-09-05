import React from "react";
import ReactDOM from "react-dom";

const el = document.getElementById("root"); 
const root = ReactDOM.createRoot(el); 

function App(){
    return <h1>Hello World</h1>; 
}

root.render(<App />); 