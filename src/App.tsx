import Heart from "./heart.png";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="App">
        <img src={Heart} alt={"heart"} />
      </div>
      <div className="text">FORMULA LOVE</div>
    </div>
  );
};

export default App;
