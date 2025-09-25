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
          onChange={(e) =>
            setData({ ...data, bill: parseFloat(e.target.value) })
          }
        />
      </label>
      <h2>Select Tip %</h2>
      <SelectTip />
      <h2>Number of People</h2>
      <label htmlFor="input-people">
        <input
          id="input-people"
          className="input-people"
          type="number"
          value={data.people}
          min="1"
          onChange={(e) =>
            setData({ ...data, people: parseInt(e.target.value) })
          }
        />
      </label>
    </div>
  );
}
