import React, {useState, useCallback, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';


const text1 = {text = "hon", symbol = "ほん"}
const text2 = {text = "inu", symbol　= "いぬ"}
const text3 = {text = "iku", symbol = "いく"}
const text4 = {text = "dare", symbol = "だれ"}
const text5 = {text = "nani", symbol = "なに"}
const text6 = {text = "neko", symbol = "ねこ"}
const text7 = {text = "momo", symbol = "もも"}
const text8 = {text = "kare", symbol = "かれ"}
const text9 = {text = "koen", symbol = "こえん"}
const text10 = {text = "ringo", symbol = "りんご"}
const text11 = {text = "denwa", symbol = "でんは"}
const text12 = {text = "fuyu", symbol = "ふゆ"}
const text13 = {text = "natsu", symbol = "なつ"}
const text14 = {text = "atsui", symbol = "あつい"}
const text15 = {text = "samui", symbol = "さむい"}
const text16 = {text = "kazoku", symbol = "かぞく"}
const text17 = {text = "watashi", symbol = "わたし"}
const text18 = {text = "kanojo", symbol = "かのじょ"}
const text19 = {text = "kawaii", symbol = "かわいい"}
const text20 = {text = "minikui", symbol = "みにくい"}
const text21 = {text = "kireina", symbol = "きれいな"}
const text22 = {text = "bungaku", symbol = "ぶんがく"}
const text23 = {text = "daigakusei", symbol = "だいがくせい"}
const text24 = {text = "omoshiroi", symbol = "おもしろい"}
const text25 = {text = "hanashimasu", symbol = "はなします"}
const text26 = {text = "tabemasu", symbol = "たべます"}
const text27 = {text = "nomimashita", symbol = "のみました"}
const text28 = {text = "arukimashita", symbol = "あるきました"}
const text29 = {text = "nemashou", symbol = "ねましょう"}
const text30 = {text = "mattemashou", symbol = "まってましょう"}

const textNumber = 0
const listText = [text1, text2, text3, text4, text5, text6, text7, text8, text9, text10,text11, text12, text13, text14, text15,text16, text17, text18, text19, text20,text21, text22, text23, text24, text25,text26, text27, text28, text29, text30]
// Display Romanji
const characterIsSubset = (clickedHiragana, fullString) => {
  const lengthOfLetters = clickedHiragana.length; 
  for (let x=0; x<lengthOfLetters; x+=1){
    const currentLetter=clickedHiragana[x]
    const otherHiragana=fullString[x]
    if (currentLetter !== otherHiragana){
      return false
    }
  }
  return true
}


function App() {
  const [clickedHiragana, setHiraganaClicked] = useState ("");
  const [numMistakesClicked, setNumMistakesClicked] = useState (0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [numCorrectClicked, setNumCorrectClicked] = useState(0);

  const updateTextMistake=useCallback (e => {
    const text=e.target.value;
    if (text.length>clickedHiragana.length) {
      const isSubString=characterIsSubset(
        text, listText[currentTextIndex]
      )
      if (!isSubString){
        setNumMistakesTyped (numMistakesClicked+1)
      }
    }})

  const updateTextCorrect=useCallback (e => {
     const text=e.target.value;
    if (text.length=clickedHiragana.length) {
       const isSubString=characterIsSubset(
        text, listText[currentTextIndex]
        )
        if (isSubString){
          setNumCorrectClicked (numCorrectClicked+1)
        }
      }
    
  
    setLettersTyped(text)
  }, [setHiraganaClicked, clickedHiragana, numMistakesClicked, currentTextIndex])

  const startOver = () => {
    setNumMistakesClicked(0)
    setNumCorrectClicked(0)
    setHiraganaClicked("")
  }

  const nextText = () =>{
    setCurrentTextIndex (currentTextIndex+1)
    setNumMistakesClicked(0)
    setNumCorrectClicked(0)
    setHiraganaClicked("")
  }

  return (
      <div className="centered">
        <article class="intro">
            <h1>Hiragan Challenge</h1>
            <p>Select the correct hiragana characters for the romanized vocabulary word displayed. Good luck!</p>
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
                value={clickedHiragana}>
                </textarea>
            </div>

            <div class="meta">
            <section id="correctNo">
                    <div class="Correct">Correct:</div>
                    <div class="correctNo">{numCorrectClicked}</div>
                </section>
                <section id="mistakesNo">
                    <div class="mistakes">Mistakes:</div>
                    <div class="mistakesNo">{numMistakesClicked}</div>
                </section>
                <button onClick={startOver} id="reset">Start over</button>
                <button onClick={nextText} id="next">Next</button>
            </div>
        </section>
    </div>
  );
  } 

export default App;
