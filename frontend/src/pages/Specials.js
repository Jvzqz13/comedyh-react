
import LogoutButton from "../components/LogoutButton";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { useState } from "react";
import YouTubeDisplay from "../components/YouTubeDisplay"; //Youtube

function Specials () {

    const [search, setSearch] = useState("")


    const playlistIds = [ "PLLOgH1Sa4dwwCa69sIdiwvfMzIFnwLprZ" ]

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
            <SideBar className="specialSidebar" />

            
            

            <div className="content" > 


            <h1> Specials </h1>

            <YouTubeDisplay  playlistIds={playlistIds} /> 

            </div>
         </div>

        
        
        <LogoutButton />
    
        </div>
    )
}




export default Specials;