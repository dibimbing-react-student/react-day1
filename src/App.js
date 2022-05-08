import "./App.css";
import React from "react";
import Parent from "./statefull-stateless/parent";

// Functional Component
function App() {
    let x = 800;
    x = 1000;

    const y = 300;

    // normal function
    viewConsoleDibimbing();
    function viewConsoleDibimbing() {
        console.log("dibimbing");
    }

    // arrow function
    const viewConsoleDibimbingArrow = () => {
        console.log("dibimbing pake arrow function");
    };
    viewConsoleDibimbingArrow();

    const kondisiTrue = false;

    return (
        <div className="App">
            <h1>Hello React</h1>
            <h1>{kondisiTrue ? "Rahmat" : "Sanyyah"}</h1>
            <p>{x}</p>
            <p>{y}</p>
            <Parent />
        </div>
    );
}

// Class Component
// class App extends React.Component {
//     render() {
//         let x = 800;
//         x = 1000;

//         const y = 300;

//         return (
//             <div className="App">
//                 <h1>Hello React</h1>
//                 <p>{x}</p>
//                 <p>{y}</p>
//             </div>
//         );
//     }
// }

export default App;
