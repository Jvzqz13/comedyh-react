import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Specials from './pages/Specials';
import Trending from './pages/Trending';
import Podcasts from './pages/Podcasts'
import Explore from './pages/Explore';
import Shorts from './pages/Shorts';
import Subs from './pages/Subs';
import Shopping from './pages/Shopping';
import WatchLater from './pages/WatchLater';
import History from './pages/History';
import UpcomingShows from './pages/UpcomingShows';

function App() {

  return (

    <div className="App">

      <Routes>

        {[ '/', '/login' ].map((path) =>(
          <Route key={Element} path={path} element = {<Login /> } />
        ) )  } 
      < Route path='/register'  element={<Register />} />
      < Route path='home' element={ <Home /> }  />
      <Route path='/specials' element={  <Specials />  }  />
      <Route path='/trending' element={ <Trending /> } />
      <Route path='/podcast' element={ < Podcasts /> }  />
      <Route path='/explore' element={ <Explore /> } />
      <Route path='/shorts' element={ <Shorts /> }  />
      <Route path='/subs' element={ <Subs /> } />
      <Route path='/shopping' element={ <Shopping /> } />
      <Route path='/watchlater' element={ <WatchLater /> } />
      <Route path='/history' element={ <History /> } />
      <Route path='/upcomingshows' element= { <UpcomingShows /> } />




      </Routes >
    </div>
  );
}

export default App;
