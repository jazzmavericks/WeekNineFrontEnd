import { writecookie } from "../utils/utilities";

function Register(props) {
    async function sendRegisterToBackEnd(email, password) {
        try {
            const response = await fetch(
                "http://localhost:5001/register",
                {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                }
            )
            const data = await response.json();
            console.log(data.token);
            writecookie("jwt_token",data.token,7);
        } catch (error) {
            console.log(error)
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        sendRegisterToBackEnd(props.email, props.password)
    }
     console.log(props.email)
    return (
        <div class="register-section">
        <h2>Register User</h2>
        <form onSubmit={handleSubmit}>
            <label for="email">Enter your email</label>
            <input className="emailbox" type="text" id="email" required onChange={(event) => props.setEmail(event.target.value)}></input>
            <br />
            <label for="password">Enter your new password</label>
            <input className="passwordbox" type="text" id="password" required onChange={(event) => props.setPassword(event.target.value)}></input>
            <br />
            <input type="submit" />
        </form>
        </div>
    )
};

export default Register;