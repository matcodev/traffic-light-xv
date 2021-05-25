import { useState } from "react";
import Light from "./components/Light";

function App() {

  const [colorRed, setColorRed] = useState(false);
  const [colorYellow, setColorYellow] = useState(false);
  const [colorGreen, setColorGreen] = useState(false);

  const turnonTurnoff1 = () => {
    setColorRed(currentColor => !currentColor)
    }
  const turnonTurnoff2 = () => {
    setColorYellow(currentColor => !currentColor)
  }
  const turnonTurnoff3 = () => {
    setColorGreen(currentColor => !currentColor)
  }
  
  return (
    <div className="container my-5">
      <div className="row col-md-2 bg-dark rounded">
        <figure className="figure col-md-12 pt-3">
          <div className="container col-md-10">
            <Light
              color={"danger"}
              selectedLight={colorRed ? 'selected' : ''}
              onClick={turnonTurnoff1}
            />
            <Light
              color={"warning"}
              selectedLight={colorYellow ? 'selected' : ''}
              onClick={turnonTurnoff2}
            />
            <Light
              id={"green"}
              color={"success"}
              selectedLight={colorGreen ? 'selected' : ''}
              onClick={turnonTurnoff3}
            />
          </div>
        </figure>

      </div>
    </div>
  );
}

export default App;
