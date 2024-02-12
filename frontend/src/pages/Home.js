import LogoutButton from "../components/LogoutButton";
import NavBar from "../components/NavBar";
import YouTubeDisplay from "../components/YouTubeDisplay";


function Home () {

    return ( 
       <div>
        <NavBar />
        <h1> HOME </h1>

        <YouTubeDisplay  />
        <LogoutButton />
       
    
        </div>
    )
}




export default Home;