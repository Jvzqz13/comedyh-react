import LogoutButton from "../components/LogoutButton";
import { YouTubeDataPlayList } from "../services/yt-api";
import { useState, useEffect } from "react";
import YouTubePlayer from 'react-youtube';

console.log(YouTubeDataPlayList);

function Home () {
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
        <h1> Home </h1>
        <ul>
            {playlistItems.map( item => (
                <li key={item.id}>
                    <h2> { item.title } </h2>
                    <p> { item.description } </p>
                    <YouTubePlayer videoId={item.id}/>
                    <img src={ item.thumbnail.default} alt="Thumbnail"  />



                </li>
            ))  }
        </ul>





        <LogoutButton />
       
    
        </div>
    )
}




export default Home;