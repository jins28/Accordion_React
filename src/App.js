import React,{useState} from 'react'
import SingleQuestion from './Question'
import './App.css';
import data from'./data'

function App() {
  const[questions,setQuestions] = useState(data)
  return (
    <main>
    <div className="container">
    <h3>Question and Answers</h3>
    <section className="info">
      {
        questions.map((question)=>{
        return  <SingleQuestion key={question.id} {...question}/>
        })
      }
    </section>
    </div>
    </main>
  );
}

export default App;
