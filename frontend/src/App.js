import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';


function App() {
      const token = localStorage.getItem('Token')
      console.log(` 'TOKEN= ${ token } `);

  return (
    <div className="App">
      <Routes>

        {[ '/', '/login' ].map((path) =>(
          <Route key={Element} path={path} element = {<Login /> } />
        ) )  }

      < Route path='/register'  element={<Register />} />
      
      < Route path='home' element={ <Home /> }  />
      




      </Routes>
    </div>
  );
}

export default App;
