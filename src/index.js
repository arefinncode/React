import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// registerServiceWorker();



const element = <p className="App-intro">Hello, world "body1"</p>;
ReactDOM.render(element,document.getElementById('body1'));



function tick() {
    const element = (
        <div>
            <h1>Hello, world with function component 'body2'!</h1>
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('body2'));
}

setInterval(tick, 1000);

// ReactDOM.render(element, document.getElementById('root'));

// const element2 = <Welcome name="Sara" />;


function Welcome(props) {
    return <h1>Hello sara with fiels="test" ..and body3., {props.name} {props.field}</h1>;
}
const elmnt = <Welcome name="Sara" field="Test" />;

ReactDOM.render(
    elmnt,
    document.getElementById('body3')
);






function formatDate(date) {
    return date.toLocaleDateString();
}



function Comment(props) {


    console.log("props: ");
    console.log(props);
    return (
        <div className="Comment">
            <div className="UserInfo">
                <img
                    className="Avatar"
                    src={props.author.avatarUrl}
                    alt={props.author.name}
                />
                <div className="UserInfo-name">
                    {props.author.name}
                </div>
            </div>
            <div className="Comment-text">{props.text} .. and <b>body4</b></div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    );
}


const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React! ...and ',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64',
    },
};

ReactDOM.render(
    <Comment
        date={comment.date}
        text={comment.text}
        author={comment.author}
    />,
    document.getElementById('body4')
);

// const elmntForComment = <Welcome name="Sara" field="Test" />;

// ReactDOM.render(
//     elmnt,
//     document.getElementById('body3')
// );
//

function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()} with body5.</h2>
        </div>
    );
}

function tick2() {
    ReactDOM.render(
        <Clock date={new Date()} />,
        document.getElementById('body5')
    );
}

setInterval(tick2, 1000);

// Adding Local State to a Class

// at state and lifecycle ==> https://reactjs.org/docs/state-and-lifecycle.html
// at state and lifecycle ==> https://reactjs.org/docs/state-and-lifecycle.html

class Clock2 extends React.Component {
    constructor(props) {

        // Class components should always call the base constructor with props
        super(props);
        //sent to base.
        this.state = {date: new Date()};


        console.log("this.timerID for the first time: ");
        console.log(this.timerID);
    }


    // Adding Lifecycle Methods to a Class
    // These methods are called “lifecycle hooks”.

    // The componentDidMount() hook runs after the component output has been
    // rendered to the DOM. This is a good place to set up a timer:

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );


        console.log("this.timerID: ");
        console.log(this.timerID);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world! from Clock2 Class Module</h1>
                <h2>It is {this.state.date.toLocaleTimeString()} ... with body6</h2>
            </div>
        );
    }
}

ReactDOM.render(
    <Clock2 />,
    document.getElementById('body6')
);






 // state  last code >> https://reactjs.org/docs/state-and-lifecycle.html
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

function App2() {
    return (
        <div>
            <Clock3 />
            <Clock3 />
            <Clock3 />
        </div>
    );
}

ReactDOM.render(<App2 />, document.getElementById('body7'));




