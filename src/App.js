import Main from './components/Main';
import Particles from 'react-tsparticles';
import config from './data/particles.json';
import { BrowserRouter as Router } from 'react-router-dom';

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
      <Router>
        <Main />
      </Router>  
    </div>
  );
}

export default App;
