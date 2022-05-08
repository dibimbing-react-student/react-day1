import "./App.css";
import React from "react";

// Functional Component
// function App() {

//   let x = 800;
//   x = 1000;

//   const y = 300;

//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//       <p>{x}</p>
//       <p>{y}</p>
//     </div>
//   );
// }

// Class Component
class App extends React.Component {
    render() {
        let x = 800;
        x = 1000;

        const y = 300;

        return (
            <div className="App">
                <h1>Hello React</h1>
                <p>{x}</p>
                <p>{y}</p>
            </div>
        );
    }
}

export default App;
