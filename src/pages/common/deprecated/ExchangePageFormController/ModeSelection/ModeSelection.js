import React, { useContext } from "react";
import { Context } from "../../../Context";
import StartModeDescription from "../ModeDescription/StartModeDescription/StartModeDescription";
import TestModeDescription from "../ModeDescription/TestModeDescription/TestModeDescription";
import "./ModeSelection.css";

function ModeSelection() {
  const { setSelectedBotSettings } = useContext(Context);
  return (
    <div className="modeSelection">
      <TestModeDescription
        onClick={() =>
          setSelectedBotSettings((prev) => ({
            ...prev,
            mode: { id: 1, name: "Test Mode" },
          }))
        }
      />
      <StartModeDescription
        onClick={() =>
          setSelectedBotSettings((prev) => ({
            ...prev,
            mode: { id: 2, name: "Start Mode" },
          }))
        }
      />
    </div>
  );
}

export default ModeSelection;
