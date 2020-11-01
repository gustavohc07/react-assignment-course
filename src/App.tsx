import React, { Component } from 'react';
import Validation from "./Validation/Validation";
import Char from './Char/Char'

class App extends Component {
    state = {
        chars: [
            { id: 1, letter: 'a' },
            { id: 2, letter: 'b' }
        ],
        inputLength: 0,
        inputText: ''
    }

    inputChangeHandler = (value: string) => {
        const stringArr: string[] = value.split('')
        const stringLength: number = stringArr.length

        const charsArr: { id: number, letter: string }[] = stringArr.map((char, index) => {
            return { id: index, letter: char}
        })


        this.setState({
            inputText: value,
            chars: charsArr,
            inputLength: stringLength,
        })
    }

    deleteCharacterHandler = (charIndex: number) => {
        const chars: { id: number, letter: string }[] = [...this.state.chars]
        chars.splice(charIndex, 1)
        const newInputTextArr: string[] = chars.map(char => {
            return char.letter
        })
        this.setState({
            chars: chars,
            inputLength: this.state.inputLength - 1,
            inputText: newInputTextArr.join('')
        })
    }

  render() {
        let chars = null

        if (this.state.inputLength > 0 && this.state.inputLength < 21) {
            chars = (
                <div>
                    {this.state.chars.map((char, index) => {
                        return (
                            <Char
                                key={char.id}
                                letter={char.letter}
                                click={this.deleteCharacterHandler.bind(this, index)}
                            />
                        )
                    })}
                </div>
            )

        }
        return (
            <div className="App">
                <input
                    type="text"
                    onChange={(event) => this.inputChangeHandler(event.target.value)}
                    value={this.state.inputText}
                />
                <p>Text length: {this.state.inputLength}</p>
                <Validation textLength={this.state.inputLength} />
                { chars }
            </div>
        );
  }
}

export default App;
