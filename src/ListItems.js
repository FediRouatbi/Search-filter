import React from "react";
import "./ListItems.css";

const ListItems = (props) => {
  let words = "";

  console.log(props.data);

  words = props.data.map((word, i) => {
    return (
      <h1 className="item" key={word.id ? word.id : i}>
        <div className="item_name">
          <span>name:</span>
          {word.userFirstName}
        </div>
        <div className="item_gender">
          {" "}
          <span>gender:</span>
          {word.gender}
        </div>

        <div className="item_email">
          <span>email:</span>
          {word.email}
        </div>
        <div className="item_phone">
          <span>Phone Number :</span>
          {word.phone}
        </div>
      </h1>
    );
  });

  if (props.data.length > 0) return <div className="list">{words}</div>;
  return (
    <div className="list">
      <h1 className="noResult">No user found</h1>
    </div>
  );
};
export default ListItems;
