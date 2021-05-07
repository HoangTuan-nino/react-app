import React, { Component } from 'react'
import './color.css'

export class Color extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: '',
        }
    }
    changeColor = (event) => {
        this.setState({
            color: event.target.value,
        })
    }
    handleSubmit = (event) => {
        alert('This color is: ' + this.state.color)
        // event.preventDefault()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div
                    style={{ backgroundColor: this.state.color }}
                    className="bg-color"
                >
                    <input
                        value={this.state.color}
                        onChange={this.changeColor}
                        type="text"
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Color
