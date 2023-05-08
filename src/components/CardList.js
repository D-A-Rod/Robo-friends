import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
    const cardArray = robots.map((user, idx) => {
    return (
      <Card
        key={idx}
        id={robots[idx].id}
        name={robots[0].name}
        email={[0].email}
      />
    );
  });

  return (
  <div>{cardArray}</div>
  )
};

export default CardList;
