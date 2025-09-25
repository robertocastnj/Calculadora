import React from "react";
import SelectTip from "./select-tip";

export default function DataWrapper({ setData, data }) {
  return (
    <div className="data-wrapper">
      <h1>Bill</h1>
      <label htmlFor="input-bill">
        <input
          className="input-bill"
          id="input-bill"
          type="number"
          value={data.bill}
          min="0"
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (!isNaN(value) && value >= 0) {
              setData({ ...data, bill: value });
            } else if (e.target.value === "") {
              setData({ ...data, bill: "" });
            }
          }}
        />
      </label>
      <h2>Select Tip %</h2>
      <SelectTip data={data} setData={setData} />
      <h2>Number of People</h2>
      <label htmlFor="input-people">
        <input
          id="input-people"
          className="input-people"
          type="number"
          value={data.people}
          min="1"
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (!isNaN(value) && value >= 0) {
              setData({ ...data, people: value });
            } else if (e.target.value === "") {
              setData({ ...data, people: "" });
            }
          }}
        />
      </label>
    </div>
  );
}
