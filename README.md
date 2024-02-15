## Comedy Youtube Clone Using Youtube API ##

This project was mainly to have a youtube clone for comedy only

* deployment https://comedy-frontend.netlify.app
* backend deployment  https://comedy-backend.onrender.com

## Built with
* MongoDB
* ExpressJS
* React
* Node 
* React Bootstrap
## Dependencies
* Bcrypt
* Coookie-parser
* Cors
* Dotenv
* Express-session
* jsonwebtoken
* Mongoose
* Passport/Passport-local (authentication middleware)

## Youtube API HTTP Request
* GET https://www.googleapis.com/youtube/v3/playlists
* Get Youtube API Key 
-- https://developers.google.com/youtube/v3 

## Backend 
* Created CRUD for the user Schema
* Created profile schema linked to UsersId 
* User's password is hashed with bcrypt and not sent to client 
* Implended token auth with jsonwebtoken
* Used Passport to verify logIn   

## Fronend
* Created services folder
* The yt-api file fetches playlists id, title, description, thumnail and video. 
* ! == "Private video" and !== "Deleted video" filters out videos that were deleted and private videos
* YoutubeComponent takes in the playlist items and uses iFrame to display the videos
* YoutubeRender takes in the YoutubeComponent and the playlist to render the videos, but this is used for just 1 playlist  
* YoutubeDisplay takes in YoutubeComponent to render different playlists and great a gallery
* YoutubeSpecials - Needs more work 

## Up coming features 
* finished pages
* api for eventbrite to be able to see upcoming comedy events near you

## Known Issues
* ## Alot... 
* thank you for patience..... 



