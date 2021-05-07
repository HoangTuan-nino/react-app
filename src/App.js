import logo from './logo.svg'
import './App.css'
import { Clock } from './Clock'
import { Toggle } from './Toggle'
import { Color } from './color'
import { Phone } from './Phone'
import { NameForm } from './Form'
// import ChildComp from './ChildComp'

function App() {
    return (
        <div className="App">
            <Clock />
            <Toggle />
            <Color />
            <Phone />
            {/* <NameForm /> */}
            {/* <ChildComp /> */}
        </div>
    )
}

export default App
