import React, {Component} from 'react';
import Car from "./cars/Car";
import _ from 'lodash';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            durations: [0, 0, 0],
            transitions: [0, 0, 0],
            nameOfAnimation: '',
            isFinished: false,

        }
    }

    randomNumber = (min = 2, max = 5) => _.random(min, max);
    handleClick = () => {
        const randNums = new Set([0, 0, 0]);

        while (randNums.size !== 3) {
            randNums.add(this.randomNumber());
        }
        const arr = Array.from(randNums);
        const newState = {
            durations: arr,
            transitions: arr,
            nameOfAnimation: 'start',
            isFinished: true
        };

        setTimeout(() => alert(`${arr.indexOf(Math.max(...arr)) + 1} Won`), `${Math.max(...arr)}050`);
        this.setState({...newState});
    }

    render() {
        const color1 = '#' + this.randomNumber(1, 16777215).toString(16),
              color2 = '#' + this.randomNumber(1, 16777215).toString(16),
              color3 = '#' + this.randomNumber(1, 16777215).toString(16)
        const {durations, nameOfAnimation, transitions} = this.state
        return (
            <div>
                <div className="image-container">
                    <Car carColor={color1} duration={durations[0]} transition={transitions[0]}
                         nameOfAnimation={nameOfAnimation}/>
                    <Car carColor={color2} duration={durations[1]} transition={transitions[1]}
                         nameOfAnimation={nameOfAnimation}/>
                    <Car carColor={color3} duration={durations[2]} transition={transitions[2]}
                         nameOfAnimation={nameOfAnimation}/>
                </div>
                <button onClick={this.handleClick}>Start</button>
            </div>
        );
    }
}

export default App;
