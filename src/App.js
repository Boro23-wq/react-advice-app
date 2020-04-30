import React from 'react'
import './App.css'
import axios from 'axios'

class App extends React.Component {
    state = { advice: '' }

    componentDidMount() {
        this.fetchAdvice();
    }
    //a method or a function inside a class
    fetchAdvice = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then((response) => {
            const { advice } = response.data.slip
            this.setState({ advice })
        })
        .catch((err) =>{
            console.log(err)
        }) 
    }
    render() {
        const { advice } = this.state;
        return (
            <div className="app">
                <div className="card">
                    <h1 className="heading">{ advice }</h1>
                    <button className="button" onClick={this.fetchAdvice}>
                        <span>MORE ADVICE!</span>
                    </button>
                </div>
            </div>
            
        );
    }
}

export default App;
   
