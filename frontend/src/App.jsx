
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetails from './pages/PostDetails'
import AnnouncementsDetails from './pages/AnnouncementsDetails'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import Announcements from './pages/Announcements'
import CreateAnnouncement from './pages/CreateAnnouncement'
import { UserContextProvider } from './context/UserContext'
import MyBlogs from './pages/MyBlogs'
import Forum from './pages/Forum'
import ForumsDetails from './pages/ForumDetails'
import EditForums from './pages/EditForums'
import EditAnnouncements from './pages/EditAnnouncements'



const App = () => {



  return (
    <UserContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/write" element={<CreatePost />} />
        <Route exact path="/createannouncement" element={<CreateAnnouncement />} />
        <Route exact path="/posts/post/:id" element={<PostDetails />} />
        <Route exact path="/announcements/announcement/:id" element={<AnnouncementsDetails />} />
        <Route exact path="/announcements" element={<Announcements />} />
        <Route exact path="/forum" element={<Forum/>} />
        <Route exact path="/forums/forum/:id" element={<ForumsDetails />} />
        <Route exact path="/edit/:id" element={<EditPost />} />
        <Route exact path="/editforum/:id" element={<EditForums />} />
        <Route exact path="/editannouncement/:id" element={<EditAnnouncements />} />
        <Route exact path="/myblogs/:id" element={<MyBlogs />} />
        <Route exact path="/profile/:id" element={<Profile />} />

      </Routes>
    </UserContextProvider>
  )
}

export default App