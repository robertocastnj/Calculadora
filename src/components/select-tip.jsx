import React from "react";

export default function SelectTip() {
  const tips = [5, 10, 15, 25, 50];
  return (
    <ul>
      {tips.map((tip) => {
        return (
          <li id={`percentage-${tip}`} key={tip}>
            <button
              type="button"
              className="percentage-button cursor-pointer"
              value={tip}
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
        />
      </li>
    </ul>
  );
}
