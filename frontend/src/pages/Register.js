import FormComponent from "../components/Form";
import axios from 'axios'
import { Link, useNavigate  } from "react-router-dom";

console.log('RUNNING');

function Register () {
    const navigate = useNavigate();

    const handleRegister = async (formData) =>{
        try {
            const res = await axios.post('http://localhost:4000/api/users/register', {
                email: formData.email,
                password: formData.password
            } ) 
            console.log(res);
            localStorage.setItem("comedyUser", JSON.stringify(res.data))
            if(res.status === 201){
                navigate('/Home')
            }
            if(res.status !== 200 || 201 ){
                return
            }
            
        } catch (error) {
            console.log(error);            
        }
    }

    return(
        <div>

        <h1> Register </h1>
        <FormComponent onSubmit={handleRegister} buttonText={'Register'} signInForm={false} />
        <Link to='/Login' > Have an Account? </Link>

        </div>
    )
}

export default Register;