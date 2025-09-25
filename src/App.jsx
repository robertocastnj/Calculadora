import React, { useState } from "react";
import DataWrapper from "./components/Data-wrapper";
import ResultWrapper from "./components/result-wrapper";

const initialData = { people: 1, bill: 0, tip: 0 };

const initialResult = { tip_amount: 0, total: 0 };

export default function App() {
  const [data, setData] = useState(initialData);
  const [result, setResult] = useState(initialResult);
  console.log(data);

  return (
    <>
      <header>
        <img src="./images/logo.svg" alt="" />
      </header>
      <div className="general-wrapper">
        <DataWrapper setData={setData} data={data} />
        <ResultWrapper result={result} />
      </div>
    </>
  );
}
