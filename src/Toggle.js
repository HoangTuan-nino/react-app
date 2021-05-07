import { Component, createRef } from 'react'

export class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = { isToggle: false }
        this.toggleContainer = createRef()
    }   
    componentDidMount() {
        window.addEventListener('click', this.onClickOutsideHandler)
    }

    componentWillUnmount() {
        window.removeEventListener('click', this.onClickOutsideHandler)
    }
    handleClick = () => {
        this.setState({
            isToggle: !this.state.isToggle,
        })
    }
    onClickOutsideHandler = (event) => {
        console.log(this.state.isToggle)
        if (
            this.state.isToggle &&
            !this.toggleContainer.current.contains(event.target)
        ) {
            this.setState({ isToggle: false })
        }
    }
    render() {
        return (
            <div ref={this.toggleContainer}>
                <button
                    onClick={this.handleClick}
                    aria-haspopup="true"
                    aria-expanded={this.state.isOpen}
                >
                    Select an option
                    {this.state.isToggle && (
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                        </ul>
                    )}
                </button>
            </div>
        )
    }
}
