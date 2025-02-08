import { useEffect, useState } from "react";
import "./App.css";
type User = {
  name: string;
  email: string;
};

function App() {
  const [user, setUser] = useState<User>();
  const fetchData = async () => {
    const response = await fetch("https://planit-neqe.onrender.com/api/users"); // Replace with your live server's URL
    const data = await response.json();
    console.log(data);

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
    </>
  );
}

export default App;
