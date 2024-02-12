import YouTubePlayer from 'react-youtube';


function YoutubeComponent ({playlistItems}) {

    return (

        <div className='youtubeComponent'>
            <ul>
                {playlistItems && playlistItems.map( item => (
                    <li key={item.id}>
                        <h2> { item.title } </h2>
                        {/* <p> { item.description } </p> */}
                        <YouTubePlayer videoId={item.id}/>
                        <img src={ item.thumbnail} alt="Thumbnail"  />
                    </li>
                ))}
            </ul>
        </div>
        )
}


export default YoutubeComponent