import FormComponent from "../components/Form";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'

function Login () {
    const navigate = useNavigate();

    const handleLogin = async (formData) =>{
        try {
            const res = await axios.post('http://localhost:4000/api/users/login', {
                email: formData.email,
                password: formData.password
            })
            if(res.status === 200){
                navigate('/Home')
            }
            if(res.status !== 200){
                return
            }

            console.log(res);
            localStorage.setItem("comedyUser", JSON.stringify(res.data))
           
        } catch (error) {
            console.log(error);            
        }
    }

    return (
        <div>
            <h1> Login </h1>

            <FormComponent onSubmit={handleLogin} buttonText={'Log In'} signInForm={true}  />
            <Link to='/Register' > Don't Have an Account? </Link>
            
            


        </div>
    )
}

export default Login;