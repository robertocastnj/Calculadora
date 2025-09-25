import React from "react";

export default function SelectTip({ data, setData }) {
  const tips = [5, 10, 15, 25, 50];
  return (
    <ul>
      {tips.map((tip) => {
        return (
          <li id={`percentage-${tip}`} key={tip}>
            <button
              type="button"
              className={`percentage-button cursor-pointer ${
                tip == data.tip ? `active` : ``
              }`}
              value={tip}
              onClick={(e) =>
                setData({ ...data, tip: parseInt(e.target.value) })
              }
            >
              {tip}%
            </button>
          </li>
        );
      })}

      <li>
        <input
          type="number"
          placeholder="Custom"
          id="custom-percentage-button"
          className="percentage-button"
          onChange={(e) =>
            setData({ ...data, tip: parseFloat(e.target.value) })
          }
          value={data.tip}
        />
      </li>
    </ul>
  );
}
