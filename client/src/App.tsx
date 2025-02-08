import { useEffect, useState } from "react";
import "./App.css";
type User = {
  name: string;
  email: string;
};
const url = import.meta.env.VITE_API_URL;

function App() {
  const [user, setUser] = useState<User | null>(null);
  const fetchData = async () => {
    const response = await fetch(url); // Replace with your live server's URL
    const data = await response.json();
    console.log(data[0]);

    setUser(data[0]);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>PLANTit</h1>
      <h2>In production!</h2>
      <h3>{user?.email}</h3>
      <img style={{ height: "300px" }} src="planit-log.png" alt="" />
    </>
  );
}

export default App;
