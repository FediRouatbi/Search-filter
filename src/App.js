import React, { useState, useEffect } from "react";
import InputValue from "./InputValue";
import ListItems from "./ListItems";
import "./App.css";

const App = () => {
  const [word, setWords] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=30")
      .then((response) => response.json())
      .then((data) => {
        const USERS = data.results.map((user) => {
          return {
            gender: user.gender,
            userFirstName: user.name.first,
            userLastName: user.name.last,
            phone: user.phone,
            id: user.id.value,
            email: user.email,
          };
        });

        setUsers(USERS);
        setInterval(function () {
          setLoading(false);
        }, 500);
      });
  }, []);

  function sendData(search) {
    setWords(search);
  }

  let filtredItems = users.filter((mot) => {
    return mot.userFirstName
      .toLowerCase()
      .includes(word.toLocaleLowerCase().trim());
  });

  if (word === "") filtredItems = users;

  return (
    <div className="container">
      <InputValue onChangeSearch={sendData} />
      {loading ? (
        <div className="spiner">
          <i class="fa-solid fa-spinner fa-spin-pulse"></i>
        </div>
      ) : (
        <ListItems data={filtredItems} />
      )}
    </div>
  );
};
export default App;
