import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Card from "./Card";

export const PostView = () => {
  const [array, setArray] = useState([]);
  useEffect(() => {
    async function getData() {
      let data = await fetch("http://localhost:3004/user");
      let object = await data.json();
      console.log(object);
      setArray([...object]);
    }
    getData();
  }, []);

  return (
    <div className="site-container">
      <Header />
      <div className="container">
        {array.length
          ? array.map((obj, index) => {
              return <Card key={index} obj={obj} />;
            })
          : ""}
        {console.log(array)}
      </div>
    </div>
  );
};
