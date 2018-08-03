import React from 'react';
import './App.css';
import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          guesses: [],
          feedback: 'Take a Guess',
          auralStatus: '',
          correctAnswer: Math.round(Math.random() * 100) + 1
        };
      }

        restartGame() {
          this.setState({
            guesses: [],
            feedback: 'Take a Guess',
            auralStatus: '',
            correctAnswer: Math.floor(Math.random() * 100) + 1
          });
        }

        makeGuess(guess) {
          guess = parseInt(guess, 10);
          if (isNaN(guess)) {
            this.setState({ feedback: 'Please enter a valid number'});
            return;
          }

        const difference = Math.abs(guess - this.state.correctAnswer);

        let feedback;
        if (difference >= 50) {
          feedback = 'Ice Cold';
        } else if (difference >= 30) {
          feedback = 'Cold';
        } else if (difference >= 10) {
          feedback = 'Getting Warm';
        } else if (difference >= 1) {
          feedback = 'Hot';
        } else {
          feedback = 'You Got It!';
        }

        this.setState({
          feedback,
          guesses: [...this.state.guesses, guess]
        });

        document.title = feedback ? `${feedback} | Hot or Cold`: 'Hot or Cold';
      }

      generateAuralUpdate() {
        const { guesses, feedback } = this.state;
        const pluralize = guesses.length !== 1;
        let auralStatus = `${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

        if (guesses.length > 0) {
          auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are': 'It was'}: ${guesses.reverse().join(', ')}`;
        }
        this.setState({ auralStatus });
      }

      render() {
        const { feedback, guesses, auralStatus } = this.state;
        const guessCount = guesses.length;

        return (
          <div>
            <Header
              onRestartGame={() => this.restartGame()}
              onGenerateAuralUpdate={() => this.generateAuralUpdate()}
            />
            <main role='main'>
              <GuessSection
                feedback={feedback}
                guessCount={guessCount}
                onMakeGuess={guess => this.makeGuess(guess)}
              />
              <StatusSection guesses={guesses}
                auralStatus={auralStatus}
              />
              <InfoSection />
            </main>
          </div>
        );
      }
}
