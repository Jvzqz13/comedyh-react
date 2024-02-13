import { useState, useEffect } from "react";
import { YouTubeSpecials } from '../services/yt-api-specials' // YOutubeAPI
import YoutubeComponent from "./YoutubeComponent";


function YouTubeDisplay ( {playlistIds} ) { // <= {playlistIDs}
    const [ playlistData, setPlaylistData ] = useState([]) 


    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null)

    useEffect(()=> {
        async function fetchYouTubeItems () {
            try {
                const playlistDataP = playlistIds.map(id => YouTubeDataPlayList(id))
                const playlists = await Promise.all(playlistDataP)

                

               setPlaylistData(playlists)

                setLoading(false)
                
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
            fetchYouTubeItems();
    }, [playlistIds]); // <= [playlistsIds]

    if(loading){
        return <div> Loading... </div>
    }
    if(error){
        return <div> Error: {error.message} </div>
    }

    return ( 
       <div> 

        {playlistData.map((playlist, index) => (
            <div key={index}>
                {/* <h4> playlist  {index +1 }  </h4> */}
                <YoutubeComponent playlistItems={playlist} />
            </div>
        )
        )}

        {/* <YoutubeRender playlists={playlistItems}  /> */}
    
        </div>
    )
}




export default YouTubeDisplay;