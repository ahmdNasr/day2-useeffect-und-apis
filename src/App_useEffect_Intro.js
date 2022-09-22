import { useState } from "react";
import "./App.css";

// API
// useEffect
function App() {
  // Wert mit Zustand zu verwalten ... -> "Wert der sich ändert"

  // [ [], Array(10), Array(10) ]
  //         ^
  const [users, setUsers] = useState([]);

  console.log(new Date());

  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => setUsers(data));

  // PROBLEM: FETCH -> STATE-UDPATE -> RE-RENDER -> FETCH
  // ==> ENDLOSSCHLEIFE --> Wir brauchen einen Weg um die Ausführung des Fetches zu kontrollieren... --> useEffect

  return (
    <div className="App">
      {users.map((u) => (
        <h1 key={u.id}>{u.name}</h1>
      ))}
    </div>
  );
}

export default App;
