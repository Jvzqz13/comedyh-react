import { Button } from 'react-bootstrap'

function LogoutButton () {

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = '/';  
    }

    return (
        <div>
        <Button variant="secondary" onClick={handleLogout} >Log out</Button>
        </div>
    )
}

export default LogoutButton;