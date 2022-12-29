import React from "react";
import './CustomTooltip.css'

export default function CustomTooltip({ payload, label, active }) {
    if (active) {
      return (
        <div className="customTooltip">
          <p>{`${label} : ${payload[0].value}`}</p>
          <p>height: {payload[0].payload.height}</p>
        </div>
      );
    }
  
    return null;
  }