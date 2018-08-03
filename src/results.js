import React from 'react';
import GuessForm from './guess-form';
import CorrectGuess from './correct-guess';
import IncorrectGuess from './incorrect-guess';

export default class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          correct: 45
        }
    }
    // render() {
    //   if ()
    // }
}
