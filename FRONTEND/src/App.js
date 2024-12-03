import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import { AuthProvider } from './context/AuthContext.jsx';
// import "./logo.svg";
import Authentication from './pages/Authentication.jsx';
import History from './pages/history.jsx';
import HomeComponent from './pages/home.jsx';
import LandingPage from './pages/landing.jsx';
import VideoMeetComponent from './pages/VideoMeet.jsx';
function App() {
    
    return(
<div className='App'>
    <Router>
      <AuthProvider>
        <Routes>


              {/* {<Route path ='/home' element = />} */}
              <Route path = '/' element  = {<LandingPage/>} />

                <Route path='/auth' element = {<Authentication/>} />
                
                <Route path='/home' element = {<HomeComponent/>} />

                <Route path='/:url' element ={ <VideoMeetComponent/>} />   
                <Route path='/history' element = {<History/>} />
            </Routes>
          </AuthProvider>
    </Router>
        
</div>
);
}

export default App;