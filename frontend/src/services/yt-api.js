import axios from 'axios'

// YOUTUBE API GET YOUTUBE INFO/VIDEOS

// add playlistID as a param



const YOUTUBE_KEY = "AIzaSyDZaNZE3RvlZTnSOIJit-yiFlelDQ_YYxI";
console.log('APIKEY=>', YOUTUBE_KEY);


export async function YouTubeDataPlayList ( playlistId  ) {   // <= here
    try {
            const res = await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
                params:{
                    key: YOUTUBE_KEY,
                    part: 'snippet',
                    playlistId: playlistId, //<= here
                    maxResults: 6
                }
            });
            if (!res.data || !res.data.items || res.data.items.length === 0) {
                throw new Error('No videos found in the playlist');
            }
            const videos = res.data.items
            .map(item => ({ 
                id: item.snippet.resourceId.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails
                
            }))
                .filter(video => video.title !== "Private video" && video.title !== "Deleted video" )
                .slice(0,4)    

                console.log("videos=>", videos);
                return videos;

    } catch (error) {
        console.log(error);
    }
    
}


