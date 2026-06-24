import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function UnityPlayer({ paths, style }) {
  const { unityProvider, loadingProgression, isLoaded } = useUnityContext(paths);

  return (
    <div style={{ width: '100%' }}>
      {!isLoaded && (
        <div style={{color:'#d1e3ff', padding:12}}>Loading... {Math.round(loadingProgression * 100)}%</div>
      )}
      <Unity unityProvider={unityProvider} style={style} />
    </div>
  );
}
