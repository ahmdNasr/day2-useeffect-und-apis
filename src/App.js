import { useEffect, useState } from "react";
import "./App.css";

// API
// useEffect
function App() {
  // Wert mit Zustand zu verwalten ... -> "Wert der sich ändert"
  const [users, setUsers] = useState([]);

  // ein useEffect wird IMMER mindestens 1 Mal ausgeführt.
  // danach nur dann wenn sich Werte im dependency array ändern.
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="App">
      {users.map((u) => (
        <div>
          <h1 key={u.id}>{u.name}</h1>
          <p>Lat: {u.address.geo.lat}</p>
          <p>Lng: {u.address.geo.lng}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
