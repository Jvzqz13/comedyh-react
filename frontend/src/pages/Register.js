import FormComponent from "../components/Form";
import axios from 'axios'
import { Link, useNavigate  } from "react-router-dom";

console.log('RUNNING');

function Register () {
    const navigate = useNavigate();

    const handleRegister = async (formData) =>{
        try {
            const res = await axios.post('https://comedy-backend.onrender.com/api/users/register', 
            // const res = await axios.post('http://localhost:4000/api/users/register', //<==testing
            {
                email: formData.email,
                password: formData.password
            } ) 
            console.log(res);
            localStorage.setItem("comedyUser", JSON.stringify(res.data))
            if(res.status === 201){
                navigate('/home')
            }
            else {
                console.error('Registration failed')
            }
            
        } catch (error) {
            console.log(error);            
        }
    }

    return(
        <div className="registerform">

        <h1> Register </h1>
        <FormComponent onSubmit={handleRegister} buttonText={'Register'} signInForm={false} />
        <Link to='/Login' > Have an Account? </Link>

        </div>
    )
}

export default Register;