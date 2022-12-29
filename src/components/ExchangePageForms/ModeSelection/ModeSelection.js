import React, {useContext} from "react";
import { Context } from "../../../Context";
import StartModeMain from "../../StartMode/StartModeMain/StartModeMain";
import TestModeMain from "../../TestMode/TestModeMain/TestModeMain";

function ModeSelection() {
  const {setSelectedBotSettings} = useContext(Context)
  return (
    <div className="exchangePage__modes">
      <TestModeMain
        onClick={() =>
          setSelectedBotSettings((prev) => ({ ...prev, mode: "test" }))
        }
      />
      <StartModeMain
        onClick={() =>
          setSelectedBotSettings((prev) => ({ ...prev, mode: "start" }))
        }
      />
    </div>
  );
}

export default ModeSelection;
