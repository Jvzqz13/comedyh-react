
function YoutubeComponent ({playlistItems}) {

    return (

        <div className='youtubeComponent'>

                {playlistItems && playlistItems.map( item => (
                    <div  key={item.id} className='video-container' >
                        <iframe
                            src= {`https://www.youtube.com/embed/${item.id}`}
                            title={ item.title }
                            width="100%"
                            allowFullScreen
                            />
                            <p> {item.title} </p>
                    </div>
                
                ))}
            
        </div>
        )
}


export default YoutubeComponent