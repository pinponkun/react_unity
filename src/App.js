import './App.css';
import React, { useState } from "react";
import UnityPlayer from "./UnityPlayer";

function App() {
  const [showGame, setShowGame] = useState(0);

  const gameConfigs = [
    { name: "MergePuzzle", desc: "落として、くっつけて、大きくする！スイカゲーム風落ち物パズル！", color: "#4caf50", paths: { loaderUrl: `${process.env.PUBLIC_URL}/Build_1/MergePuzzle.loader.js`, dataUrl: `${process.env.PUBLIC_URL}/Build_1/MergePuzzle.data`, frameworkUrl: `${process.env.PUBLIC_URL}/Build_1/MergePuzzle.framework.js`, codeUrl: `${process.env.PUBLIC_URL}/Build_1/MergePuzzle.wasm` } },
    { name: "TetrisPuzzle", desc: "回して、ハメて、ラインを消し去れ！テトリス風ブロックパズル！", color: "#2196f3", paths: { loaderUrl: `${process.env.PUBLIC_URL}/Build_2/TetrisPuzzle.loader.js`, dataUrl: `${process.env.PUBLIC_URL}/Build_2/TetrisPuzzle.data`, frameworkUrl: `${process.env.PUBLIC_URL}/Build_2/TetrisPuzzle.framework.js`, codeUrl: `${process.env.PUBLIC_URL}/Build_2/TetrisPuzzle.wasm` } },
    { name: "PuyoPuzzle", desc: "繋げて、そこから大連鎖！ぷよぷよ風連鎖パズル！", color: "#ff9800", paths: { loaderUrl: `${process.env.PUBLIC_URL}/Build_3/PuyoPuzzle.loader.js`, dataUrl: `${process.env.PUBLIC_URL}/Build_3/PuyoPuzzle.data`, frameworkUrl: `${process.env.PUBLIC_URL}/Build_3/PuyoPuzzle.framework.js`, codeUrl: `${process.env.PUBLIC_URL}/Build_3/PuyoPuzzle.wasm` } },
    { name: "MatchPuzzle", desc: "スワイプして、ならべて、爽快！キャンディクラッシュ風マッチパズル！", color: "#9c27b0", paths: { loaderUrl: `${process.env.PUBLIC_URL}/Build_4/MatchPuzzle.loader.js`, dataUrl: `${process.env.PUBLIC_URL}/Build_4/MatchPuzzle.data`, frameworkUrl: `${process.env.PUBLIC_URL}/Build_4/MatchPuzzle.framework.js`, codeUrl: `${process.env.PUBLIC_URL}/Build_4/MatchPuzzle.wasm` } },
    { name: "SlidePuzzle", desc: "スライドして、ナンバーを並べる！スライドパズル！", color: "#009688", paths: { loaderUrl: `${process.env.PUBLIC_URL}/Build_5/SlidePuzzle.loader.js`, dataUrl: `${process.env.PUBLIC_URL}/Build_5/SlidePuzzle.data`, frameworkUrl: `${process.env.PUBLIC_URL}/Build_5/SlidePuzzle.framework.js`, codeUrl: `${process.env.PUBLIC_URL}/Build_5/SlidePuzzle.wasm` } },
    { name: "PicturePuzzle", desc: "スライドして、絵を完成！ピクチャーパズル！", color: "#e91e63", paths: { loaderUrl: `${process.env.PUBLIC_URL}/Build_6/PicturePuzzle.loader.js`, dataUrl: `${process.env.PUBLIC_URL}/Build_6/PicturePuzzle.data`, frameworkUrl: `${process.env.PUBLIC_URL}/Build_6/PicturePuzzle.framework.js`, codeUrl: `${process.env.PUBLIC_URL}/Build_6/PicturePuzzle.wasm` } },
    { name: "SameGamePuzzle", desc: "繋げて、ハイスコアを目指せ！ツムツム風サメガメパズル！", color: "#795548", paths: { loaderUrl: `${process.env.PUBLIC_URL}/Build_7/SameGamePuzzle.loader.js`, dataUrl: `${process.env.PUBLIC_URL}/Build_7/SameGamePuzzle.data`, frameworkUrl: `${process.env.PUBLIC_URL}/Build_7/SameGamePuzzle.framework.js`, codeUrl: `${process.env.PUBLIC_URL}/Build_7/SameGamePuzzle.wasm` } },
  ];

  return (
    <div className="App">
      <header className="App-header gentle-bg">
        <div className="container narrow">
          <main className="hero-block" role="main">
            <div className="hero-left">
              <img className="profile-photo" src={process.env.PUBLIC_URL + "/dot_pinponkun.png"} alt="プロフィール写真" />
            </div>
            <div className="hero-right">
              <div className="hero-content">
                <h1 className="name">林田 歴</h1>
                <p className="tagline">福岡大学大学院 工学研究科 電子情報工学専攻</p>
                <div className="accounts">
                  <a className="account-link" href="https://github.com/pinponkun" target="_blank" rel="noreferrer">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56 0-.28-.01-1.01-.01-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.21-1.49 3.18-1.18 3.18-1.18.63 1.6.23 2.78.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.71 5.41-5.29 5.69.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.21 21.38 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5z" fill="currentColor"/></svg>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </main>

          <section className="works">
            <h2 className="section-title">作品（Games）</h2>
            <div className="games-grid">
              {gameConfigs.map((g, i) => (
                <article className="game-card" key={g.name} tabIndex={0} onClick={() => setShowGame(i+1)} onKeyDown={(e)=>{ if(e.key==='Enter') setShowGame(i+1)}} aria-label={`Play ${g.name}`} style={{animationDelay: `${i * 80}ms`}}>
                  <div className="game-thumb">
                    <img src={process.env.PUBLIC_URL + `/thumbnails/${g.name}.png`} alt={`${g.name} thumbnail`} />
                  </div>
                  <div className="game-info">
                    <div>
                      <h3 className="game-title">{g.name}</h3>
                      <p className="game-desc">{g.desc}</p>
                    </div>
                    <div className="game-actions">
                      <button className="btn btn-primary" onClick={(e)=>{ e.stopPropagation(); setShowGame(i+1)}} aria-label={`Open ${g.name}`}>Play</button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>

        {showGame > 0 && (
          <div className="unity-modal" onClick={() => setShowGame(0)}>
            <div className="unity-container" onClick={e => e.stopPropagation()}>
              <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
                <strong style={{color:'#fff'}}>{gameConfigs[showGame-1].name}</strong>
                <button className="btn btn-ghost" onClick={() => setShowGame(0)}>閉じる</button>
              </div>
              <UnityPlayer paths={gameConfigs[showGame - 1].paths} style={{ width: '100%', height: '640px', background:'#000' }} />
            </div>
          </div>
        )}

      </header>
    </div>
  );
}

export default App;
