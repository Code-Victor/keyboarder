import { useState } from "react";

export default function Keyboard(props) {
  
  const [keyPressed, correct] = props.keyPressed;
  return (
    <div className={props.display?"none":"keyboard"} >
      <TwoCharacterKey
        letters={["~", "`"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["!", "1"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["@", "2"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["#", "3"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["$", "4"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["%", "5"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["^", "6"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["&", "7"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["*", "8"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["(", "9"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={[")", "0"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["_", "-"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["+", "="]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <CustomCharacterKey
        classNames="key span-lg flex-down "
        name="backspace"
        representation={"backspace"}
        keyPressed={keyPressed}
        correct={correct}
      />

      {/* <!-- row 2 --> */}
      <CustomCharacterKey
        classNames="key span-lg flex-down "
        name="tab"
        representation={"tab"}
        keyPressed={keyPressed}
        correct={correct}
      />

      <LetterKey letter="q" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="w" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="e" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="r" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="t" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="y" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="u" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="i" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="o" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="p" keyPressed={keyPressed} correct={correct} />
      <TwoCharacterKey
        letters={["{", "["]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["}", "]"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["|", "\\"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      {/* <!-- row 3 --> */}
      <CustomCharacterKey
        classNames="key span-xl flex-down "
        name="caps lock"
        representation={"caps lock"}
        keyPressed={keyPressed}
        correct={correct}
      />
      <LetterKey letter="a" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="s" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="d" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="f" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="g" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="h" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="j" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="k" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="l" keyPressed={keyPressed} correct={correct} />
      <TwoCharacterKey
        letters={[":", ";"]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={['"', "'"]}
        keyPressed={keyPressed}
        correct={correct}
      />

      <CustomCharacterKey
        classNames="key span-xl flex-down right "
        name="enter"
        representation={"Enter"}
        keyPressed={keyPressed}
        correct={correct}
      />
      {/* <!-- row 4 --> */}
      <LeftShiftKey keyPressed={keyPressed} correct={correct}/>

      <LetterKey letter="z" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="x" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="c" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="v" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="b" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="n" keyPressed={keyPressed} correct={correct} />
      <LetterKey letter="m" keyPressed={keyPressed} correct={correct} />
      <TwoCharacterKey
        letters={["<", ","]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={[">", "."]}
        keyPressed={keyPressed}
        correct={correct}
      />
      <TwoCharacterKey
        letters={["?", "/"]}
        keyPressed={keyPressed}
        correct={correct}
      />

      <RightShiftKey
        keyPressed={keyPressed}
        correct={correct}
      />
      {/* <!-- row 5 --> */}
      <CustomCharacterKey
        classNames="key span-sxl flex-down right "
        name="control"
        representation={"control"}
        keyPressed={keyPressed}
        correct={correct}
      />
      <CustomCharacterKey
        classNames="key span-xl flex-down center "
        name="option"
        representation={"option"}
        keyPressed={keyPressed}
        correct={correct}
      />
      <CustomCharacterKey
        classNames="key span-xxxxl flex-down"
        name="space"
        representation={" "}
        keyPressed={keyPressed}
        correct={correct}
      />
      <CustomCharacterKey
        classNames="key span-xl flex-down center "
        name="option"
        representation={"option"}
        keyPressed={keyPressed}
        correct={correct}
      />
      <CustomCharacterKey
        classNames="key span-xxxl flex-down right "
        name="control"
        representation={"control"}
        keyPressed={keyPressed}
        correct={correct}
      />
    </div>
  );
}
function LetterKey({ letter, keyPressed, correct }) {
  const pressed = keyPressed === letter;
  
 
  let className = "key letter";
  if (pressed) {
    if (correct) {
      className = "key letter correct";
    } else {
      className = "key letter wrong";
    }
  }
  return <div className={className}>{letter}</div>;
}
function TwoCharacterKey({ letters, keyPressed, correct }) {
  const pressed = letters.join("").indexOf(keyPressed) >= 0;


  let className = "key flex-2";
  if (pressed) {
    if (correct) {
      className = "key flex-2 correct";
    } else {
      className = "key flex-2 wrong";
    }
  }
  return (
    <div className={className}>
      <span>{letters[0]}</span>
      <span>{letters[1]}</span>
    </div>
  );
}
function CustomCharacterKey({
  classNames,
  name,
  representation,
  keyPressed,
  correct,
}) {
  const pressed = keyPressed === representation;
  let finalClassNames = classNames;
  if (pressed) {
    if (correct) {
      finalClassNames = classNames + " correct";
    } else {
      finalClassNames = classNames + " wrong";
    }
  }
  
  return <div className={finalClassNames}>{name}</div>;
}

function LeftShiftKey({keyPressed,correct}){
    const leftShiftKeyReach=['!','@','#','$','%','^','Q','W','E','R','T','Y','A','S','D','F','G','Z','X','C','V','B'];
    const pressed=leftShiftKeyReach.join("").indexOf(keyPressed) >= 0
    const classNames="key span-xxl flex-down"
    let finalClassNames=classNames
    if (pressed) {
      if (correct) {
        finalClassNames = classNames + " correct";
      } else {
        finalClassNames = classNames + " wrong";
      }
    }
    return(
        <div className={finalClassNames}>
            shift
        </div>
    )

}
function RightShiftKey({keyPressed,correct}){
    const rightShiftKeyReach=['&','*','(',')','_','+','H','J','K','L',':','"','N','M','<','>','?'];
    const pressed=rightShiftKeyReach.join("").indexOf(keyPressed) >= 0
    const classNames="key span-xxl flex-down right"
    let finalClassNames=classNames
    if (pressed) {
      if (correct) {
        finalClassNames = classNames + " correct";
      } else {
        finalClassNames = classNames + " wrong";
      }
    }
    return(
        <div className={finalClassNames}>
            shift
        </div>
    )

}

// @ts-ignore
