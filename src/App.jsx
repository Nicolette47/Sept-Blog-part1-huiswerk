import './App.css'
import logo from './assets/logo-white.png'
import {Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home.jsx'
import NewPost from './pages/newpost/NewPost.jsx';
import NotFound from './pages/notfound/NotFound.jsx';
import OverviewPosts from './pages/overviewposts/OverviewPosts.jsx';
import Navigation from './pages/navigation/Navigation.jsx';
import PostDetail from './pages/postdetailpagina/PostDetail.jsx';


function App() {

    return (
        <div className="page-container">
            <Navigation/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/newpost" element={<NewPost />} />
                <Route path="/overviewposts" element={<OverviewPosts />} />
                <Route path="/posts/:postId" element={<PostDetail />} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    )
}

export default App
