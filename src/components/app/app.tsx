import MainPage from '../../pages/main-page';

type AppScreenProps = {
  placesCount: number;
}

function App({placesCount} : AppScreenProps) : JSX.Element {
  return (
    <MainPage placesCount={placesCount}/>
  );
}

export default App;
