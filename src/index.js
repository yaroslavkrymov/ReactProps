import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Kari"
      img="https://www.clipartmax.com/png/middle/31-314515_pizza-man-pizza-steve.png"
      alt="avatar_img"
      tel="+514 252 3698"
      email="Pizza@Person.com"
    />
  </div>,
  document.getElementById("root")
);
