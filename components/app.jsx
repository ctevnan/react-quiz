import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import questionList from './quiz/questionList.jsx'

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
            {
              id: 'a',
              text: 'Thor'
            },
            { id: 'b',
              text: 'George'
            },
            {
              id: 'c',
              text: 'Chris'
            }    
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'Who is your favorite comic book character?',
          choices: [
            {
              id: 'a',
              text: 'Captain Stretchy Socks'
            },
            { id: 'b',
              text: 'Superman'
            },
            {
              id: 'c',
              text: 'Duff Man'
            }    
          ],
          correct: 'b'
        },
        {
          id: 3,
          text: 'Where do you work?',
          choices: [
            {
              id: 'a',
              text: 'Halberd Technologies, LLC'
            },
            { id: 'b',
              text: 'S.H.I.E.L.D.'
            },
            {
              id: 'c',
              text: 'Apple'
            }    
          ],
          correct: 'a'
        },
        {
          id: 4,
          text: 'Where did you attend High School?',
          choices: [
            {
              id: 'a',
              text: 'Ridgemont High'
            },
            { id: 'b',
              text: 'Rydell High'
            },
            {
              id: 'c',
              text: 'New Bedford High'
            }    
          ],
          correct: 'c'
        }
      ],
      score: 0,
      current: 1    
    }
  }

  render(){
    return(
      <div>
        <questionList {...this.state} setCurrent={}/>
      </div>
    )
  }
}

export default App