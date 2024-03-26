import React from "react";
import Card, { CardProps } from "./Card";

interface CardListProps {
  cards: CardProps[]; // Assuming CardProps is defined in Card component
}

const CardList: React.FC<CardListProps> = (props) => {
  return (
    <div id="container" className="mt-10">
      {props.cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default CardList;
