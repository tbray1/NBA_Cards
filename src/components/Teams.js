import React from "react";
import TeamItem from "./TeamItem";
import LoadingSpinner from "./LoadingSpinner";

const Teams = ({ items, isLoading }) => {
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <TeamItem key={item.idTeam} item={item}></TeamItem>
      ))}
    </section>
  );
};

export default Teams;
