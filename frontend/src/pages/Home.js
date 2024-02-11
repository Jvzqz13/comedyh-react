import LogoutButton from "../components/LogoutButton";

function Home () {

  const sessionData = window.sessionStorage.getItem('sessionKey');
  if (sessionData) {
      console.log('Session data exists:', sessionData);
  } else {
      console.log('Session data does not exist');
  }

    return ( 
        <div>

        <h1> Home </h1>
        <LogoutButton />
       
    
        </div>
    )
}




export default Home;