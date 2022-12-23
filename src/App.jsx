import { Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/cannon';
import './App.css';
import Ground from './components/Ground.jsx';
import Fpv from './components/Fpv.jsx';
import Player from './components/Player';

function App() {

  return (
    <>
      <Canvas>
        <Sky sunPosition={[100, 100, 20]} />
        <ambientLight intensity={0.5} />
        <Fpv />
        <Physics>
          <Player />
          <Ground />
        </Physics>
      
      </Canvas>

      <div className='pointer'>+</div>
    </>
  )
}

export default App
