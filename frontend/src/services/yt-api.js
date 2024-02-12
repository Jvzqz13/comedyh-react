import axios from 'axios'

// YOUTUBE API GET YOUTUBE INFO/VIDEOS


const YOUTUBE_KEY = "AIzaSyDZaNZE3RvlZTnSOIJit-yiFlelDQ_YYxI" 


export async function YouTubeDataPlayList () {
    try {
            const res = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
                params:{
                    key: YOUTUBE_KEY,
                    part: 'snippet',
                    playlistId: "PL-i3EV1v5hLeT91DuXckUf6tsbMfLgZno"
                }
            })
            const videos = res.data.items.map(item => ({ 
                id: item.snippet.resourceId.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails
            }))
            console.log("videos=>", videos);
            return videos;

    } catch (error) {
        console.log(error);
    }
    
}

