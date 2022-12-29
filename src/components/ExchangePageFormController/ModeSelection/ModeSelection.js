import React, {useContext} from "react";
import { Context } from "../../../Context";
import StartModeDescription from "../ModeDescription/StartModeDescription/StartModeDescription";
import TestModeDescription from "../ModeDescription/TestModeDescription/TestModeDescription";
import './ModeSelection.css'

function ModeSelection() {
  const {setSelectedBotSettings} = useContext(Context)
  return (
    <div className="modeSelection">
      <TestModeDescription
        onClick={() =>
          setSelectedBotSettings((prev) => ({ ...prev, mode: "test" }))
        }
      />
      <StartModeDescription
        onClick={() =>
          setSelectedBotSettings((prev) => ({ ...prev, mode: "start" }))
        }
      />
    </div>
  );
}

export default ModeSelection;
