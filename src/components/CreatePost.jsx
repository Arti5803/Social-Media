import{useContext,useRef} from "react"
import { PostList } from "../store/post-list-store";

const CreatePost=()=>{

  const{addPost}=useContext(PostList)

  const userIdElement=useRef();
  const postTitleElement =useRef();
  const postBodyElement =useRef();
  const reactionsElement =useRef();
  const tagsElement= useRef();

  const handleOnsubmit=(event)=>{
    event.preventDefault;

    const userId=userIdElement.current.value;
    const postTitle =postTitleElement.current.value;
    const postBody =postBodyElement.current.value
    const reactions =reactionsElement.current.value;
    const  tags =tagsElement.current.value.split(" ");

      addPost(userId,postTitle,postBody,reactions,tags)

      userIdElement.current.value = "" 
      postTitleElement.current.value=""
      postBodyElement.current.value=""
      reactionsElement.current.value=""

      tagsElement.current.value="";
    

  }




  

  return (
    <form className="create-post" onSubmit={handleOnsubmit}>
       <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your userId</label>
    <input type="text" 
    ref={userIdElement}
    className="form-control"
     id="userId"
     placeholder=" your userId" />
  </div>



  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" 
    ref={postTitleElement}
    className="form-control"
     id="title"
     placeholder="ow are you feelin today..." />
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" 
    ref={postBodyElement}
    rows="4"
    className="form-control"
     id="body" 
     placeholder="tell us sometin more about you"/> 
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number of Reactions</label>
    <input type="text" 
    ref={reactionsElement}
    className="form-control"
     id="reactions"
     placeholder="people reacted to tis post." />
  </div>

  <div className="mb-3">
    <label htmlFor="v" className="form-label">Enter your tags</label>
    <input type="text" 
    ref={tagsElement}
    className="form-control"
     id="tags"
     placeholder="Enter yor tags." />
  </div>



 
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )

}

export default CreatePost;