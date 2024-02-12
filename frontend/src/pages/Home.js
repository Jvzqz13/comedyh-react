import LogoutButton from "../components/LogoutButton";
import NavBar from "../components/NavBar";
import YouTubeDisplay from "../components/YouTubeDisplay";


function Home () {

    const playlistIds = [ "PLyCNmvfdHNQOaPQryzD__SA1RJS1OrFCt" ,"PL-i3EV1v5hLd9H1p2wT5ZD8alEY0EmxYD", 
    "PLa7q8UDa6tvGRXE3-pdbiDQ-5_jRpqOkf", "PLtIAhyXxo11_FXQgG9rF6ud4FSDEFKbE9" ]

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