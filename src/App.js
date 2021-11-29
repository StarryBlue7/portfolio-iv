import Main from './components/Main';
import Particles from 'react-tsparticles';
import config from './data/particles.json';

const styles = {
  background: {
    overflowX: 'hidden'
  }
}

function App() {
  return (
    <div id="body" style={styles.background}>
      <Particles
        id="tsparticles"
        options={config}
      />
      <Main />
    </div>
    
  );
}

export default App;
