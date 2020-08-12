import React, { useState, useEffect } from "react";
import Cards from "./components/Card";
import Grid from "@material-ui/core/Grid";

export default function App() {
  let [data, setData] = useState("");
  const access_token = "H6ZZs9MqYEiflfwHf0a8";
  useEffect(() => {
    fetch("https://the-one-api.herokuapp.com/v1/character", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + access_token,
      },
      method: "GET",
    })
      .then((response) => {
        return response.json();
      })
      .then((Data) => {
        setData(Data);
      });
  }, []);

  return (
    <div>
      <h2>Lord of the Rings</h2>
      {/* <Grid>
        {data.map((el) => (
          <Grid item xs={12} sm={4} key={el.id}>
            <Cards img={el.wikiurl} name={el.name} realm={el.realm} />
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
}
