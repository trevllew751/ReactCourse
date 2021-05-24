import './App.css';
// import CoinFlipper from "./CoinFlipper";
import ColorBoxes from "./ColorBoxes"

function App() {
    return (
        <div className="App">
            {/*<CoinFlipper/>*/}
            <ColorBoxes numBoxes={16}/>
        </div>
    );
}

export default App;
