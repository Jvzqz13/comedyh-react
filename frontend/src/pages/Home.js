import LogoutButton from "../components/LogoutButton";
import NavBar from "../components/NavBar";
import YouTubeDisplay from "../components/YouTubeDisplay";


function Home () {

    const playlistIds = [ "PL-i3EV1v5hLd9H1p2wT5ZD8alEY0EmxYD" ]

    return ( 
       <div>
        <NavBar />

        <h1> HOME </h1>

        <YouTubeDisplay  playlistIds={playlistIds} /> 

        {/* <YouTubeDisplay  /> */}
        <LogoutButton />
       
    
        </div>
    )
}




export default Home;