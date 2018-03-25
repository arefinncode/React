import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));


class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        console.log("At handleChange ");

        console.log("value: ",event.target.value);

        console.log("Event Target:",event.target);


        // this.setState({value: event.target.value});
        this.setState({value: event.target.value.toUpperCase()});

        //when a class function is executed program execution goes to render()
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        console.log("At handleSubmit ");
        event.preventDefault();
    }

    render() {

        console.log("this.state.value: ");
        console.log(this.state.value);
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    React Form Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>


        );


    }
}



ReactDOM.render(
    <NameForm />,
    document.getElementById('body1'),f1);


function f1() {
    console.log("TT");
}


class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('An essay was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <EssayForm />,
    document.getElementById('body2'));



class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        {/*<select multiple={true} value={['B', 'C']}>*/}
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite La Croix flavor (REACT DROPDOWN:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(
    <FlavorForm />,
    document.getElementById('body3')
);



class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        // value will contain target.checked if it is checkbox else value will contain target.value (n(Guests));

        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        //store changes..
        this.setState({
            [name]: value
        });


    }

    render() {
        return (
            <form>
                <label>
                    Is going:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    Number of guests:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>
            </form>
        );
    }
}

ReactDOM.render(
    <Reservation />,
    document.getElementById('body4')
);




ReactDOM.render(<input value="hi" />, document.getElementById('body5'));

setTimeout(function() {
    ReactDOM.render(<input value={null} />, document.getElementById('body5'));
}, 100000);



function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
    }

    handleChange(e) {
        this.setState({temperature: e.target.value});
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>Enter temperature in Celsius:</legend>
                <input
                    value={temperature}
                    onChange={this.handleChange} />
                <BoilingVerdict
                    celsius={parseFloat(temperature)} />
            </fieldset>
        );
    }
}

ReactDOM.render(
    <Calculator />,
    document.getElementById('root')
);



