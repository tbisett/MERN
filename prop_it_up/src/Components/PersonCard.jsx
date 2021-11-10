import React, {Component} from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
// EVRYTHING THAT IS DYNAMIC HAS TO BE PUT IN THIS.STATE
// STATE IS IMMUTABLE, WHICH IS WHY YOU USE .setState TO MAKE CHANGES 
// PROPS IS REFERRING TO THE PROPERTIES IN THE APP FUNCTION IN APP.JS(PersonCard in this case)
        this.state = {
            age : this.props.age
        }

    }
    // CALLBACK FUNCTION TO INCREASE AGE OF A PERSON BY 1 WHEN BUTTON IS PRESSED
    increaseAge = () => {
        console.log("you've aged");
        this.setState({
            age : this.state.age + 1
        })
    }
    render() {
        return (
            <div className="outline"> 
                <h1 className= "header">{this.props.header}</h1>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.increaseAge}>Birthday button for {this.props.header}</button>
            </div>
        )    
    }
}
// ALWAYS HAVE AN EXPORT FOR COMPONENTS
export default PersonCard