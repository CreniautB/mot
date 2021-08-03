import './App.css';
import HomePage from './component/homePage/homePage';
import './component/homePage/homePage.css'

function App() {
  return (
    <div className="homePage">
        <img src='img/logo.png' alt='logo' width='120px' ></img>
        <HomePage />
    </div>
  );
}

export default App;
