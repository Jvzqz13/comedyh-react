import YoutubeRender from "../components/YouTubeRender";
import { useState, useEffect } from "react";

import { YouTubeDataPlayList } from "../services/yt-api";
import YoutubeComponent from "./YoutubeComponent";

// add playlistID as a param

function YouTubeDisplay () { // <= {playlistIDs}
    // const [ playlistData, setPlaylistData ] = useState([])

    const [ playlistItems, setPlaylistItems ] = useState([]); //<= remove
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null)

    useEffect(()=> {
        async function fetchYouTubeItems () {
            try {
                // const playlistDataP = playlistIDs.map(id => YouTubeDataPlayList(id))
                // const playlists = await Promise.all(playlistDataP)

                const data = await YouTubeDataPlayList();
                console.log(`YOUTUBE API RESPONSE =>`, data);

                // set playlistData (playlists)

                setPlaylistItems(data);
                setLoading(false)
                
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
            fetchYouTubeItems();
    }, []); // <= [playlistsIds]

    if(loading){
        return <div> Loading... </div>
    }
    if(error){
        return <div> Error: {error.message} </div>
    }


    return ( 
       <div> 

        {/* {playlistData.map((playlist, index) => (
            <div key={index}>
                <h4> playlist {index +1 } </h4>
                <YoutubeComponent playlistItems={playlist} />
            </div>
        )
        )} */}

        <YoutubeRender playlists={playlistItems}  />
    
        </div>
    )
}




export default YouTubeDisplay;