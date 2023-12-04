import React, { useContext } from "react";
import { ColorContext } from "./ColorContext";
import Waga from "./Waga";

const About = () => {
  const { color, setcolor } = useContext(ColorContext);

  return (
    <div>
      <h1 style={{ color: color }}>About - selected color:{color}</h1>
      <hr></hr>
      <button onClick={() => setcolor("green")}> Green </button>
      <button onClick={() => setcolor("red")}> red </button>
      <button onClick={() => setcolor("yellow")}> yellow </button>
      <Waga></Waga>
    </div>
  );
};

export default About;
