import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserProfile from "./components/Userprofile";

class App extends React.Component {
  render() {
   const pessoas = [
      {
        id: 102,
        name: "João",
        email: "joao@gmail.com",
        avatar:
          "https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png",
      },
      {
        id: 77,
        name: "Amélia",
        email: "amelia@gmail.com",
        avatar:
          "https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png",
      },
    ];
    return (
      <div className="App">
        {pessoas.map((pessoa) => <UserProfile user= {pessoa} />)}
      </div>
    );
  }
}

export default App;
