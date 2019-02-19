import React, {Component} from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quiz_data.json');

class Quiz extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quiz_position: 0
    }
  }

  showNextQuestion() {
    this.setState((state) => {
      return {quiz_position: state.quiz_position + 1}
    })
  }

  handleResetClick() {
    this.setState({quiz_position: 1});
  }
  render() {
    let isQuizEnd = ((this.state.quiz_position  ) === quizData.quiz_questions.length);
    return (
      <div>
      {isQuizEnd ? <QuizEnd  handleResetClick={this.handleResetClick.bind(this)}/>
      :
      <QuizQuestion quiz_question={quizData.quiz_questions[this.state.quiz_position]}
        showNextQuestionHandler={this.showNextQuestion.bind(this)}
      />}
      </div>
    )

  }
}

export default Quiz;