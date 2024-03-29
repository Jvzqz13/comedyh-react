
import LogoutButton from "../components/LogoutButton";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { useState } from "react";
import YouTubeDisplay from "../components/YouTubeDisplay"; //Youtube

function Home () {

    const [search, setSearch] = useState("")


    const playlistIds = [ "PLyCNmvfdHNQOaPQryzD__SA1RJS1OrFCt" ,"PLVYeh_3Gx_96ZwyG33HwajI8C9Hagif3X",  "PL-i3EV1v5hLd9H1p2wT5ZD8alEY0EmxYD", 
    "PLa7q8UDa6tvGRXE3-pdbiDQ-5_jRpqOkf","PLtIAhyXxo11_FXQgG9rF6ud4FSDEFKbE9" ]

        const searchVid = () =>{
            const filtered = playlistIds.filter(playlistId => 
               playlistId.includes(search)
                )
                console.log("SearchResults =>" , filtered);
                return filtered;
        }



    return (       

        

       <div className="homeLayout">

        <NavBar search={search} setSearch={setSearch} searchVid={searchVid} /> 
         <div className="mainContent" > 

            
            <SideBar />
            

            <div className="content" > 


            <h1> HOME </h1>

            <YouTubeDisplay  playlistIds={playlistIds} /> 

            </div>
         </div>

        
        
        <LogoutButton />
    
        </div>
        
    )
}




export default Home;