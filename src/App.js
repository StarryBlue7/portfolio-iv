import './App.css';
import Main from './components/Main';
import Particles from 'react-tsparticles';
import config from './data/particles.json';

function App() {
  return (
    <div>
      <Main />
      <Particles
        id="tsparticles"
        options={config}
      />
    </div>
    
  );
}

export default App;
