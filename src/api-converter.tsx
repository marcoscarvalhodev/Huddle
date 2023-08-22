import React from "react";
import styles from "./App.module.css";

function ApiConverter() {
  const template = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@{apiVersion}/{date}/{endpoint}`;

  async function Fetched() {
    const { url, options } = API_FETCH();
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json.eur.usd / json.eur['00']);
  }

  function API_FETCH() {
    return {
      url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur.json`,
      options: {
        method: "GET",
      },
    };
  }

  Fetched();

  return <div className="App"></div>;
}

export default ApiConverter;
