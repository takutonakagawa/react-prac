import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(true);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickCountDown = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

  const onClickSwichShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

  // useEfecctは第二引数を監視しその引数に変化があった場合に実行される関数
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue">お元気ですか</ColorfulMessage>
      <ColorfulMessage color="pink">お元気</ColorfulMessage>
      <button onClick={onClickCountUp}>UP</button>
      <br />
      <button onClick={onClickCountDown}>DOWN</button>
      <br />
      <br />
      <button onClick={onClickSwichShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(-_-)</p>}
    </>
  );
};

export default App;
