import Button from "./components/Button";
import { useState } from "react";
import { evaluate } from "mathjs";

export default function App() {
  const [display, setDisplay] = useState("0");
  const buttons = [
    {
      id: "one",
      inside: "1",
    },
    {
      id: "two",
      inside: "2",
    },
    {
      id: "three",
      inside: "3",
    },
    {
      id: "four",
      inside: "4",
    },
    {
      id: "five",
      inside: "5",
    },
    {
      id: "six",
      inside: "6",
    },
    {
      id: "seven",
      inside: "7",
    },
    {
      id: "eight",
      inside: "8",
    },
    {
      id: "nine",
      inside: "9",
    },
    {
      id: "zero",
      inside: "0",
    },
    {
      id: "plus",
      inside: "+",
    },
    {
      id: "minus",
      inside: "-",
    },
    {
      id: "multiply",
      inside: "*",
    },
    {
      id: "divide",
      inside: "/",
    },
    {
      id: "enter",
      inside: "Enter",
    },
  ];
  const buttonJsx = buttons.map((euta) => {
    return (
      <Button
        className="numbers"
        id={euta.id}
        inside={euta.inside}
        func={click}
        key={euta.id}
      />
    );
  });

  function click(event) {
    let kun = event.currentTarget.value;
    if (kun == "Backspace") {
        setDisplay((prevDisp) => {
          if (prevDisp=="error" || prevDisp=="0" || prevDisp.length<=1 ) {
            return "0";
          }
        else {
          return prevDisp.slice(0, -1);
        }
        });
      }
     else {
      if (kun == "Enter") {
          setDisplay((prev) => {
            try{
              let total= evaluate(prev);
              setDisplay(total);
            }catch(e){
              console.log(e.message);
              setDisplay("error")
            }
          }); 
      } else if (display == "0" || display=="error") {
        setDisplay(kun);
      } else {
        setDisplay((prev) => {
          return prev + kun;
        });
      }
    }
  }

  return (
    <div className="calcBody">
      <Button inside="Backspace"  func={click} />
      <div className="display">
        <h1>{display}</h1>
      </div>
      <div className="keys">{buttonJsx}</div>
    </div>
  );
}
