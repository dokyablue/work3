import styles from './app.module.css';
import Login from './component/login/login';

function App({authService}) {
  return (<div class={styles.app}>
    <Login authService={authService} />
  </div>)
}

export default App;
