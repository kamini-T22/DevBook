//App.js
import Home from "./PAGES/homepage/home";
import Search from "./PAGES/searchpage/Search";
import Post from "./PAGES/postpage/post";
import Learn from "./PAGES/learningpage/learn";
import ProfilePage from "./PAGES/profilepage/profile";
import UpdateProfile from "./PAGES/profilepage/updateprofile";
import SignIn from "./PAGES/SignInSignUp/SignInMain";
import SignUp from "./PAGES/SignInSignUp/SignUp";
import Notifications from "./PAGES/notificationpage/notifications";
import User from "./PAGES/userpageview/User";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Message from "./PAGES/chatIntergration/Message";
import News from "./PAGES/newspage/news";
import More from "./PAGES/Morepage/More";
import Job from "./PAGES/Jobpage/Job";
import Event from "./PAGES/EventPage/Event";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/search" element={<Search />} />
          <Route path="/posts" element={<Post />} />
          <Route path="/learning" element={<Learn />} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/updatepage" element={<UpdateProfile />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/userpageview" element={<User />} />
          <Route path="/message" element={<Message/>}/>
          <Route path="/news" element={<News/>}/>
          <Route path="/more" element={<More/>}/>
          <Route path="/event" element={<Event/>}/>
          <Route path="/job" element={<Job/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
