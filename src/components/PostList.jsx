import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import { useContext, useState,useEffect } from "react";
import WelcomeMessege from "./WelcomeMessege";
import LoadingSpinner from "./LoadingSpinner";


const PostList=()=>{
  const {postList,addPostsInitials} = useContext(PostListData)
  const[fetching, setFetching]= useState(false);
  
    useEffect(()=>{
      setFetching(true);
      const controller= new AbortController();
      const signal= controller.signal;



      fetch("https://dummyjson.com/posts",{signal}).
      then((res)=>res.json())
      .then((data)=>{
        addPostsInitials(data.posts)
        setFetching(false)
      });

      return()=>{
        console.log("cleaning up useeffect");
        controller.abort();
      }
    },[]);

 
 
  return (
    <>
    {fetching&&<LoadingSpinner/>}
    {!fetching&&postList.length===0&&<WelcomeMessege />}
    {!fetching&&postList.map((post)=>(<Post key ={post.id} post={post}></Post>))}
     


    </>
  )

}


export default PostList;