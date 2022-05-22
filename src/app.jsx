import { BrowserRouter, Routes , Route} from 'react-router-dom';
import styles from './app.module.css';
import Login from './component/login/login';
import Maker from './component/maker/maker';

function App({authService}) {
  
  return (<div class={styles.app}>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} exact element={<Login authService={authService} />}>
        </Route>
        <Route path={'/maker'} exact element={<Maker authService={authService}/>}>
        </Route>
      </Routes>
      
    
    </BrowserRouter>
  </div>)
}

export default App;
