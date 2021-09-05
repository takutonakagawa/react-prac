import React from "react";

const App = () => {
  const onClickBUtton = () => alert("aaa");
  contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <p style={contentStyle}>reactp1ractice</p>
      <button onClick={onClickBUtton}>ボタン</button>
    </>
  );
};

export default App;
