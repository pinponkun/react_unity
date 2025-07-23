import './App.css';
import React, { useState } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const [activeTab, setActiveTab] = useState("profile");
  const [showGame, setShowGame] = useState(0);

  // 6つ分のUnityビルド
  const unityContexts = [
    useUnityContext({
      loaderUrl: `${process.env.PUBLIC_URL}/Build_1/MergePuzzle.loader.js`,
      dataUrl: `${process.env.PUBLIC_URL}/Build_1/MergePuzzle.data`,
      frameworkUrl: `${process.env.PUBLIC_URL}/Build_1/MergePuzzle.framework.js`,
      codeUrl: `${process.env.PUBLIC_URL}/Build_1/MergePuzzle.wasm`,
    }),
    useUnityContext({
      loaderUrl: `${process.env.PUBLIC_URL}/Build_2/TetrisPuzzle.loader.js`,
      dataUrl: `${process.env.PUBLIC_URL}/Build_2/TetrisPuzzle.data`,
      frameworkUrl: `${process.env.PUBLIC_URL}/Build_2/TetrisPuzzle.framework.js`,
      codeUrl: `${process.env.PUBLIC_URL}/Build_2/TetrisPuzzle.wasm`,
    }),
    useUnityContext({
      loaderUrl: `${process.env.PUBLIC_URL}/Build_3/PuyoPuzzle.loader.js`,
      dataUrl: `${process.env.PUBLIC_URL}/Build_3/PuyoPuzzle.data`,
      frameworkUrl: `${process.env.PUBLIC_URL}/Build_3/PuyoPuzzle.framework.js`,
      codeUrl: `${process.env.PUBLIC_URL}/Build_3/PuyoPuzzle.wasm`,
    }),
    useUnityContext({
      loaderUrl: `${process.env.PUBLIC_URL}/Build_4/MatchPuzzle.loader.js`,
      dataUrl: `${process.env.PUBLIC_URL}/Build_4/MatchPuzzle.data`,
      frameworkUrl: `${process.env.PUBLIC_URL}/Build_4/MatchPuzzle.framework.js`,
      codeUrl: `${process.env.PUBLIC_URL}/Build_4/MatchPuzzle.wasm`,
    }),
    useUnityContext({
      loaderUrl: `${process.env.PUBLIC_URL}/Build_5/SlidePuzzle.loader.js`,
      dataUrl: `${process.env.PUBLIC_URL}/Build_5/SlidePuzzle.data`,
      frameworkUrl: `${process.env.PUBLIC_URL}/Build_5/SlidePuzzle.framework.js`,
      codeUrl: `${process.env.PUBLIC_URL}/Build_5/SlidePuzzle.wasm`,
    }),
    useUnityContext({
      loaderUrl: `${process.env.PUBLIC_URL}/Build_6/PicturePuzzle.loader.js`,
      dataUrl: `${process.env.PUBLIC_URL}/Build_6/PicturePuzzle.data`,
      frameworkUrl: `${process.env.PUBLIC_URL}/Build_6/PicturePuzzle.framework.js`,
      codeUrl: `${process.env.PUBLIC_URL}/Build_6/PicturePuzzle.wasm`,
    }),
  ];

  return (
    <div className="App" style={{ background: "#222", minHeight: "100vh" }}>
      <header className="App-header" style={{ padding: "2rem 0", background: "#282c34", minHeight: "100vh" }}>
        <h1 style={{
          marginBottom: "2rem",
          letterSpacing: "0.12em",
          fontWeight: 700,
          fontSize: "2.4rem",
          color: "#fff"
        }}>ポートフォリオ</h1>

        {/* タブナビゲーション */}
        <nav style={{
          display: "flex",
          gap: "0",
          marginBottom: "2.5rem",
          background: "#333",
          borderRadius: "12px",
          padding: "4px",
          boxShadow: "0 4px 16px rgba(0,0,0,0.2)"
        }}>
          <button
            onClick={() => setActiveTab("profile")}
            style={{
              padding: "0.8em 2.5em",
              fontSize: "1.1em",
              borderRadius: "8px",
              border: "none",
              background: activeTab === "profile" ? "#4caf50" : "transparent",
              color: activeTab === "profile" ? "#fff" : "#ccc",
              cursor: "pointer",
              fontWeight: activeTab === "profile" ? "bold" : "normal",
              transition: "all 0.3s ease"
            }}
          >
            プロフィール
          </button>
          <button
            onClick={() => {
              setActiveTab("games");
              setShowGame(0);
            }}
            style={{
              padding: "0.8em 2.5em",
              fontSize: "1.1em",
              borderRadius: "8px",
              border: "none",
              background: activeTab === "games" ? "#4caf50" : "transparent",
              color: activeTab === "games" ? "#fff" : "#ccc",
              cursor: "pointer",
              fontWeight: activeTab === "games" ? "bold" : "normal",
              transition: "all 0.3s ease"
            }}
          >
            ゲーム
          </button>
        </nav>

        {/* タブコンテンツ */}
        {activeTab === "profile" && (
          <div style={{
            display: "flex",
            gap: "7rem",
            alignItems: "flex-start",
            width: "100%",
            maxWidth: 1500,
            margin: "0 auto",
            justifyContent: "center"
          }}>
            {/* プロフィール（左側） */}
            <section style={{
              flex: "0 0 650px",
              background: "#fff",
              color: "#222",
              borderRadius: "18px",
              padding: "2.8rem 2.2rem 2rem 2.2rem",
              boxShadow: "0 8px 40px rgba(0,0,0,0.13)",
              textAlign: "left",
              minWidth: 500,
              maxWidth: 700,
              border: "2px solid #e0e0e0",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              <h2 style={{
                borderBottom: "2px solid #4caf50",
                paddingBottom: "0.7rem",
                marginBottom: "1.2rem",
                fontSize: "1.45rem",
                fontWeight: 700,
                letterSpacing: "0.04em"
              }}>プロフィール</h2>
              <div style={{ lineHeight: 2.1, fontSize: "1.12em" }}>
                <div><strong>名前：</strong>林田 歴</div>
                <div><strong>年齢：</strong>23歳</div>
                <div><strong>学歴：</strong>福岡大学大学院工学研究科電子情報工学専攻博士課程前期<br />2025年4月~2027年3月卒業見込み</div>
                <div><strong>趣味：</strong>ゲーム、アニメ、プログラミング</div>
                <div><strong>使用経験のある言語：</strong>C, C#, Python, Java, JavaScript, HTML, CSS</div>
                <div><strong>使用経験のあるツール：</strong>Unity</div>
                <div><strong>使用経験のあるフレームワーク：</strong>React</div>
              </div>
            </section>
            {/* 画像（右側） */}
            <section style={{
              flex: "0 0 200px",
              background: "#fff",
              color: "#222",
              borderRadius: "18px",
              padding: "2.2rem",
              boxShadow: "0 8px 40px rgba(0,0,0,0.13)",
              minWidth: 120,
              maxWidth: 220,
              border: "2px solid #e0e0e0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <img
                src={process.env.PUBLIC_URL + "/pinponkun.jpeg"}
                alt="pinponkun"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  borderRadius: "20px",
                  boxShadow: "0 2px 16px rgba(76,175,80,0.18)",
                  marginBottom: "1rem",
                  background: "#fff",
                  objectFit: "contain"
                }}
                onError={e => { e.target.style.display = "none"; }}
              />
            </section>
          </div>
        )}

        {activeTab === "games" && (
          <section style={{
            background: "#23272f",
            color: "#fff",
            borderRadius: "16px",
            padding: "2.2rem 2rem",
            boxShadow: "0 6px 32px rgba(0,0,0,0.10)",
            minWidth: 350,
            textAlign: "center",
            border: "1.5px solid #333",
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto"
          }}>
            <h2 style={{
              borderBottom: "2px solid #4caf50",
              paddingBottom: "0.7rem",
              marginBottom: "1.5rem",
              fontSize: "1.35rem",
              fontWeight: 700,
              letterSpacing: "0.04em"
            }}>作成したゲーム</h2>
            {showGame === 0 && (
              <div style={{ display: "flex", gap: "1.2rem", flexWrap: "wrap", justifyContent: "center" }}>
                {["MergePuzzle", "TetrisPuzzle", "PuyoPuzzle", "MatchPuzzle", "SlidePuzzle", "PicturePuzzle"].map((gameName, i) => (
                  <button
                    key={i}
                    onClick={() => setShowGame(i + 1)}
                    style={{
                      padding: "0.8em 2em",
                      fontSize: "1.1em",
                      borderRadius: "8px",
                      border: "none",
                      background: ["#4caf50", "#2196f3", "#ff9800", "#9c27b0", "#009688", "#e91e63"][i],
                      color: "#fff",
                      cursor: "pointer",
                      marginBottom: "1.5rem",
                      fontWeight: "bold",
                      minWidth: 160
                    }}
                  >
                    {gameName}
                  </button>
                ))}
              </div>
            )}
            {showGame > 0 && (
              <div style={{ marginTop: "1.5rem", textAlign: "center" }}>
                <button
                  onClick={() => setShowGame(0)}
                  style={{
                    padding: "0.5em 1em",
                    fontSize: "1em",
                    borderRadius: "6px",
                    border: "none",
                    background: "#f44336",
                    color: "#fff",
                    cursor: "pointer",
                    marginBottom: "1rem"
                  }}
                >
                  閉じる
                </button>
                <div>
                  <Unity
                    unityProvider={unityContexts[showGame - 1].unityProvider}
                    style={{
                      width: 800,
                      height: 600,
                      border: "2px solid #222",
                      background: "#222",
                    }}
                  />
                </div>
              </div>
            )}
          </section>
        )}
      </header>
    </div>
  );
}

export default App;
