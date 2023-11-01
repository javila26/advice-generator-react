// import divider from "../../images/pattern-divider-desktop.svg";
import dice from "../../images/icon-dice.svg";
import "./card.css";
import { useState, useEffect } from "react";
const API_ENDPOINT = "https://api.adviceslip.com/advice";

function Card() {
  const [advice, setAdvice] = useState({
    id: "",
    advice:
      "It is easy to sit up and take notice, what's difficult is getting up and taking action.",
  });
  const [generated, isGenerated] = useState(false);


  useEffect(() => {
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((data) =>
        setAdvice({
          id: data.slip.id,
          advice: data.slip.advice,
        })
      );
  }, [generated]);

  function getAdvice(event) {
    isGenerated(!generated);
  }

  return (
    <div className="card">
      <h1>ADVICE #{advice.id}</h1>
      <p>
        <span>"</span>
        {advice.advice}
        <span>"</span>
      </p>
      <img className="divider" alt="" />
      <div className="dice">
        <button onClick={getAdvice}>
         <img src={dice} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Card;
