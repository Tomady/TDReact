import {Component} from "react"
// import {useState} from "react"
import "./ValidationsSample.css"

class ValidationSample extends Component {
    state = {
        password: "",
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === "0000"
        });
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input
                    ref={(ref) => this.input=ref}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? "success" : "failure") : ""}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

// const ValidationSample = () => {
//     const [password, setPassword] = useState("");
//     const [clicked, setClicked] = useState("false");
//     const [validated, setValidated] = useState("false");

//     console.log("click", clicked);

//     const onChange = (e) => {
//         setPassword(e.target.value);
//     }

//     const onButtonClick = () => {
//         setClicked("true");
//         setValidated(password === "0000")
//     }

//     console.log("click", clicked);

//     return (
//         <div>
//             <input
//                 type="password"
//                 value={password}
//                 onChange={onChange}
//                 className={clicked ? (validated ? "success" : "failure") : ""}
//             />
//             <button onClick={onButtonClick}>검증하기</button>
//         </div>
//     );
// }

export default ValidationSample;
