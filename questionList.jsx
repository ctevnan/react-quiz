import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import question from './question.jsx';

class questionList extends Component{
  render(){
    return(
      <div className="questions">
        {
          this.props.questions.map(question => {
            if(question.id == this.props.current){
              return <question question={question} key={question.id} {...this.props}/>
            }
          })
        }  
      </div>
    )
  }
}

export default questionList