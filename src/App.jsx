import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";

function App() {
  const [cross, setCross] = useState(true);
  const [arrValues, setArrValues] = useState([]);
  const [winner, setWinner] = useState("");
  const stopGame = () => {
    setArrValues((prev) =>
      Array.from({ length: 9 }, (_, i) => {
        const item = prev[i];
        return item ? { ...item, disable: true } : { val: "", disable: true };
      })
    );
  };
  const resetGame = () => {
    setWinner("")
    setArrValues([]);
  };
  const winnerCheck = (arr, newVal) => {
    if (
      (arr[0]?.val === arr[1]?.val &&
        arr[0]?.val === arr[2]?.val &&
        arr[0]?.val !== undefined) ||
      (arr[3]?.val === arr[4]?.val &&
        arr[3]?.val === arr[5]?.val &&
        arr[3]?.val !== undefined) ||
      (arr[6]?.val === arr[7]?.val &&
        arr[6]?.val === arr[8]?.val &&
        arr[6]?.val !== undefined) ||
      (arr[0]?.val === arr[3]?.val &&
        arr[0]?.val === arr[6]?.val &&
        arr[0]?.val !== undefined) ||
      (arr[1]?.val === arr[4]?.val &&
        arr[1]?.val === arr[7]?.val &&
        arr[1]?.val !== undefined) ||
      (arr[2]?.val === arr[5]?.val &&
        arr[2]?.val === arr[8]?.val &&
        arr[2]?.val !== undefined) ||
      (arr[0]?.val === arr[4]?.val &&
        arr[0]?.val === arr[8]?.val &&
        arr[0]?.val !== undefined) ||
      (arr[6]?.val === arr[4]?.val &&
        arr[6]?.val === arr[2]?.val &&
        arr[6]?.val !== undefined)
    ) {
      setWinner(newVal);
      stopGame();
    }
  };
  const updateValue = (newVal, idx) => {
    const newArr = [...arrValues];
    newArr[idx] = { val: newVal, disable: true };
    setArrValues(newArr);
    winnerCheck(newArr, newVal);
  };
  const clickHandler = (val) => {
    if (cross) {
      updateValue("X", val);
    } else {
      updateValue("O", val);
    }

    setCross(!cross);
  };
  return (
    <div>
      <div className="App">
        <div>
          <div className="btnParent">
            <Button clickHandler={() => clickHandler(0)} val={arrValues[0]} />
            <Button clickHandler={() => clickHandler(1)} val={arrValues[1]} />
            <Button clickHandler={() => clickHandler(2)} val={arrValues[2]} />
          </div>
          <div className="btnParent">
            <Button clickHandler={() => clickHandler(3)} val={arrValues[3]} />
            <Button clickHandler={() => clickHandler(4)} val={arrValues[4]} />
            <Button clickHandler={() => clickHandler(5)} val={arrValues[5]} />
          </div>
          <div className="btnParent">
            <Button clickHandler={() => clickHandler(6)} val={arrValues[6]} />
            <Button clickHandler={() => clickHandler(7)} val={arrValues[7]} />
            <Button clickHandler={() => clickHandler(8)} val={arrValues[8]} />
          </div>
        </div>
      </div>
      <div className="winnerText">
        {winner !== "" && <p> The Winner is {winner}</p>}
      </div>
      <div className="winnerText">
        <button className="resetbtn" onClick={() => resetGame()}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;
