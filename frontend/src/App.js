import './App.css';
import { useState } from 'react'
import axios from 'axios';    //need to import to use axios

function App() {
  const [answer, setAnswer] = useState("")
  const [result, setResult] = useState("")

  const handleAnswer = e => {
    setAnswer(e.target.value)
  }

    //the approach using native Fetch API to send and receive data through API calls

  // const submitAnswer = async(e) => {
  //   e.preventDefault();
  //   let formData = new FormData();
  //   formData.append("answer",answer)
  //   fetch(
  //     "http://127.0.0.1:8000/submitAnswer", 
  //     {    
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         },
  //       body: formData,
  //     })
  //     .then((response) => {
  //         return response.json();
  //     })
  //       .then((response) => {
  //         console.log(response.result)
  //         setResult(response.result)
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //       setAnswer("")
  // }



  //the approach using Axios library to send and receive data through API calls

  const submitAnswer = async(e) => {
      e.preventDefault();
      let formData = new FormData();
      formData.append("answer",answer)
      axios.post("http://127.0.0.1:8000/submitAnswer", formData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
        })
        .then(({data}) => {
          console.log(data);
          setResult(data.result)
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
