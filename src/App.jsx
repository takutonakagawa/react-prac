import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickBUtton = () => alert("aaa");

  contentStyle2 = {
    color: "pink",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">お元気</ColorfulMessage>

      <button onClick={onClickBUtton}>ボタン</button>
    </>
  );
};

export default App;
