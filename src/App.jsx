import React, { useEffect, useState } from "react";
import DataWrapper from "./components/Data-wrapper";
import ResultWrapper from "./components/result-wrapper";

const initialData = { people: 1, bill: 0, tip: 0 };

const initialResult = { tip_amount: 0, total: 0 };

export default function App() {
  const [data, setData] = useState(initialData);
  const [result, setResult] = useState(initialResult);
  useEffect(() => {
    if (data.bill && data.people && data.tip) {
      const tip = (data.tip / 100) * data.bill;
      const tip_amount = tip / data.people;
      const total = (data.bill + tip) / data.people;
      setResult({ total: total.toFixed(2), tip_amount: tip_amount.toFixed(2) });
    }
  }, [data]);

  const reset = () => {
    setData(initialData), setResult(initialResult);
  };

  return (
    <>
      <header>
        <img src="./images/logo.svg" alt="" />
      </header>
      <div className="general-wrapper">
        <DataWrapper setData={setData} data={data} />
        <ResultWrapper result={result} reset={reset} />
      </div>
    </>
  );
}
