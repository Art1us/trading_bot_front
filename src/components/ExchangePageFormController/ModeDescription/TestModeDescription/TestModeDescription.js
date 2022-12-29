import React from "react";
import "./TestModeMain.css";

function TestModeMain({ onClick }) {
  return (
    <div className="testModeMain" >
      <h2 className="testModeMain__title">Test Mode</h2>
      <div className="testModeMain__description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum
        tincidunt tortor, vitae faucibus nisi varius at. Integer fringilla
        hendrerit lacus, at sagittis leo. Praesent pulvinar nisi ac massa ornare
        tempus. Suspendisse ullamcorper, odio at aliquet rhoncus, ante ex
        lacinia est, id porttitor ex sapien eget velit. Quisque viverra dui a
        sapien tempus, ac convallis est suscipit. Curabitur consectetur quam
        orci, non dapibus orci scelerisque id. Sed eget consectetur est,
        fermentum maximus libero. Nam lobortis nisi vel neque commodo tincidunt.
        Proin sit amet tincidunt est, in semper ante. Vestibulum elit purus,
        auctor sed sem eu, placerat sodales eros. Donec blandit enim vitae metus
        sodales, a mattis orci euismod. Donec eleifend nec ipsum at mollis. Ut
        rutrum in turpis nec ornare. Pellentesque habitant morbi tristique
        senectus et netus et malesuada fames ac turpis egestas. Nam porta nunc
        metus, nec ornare metus volutpat sed.
      </div>
      <button className="testModeMain__button" onClick={onClick}>Select Test Mode</button>
    </div>
  );
}

export default TestModeMain;
