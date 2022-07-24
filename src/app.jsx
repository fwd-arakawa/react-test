import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

// 画面レンダリング機能のコンポーネント化
const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setTimeout(() => setNum((prevState) => prevState + 1), 1000);
  };

  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  //監視の分離　第二引数に受け取ったnumだけ見ます　num絡まないならスルーします
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
  }, [num]);

  return (
    <>
      {/* スタイルを書く際はjsのオブジェクトとして記述 */}
      <h1 style={{ color: "red" }}>こんにちは！React</h1>
      {/* propsを渡す方法は２つある　変数名で指定,中身をそのまま渡す（props.childrenに格納）*/}
      <ColorfulMessage color="pink">テストテストhogehoge</ColorfulMessage>
      <ColorfulMessage color="aquamarine">
        propsの受け渡しは２つあるよ。
      </ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(^^♪</p>}
    </>
  );
};

// Appという関数はこのファイル内でしか使えないからexportのための準備をする
export default App;

// reactのコンポーネントであることを明示的にするため拡張子をjsxにする！
