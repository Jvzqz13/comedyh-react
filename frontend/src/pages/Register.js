import FormComponent from "../components/Form";
import axios from 'axios'

console.log('RUNNING');

function Register () {

    const handleRegister = async (formData) =>{
        try {
            const res = await axios.post('http://localhost:4000/api/users/register', {
                email: formData.email,
                password: formData.password
            } )
            console.log(res);
            
        } catch (error) {
            console.log(error);            
        }
    }

    return(
        <div>

        <h1> Register </h1>
        <FormComponent onSubmit={handleRegister} buttonText={'Register'} signInForm={false} />

        </div>
    )
}

export default Register;