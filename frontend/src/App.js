import './App.css';
import { useState } from 'react'

function App() {
  const [answer, setAnswer] = useState("")
  const [result, setResult] = useState("")

  const handleAnswer = e => {
    setAnswer(e.target.value)
  }

  const submitAnswer = async(e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("answer",answer)
    fetch(
      "http://127.0.0.1:8000/submitAnswer", 
      {    
        method: "POST",
        headers: {
          Accept: "application/json",
          },
        body: formData,
      })
      .then((response) => {
          return response.json();
      })
        .then((response) => {
          console.log(response.result)
          setResult(response.result)
        })
        .catch((error) => {
          console.error(error);
        });
        setAnswer("")
  }

  return (
    <>
    <div className='App'>
      <h1>Mock Quiz</h1>
      <h3>What is the capital of India?</h3>
        <form>
          <label htmlFor="answer">Enter the answer: </label>
          <input type="text" id="answer" name="answer" onChange={handleAnswer} value={answer}/><br/><br/>
        </form>
        <button onClick={submitAnswer}>Submit</button><br/><br/>
        {result==="Correct" ? <label style={{color:"limegreen"}}>{result}</label>:<label style={{color:"red"}}>{result}</label>}
      </div>
    </>
  );
}

export default App;
