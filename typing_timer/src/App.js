import React, {useState, useCallback, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


const text1 = "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife-Jane Austen"
const text2 = "Gentle reader, may you never feel what I then felt! May your eyes never shed such stormy, scalding, heart-wrung tears as poured from mine. May you never appeal to Heaven in prayers so hopeless amd so agnoized as in that hour left my lips: for never may you, like me, dread to be the instrument of evil to what you wholly love-Charlotte Bronte"
const text3 = "The instant her voice broke off, ceasing to compel my attention, my belief, I felt the basic insincertiy of what she had said. It made me uneasy, as thought the whole evening had been a trick of some sort to exact a contributory emotion from me. - F Scott Fitzgerald"
const text4 = "Reason had had nothing to do with his whimsical conversion, which was perhaps the mere freak of a careless manin search of a new sensation, and temporarily impressed by his mother's death. - Thomas Hardy"

const textNumber = 0
const listText = [text1, text2, text3, text4]
// Hello
const wordIsSubset = (typedLetters, fullString) => {
  const lengthOfLetters = typedLetters.length; 
  for (let x=0; x<lengthOfLetters; x+=1){
    const currentLetter=typedLetters[x]
    const otherLetters=fullString[x]
    if (currentLetter !== otherLetters){
      return false
    }
  }
  return true
}


function App() {
  const [lettersTyped, setLettersTyped] = useState ("");
  const [numMistakesTyped, setNumMistakesTyped] = useState (0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(false);

  const updateText=useCallback (e => {
    setIsTimerActive (true);
    const text=e.target.value;
    if (text.length>lettersTyped.length) {
      const isSubString=wordIsSubset(
        text, listText[currentTextIndex]
      )
      if (!isSubString){
        setNumMistakesTyped (numMistakesTyped+1)
      }
    }
  
    setLettersTyped(text)
  }, [setLettersTyped, lettersTyped, numMistakesTyped, currentTextIndex])

  const startOver = () => {
    setNumMistakesTyped(0)
    setLettersTyped("")
    setSeconds(0)
    setIsTimerActive(false)
  }

  const nextText = () =>{
    setCurrentTextIndex (currentTextIndex+1)
    setNumMistakesTyped(0)
    setLettersTyped("")
    setSeconds(0)
    setIsTimerActive(false)
  }

  useEffect(() => {
    let interval = null;
    if (isTimerActive){
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else {setSeconds (0)}
      return () => clearInterval(interval);
  }, [isTimerActive]);

  return (
      <div className="centered">
        <article class="intro">
            <h1>Literary Typing Timer</h1>
            <p>This is a typing test. Type the quotation and author EXACTLY as you see it. When you have finished the one you are on, click Next to move on to the next quoatation. Good luck!</p>
        </article>
        <section class="test-area">
            <div id="origin-text">
                <p>{listText[currentTextIndex]}</p>
            </div>

            <div class="test-wrapper">
                <textarea id="test-area" 
                name="textarea" 
                rows="6" 
                onChange={updateText}
                value={lettersTyped}
                placeholder="The clock starts when you start typing.">
                </textarea>
            </div>

            <div class="meta">
                <section id="clock">
                    <div class="timer">{seconds+" seconds "}</div>
                </section>
                <section id="mistakesNo">
                    <div class="mistakes">Mistakes:</div>
                    <div class="mistakesNo">{numMistakesTyped}</div>
                </section>
                <button onClick={startOver} id="reset">Start over</button>
                <button onClick={nextText} id="next">Next</button>
            </div>
        </section>
    </div>
  );
}

export default App;




