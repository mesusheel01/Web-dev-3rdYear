import {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, ContactShadows } from '@react-three/drei';
import Sukuna from '../public/Sukuna'
import './App.css'
// import { OperatorNode, materialOpacity } from 'three/examples/jsm/nodes/Nodes.js';

function App() {
 
  return (
    <>
    <Canvas >
    <ambientLight intensity={1.5} />
    <OrbitControls />
      <Suspense fallback={null}>
      <Sukuna />
      </Suspense>
      <Environment preset='sunset' />
      <ContactShadows position={[0,0,0]} opacity={2} scale={13} blur={1} far={10} resolution={256} color="#000000" />
    </Canvas>
    <div className='container'>
      <h1>Sukuna</h1>
      <p>Ryomen Sukuna (両りょう面めん宿すく儺な Ryōmen Sukuna?), more often referred to as simply Sukuna (宿すく儺な Sukuna?), is the strongest jujutsu sorcerer from a thousand years ago. Regarded as the undisputed King of Curses (呪のろいの王おう Noroi no Ō?), Sukuna is one of the primary antagonists of the Jujutsu Kaisen series.

According to legend, Sukuna was an Imaginary Demon (仮か想そうの鬼き神じん Kasō no Kijin?) during the Heian Era but in truth he was a sorcerer also known as the Disgraced One (堕だ天てん Daten?). Jujutsu sorcerers of the Golden Age of Jujutsu gave their all against him but ultimately fell one after another. Sukuna existed throughout the ages by transforming into a cursed object after death, a state where he split his power into twenty indestructible fingers.</p>
    <p>
    His past appearance is described as a demon with four arms and two faces.[1] Previously, he used to take the appearance of his former host: Yuji Itadori, but with pink spiked hair slightly pushed upfront and with tattoos/lines on his forehead, nose, cheeks, upper body, and abdomen. He also has a second pair of eyes underneath his normal eyes, which are usually closed.

Now, he takes the appearance of his new current host: Megumi Fushiguro, but with uniquely styled black hair with long spikes that jut out in every direction around his head, resembling a sea-urchin and with tattoos/lines on his forehead, nose, cheeks, upper body, and abdomen. He also has a second pair of eyes underneath his normal eyes.[2] Sukuna also has two lines on both his wrists, upper arms, circles on both his shoulders with a dot in each, two-segmented curve lines on his chest, and two lines on his stomach while possessing Yuji/Megumi.
    </p>
    </div>
   </>
  )
}

export default App
