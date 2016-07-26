import React, {Component} from 'react';
import ReactDOM from 'react-dom';

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
          id: 3,
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
          id: 4,
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
      ]    
    }
  }

  render(){
    return(
      <div>
        App
      </div>
    )
  }
}

export default App