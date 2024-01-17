//source - https://codepen.io/supah/pen/BjYLdW
import styles from './loading-screen.module.css';

function LoadingScreen(): React.JSX.Element {
  return (
    <svg className={`${styles.spinner}`} role="progressbar" viewBox="0 0 50 50">
      <circle className={`${styles.path}`} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
    </svg>
  );
}

export default LoadingScreen;
