
import Footer from './components/Footer';
import Header from './components/header'
import Sidebar from './Sidebar';
import "./App.css"
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';
import { useState } from 'react';
import PostListProvider from './store/post-list-store';

function App() {
  const [selectedTab,setSelectedTab]= useState('')


  return(
    <PostListProvider>
   <>
  
     
      
    <div className='app-container'>
     <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>

    <div className='content'>
      <Header></Header>
    {selectedTab=="Create Post"?<CreatePost></CreatePost>:  <PostList></PostList>}  
    
    <Footer></Footer>
    </div>
   
 
     
    </div>
    </>
    </PostListProvider>

  
  )
 
}

export default App;
