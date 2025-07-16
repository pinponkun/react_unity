import './App.css';
import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const [showUnity, setShowUnity] = useState(false);
  const [showSecondUnity, setShowSecondUnity] = useState(false);
  const [showThirdUnity, setShowThirdUnity] = useState(false);

  // 1つ目のゲーム
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build_1/MergePuzzle.loader.js",
    dataUrl: "Build_1/MergePuzzle.data",
    frameworkUrl: "Build_1/MergePuzzle.framework.js",
    codeUrl: "Build_1/MergePuzzle.wasm",
  });

  // 2つ目のゲーム
  const { unityProvider: unityProvider2 } = useUnityContext({
    loaderUrl: "Build_2/TetrisPuzzle.loader.js",
    dataUrl: "Build_2/TetrisPuzzle.data",
    frameworkUrl: "Build_2/TetrisPuzzle.framework.js",
    codeUrl: "Build_2/TetrisPuzzle.wasm",
  });

  // 3つ目のゲーム
  const { unityProvider: unityProvider3 } = useUnityContext({
    loaderUrl: "Build_3/PuyoPuzzle.loader.js",
    dataUrl: "Build_3/PuyoPuzzle.data",
    frameworkUrl: "Build_3/PuyoPuzzle.framework.js",
    codeUrl: "Build_3/PuyoPuzzle.wasm",
  });

  // どれか一つだけ表示
  const handleShowUnity = () => {
    setShowUnity(true);
    setShowSecondUnity(false);
    setShowThirdUnity(false);
  };

  const handleShowSecondUnity = () => {
    setShowUnity(false);
    setShowSecondUnity(true);
    setShowThirdUnity(false);
  };

  const handleShowThirdUnity = () => {
    setShowUnity(false);
    setShowSecondUnity(false);
    setShowThirdUnity(true);
  };

  const handleCloseUnity = () => {
    setShowUnity(false);
    setShowSecondUnity(false);
    setShowThirdUnity(false);
  };

  return (
    <div className="App" style={{ color: "#fff", background: "#222", minHeight: "100vh" }}>
      <header className="App-header" style={{ padding: "2rem" }}>
        <h1>ポートフォリオ</h1>
        <section style={{ marginBottom: "2rem" }}>
          <h2>プロフィール</h2>
          <p>
            名前：林田 歴<br />
            年齢：23歳<br />
            学歴：福岡大学大学院工学研究科電子情報工学専攻博士課程前期2025年4月~2027年3月卒業見込み<br />
            趣味：ゲーム、アニメ、プログラミング<br />
            使用経験のある言語：C, C#, Python, Java, JavaScript, HTML, CSS<br />
            使用経験のあるツール：Unity<br />
            使用経験のあるフレームワーク：React<br />
          </p>
        </section>
        <section>
          <h2>作成したゲーム</h2>
          {!showUnity && !showSecondUnity && !showThirdUnity && (
            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center" }}>
              <button
                onClick={handleShowUnity}
                style={{
                  padding: "0.8em 2em",
                  fontSize: "1.1em",
                  borderRadius: "8px",
                  border: "none",
                  background: "#4caf50",
                  color: "#fff",
                  cursor: "pointer",
                  marginBottom: "1.5rem"
                }}
              >
                Unityゲーム①を表示
              </button>
              <button
                onClick={handleShowSecondUnity}
                style={{
                  padding: "0.8em 2em",
                  fontSize: "1.1em",
                  borderRadius: "8px",
                  border: "none",
                  background: "#2196f3",
                  color: "#fff",
                  cursor: "pointer",
                  marginBottom: "1.5rem"
                }}
              >
                Unityゲーム②を表示
              </button>
              <button
                onClick={handleShowThirdUnity}
                style={{
                  padding: "0.8em 2em",
                  fontSize: "1.1em",
                  borderRadius: "8px",
                  border: "none",
                  background: "#ff9800",
                  color: "#fff",
                  cursor: "pointer",
                  marginBottom: "1.5rem"
                }}
              >
                Unityゲーム③を表示
              </button>
            </div>
          )}
          {showUnity && (
            <div style={{ marginTop: "1.5rem", position: "relative", display: "inline-block" }}>
              <button
                onClick={handleCloseUnity}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  padding: "0.5em 1em",
                  fontSize: "1em",
                  borderRadius: "6px",
                  border: "none",
                  background: "#f44336",
                  color: "#fff",
                  cursor: "pointer",
                  zIndex: 2
                }}
              >
                閉じる
              </button>
              <Unity
                unityProvider={unityProvider}
                style={{
                  width: 800,
                  height: 600,
                  border: "2px solid #222",
                  background: "#222",
                }}
              />
            </div>
          )}
          {showSecondUnity && (
            <div style={{ marginTop: "1.5rem", position: "relative", display: "inline-block" }}>
              <button
                onClick={handleCloseUnity}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  padding: "0.5em 1em",
                  fontSize: "1em",
                  borderRadius: "6px",
                  border: "none",
                  background: "#f44336",
                  color: "#fff",
                  cursor: "pointer",
                  zIndex: 2
                }}
              >
                閉じる
              </button>
              <Unity
                unityProvider={unityProvider2}
                style={{
                  width: 800,
                  height: 600,
                  border: "2px solid #222",
                  background: "#222",
                }}
              />
            </div>
          )}
          {showThirdUnity && (
            <div style={{ marginTop: "1.5rem", position: "relative", display: "inline-block" }}>
              <button
                onClick={handleCloseUnity}
                style={{
                  position: "absolute",
                  top: "-40px",
                  right: "0",
                  padding: "0.5em 1em",
                  fontSize: "1em",
                  borderRadius: "6px",
                  border: "none",
                  background: "#f44336",
                  color: "#fff",
                  cursor: "pointer",
                  zIndex: 2
                }}
              >
                閉じる
              </button>
              <Unity
                unityProvider={unityProvider3}
                style={{
                  width: 800,
                  height: 600,
                  border: "2px solid #222",
                  background: "#222",
                }}
              />
            </div>
          )}
        </section>
      </header>
    </div>
  );
}

export default App;
