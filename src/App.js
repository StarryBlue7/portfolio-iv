import './App.css';
import Main from './components/Main';
import Particles from 'react-tsparticles';
import config from './data/particles.json';

function App() {
  return (
    <div id="body">
      <Particles
        id="tsparticles"
        options={config}
      />
      <Main />
    </div>
    
  );
}

export default App;
