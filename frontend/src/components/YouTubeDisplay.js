import YoutubeRender from "../components/YouTubeRender";
import { useState, useEffect } from "react";
import { YouTubeDataPlayList } from "../services/yt-api";


console.log(YouTubeDataPlayList);

function YouTubeDisplay () {
    const [ playlistItems, setPlaylistItems ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(null)

    useEffect(()=> {
        async function fetchYouTubeItems () {
            try {

                const data = await YouTubeDataPlayList();
                console.log(`YOUTUBE API RESPONSE =>`, data);
                setPlaylistItems(data);
                setLoading(false)
                
            } catch (error) {
                setError(error)
                setLoading(false)
            }
        }
            fetchYouTubeItems();
    }, []);

    if(loading){
        return <div> Loading... </div>
    }
    if(error){
        return <div> Error: {error.message} </div>
    }


    return ( 
       <div>
        <YoutubeRender playlists={playlistItems}  />

       
    
        </div>
    )
}




export default YouTubeDisplay;