import styles from './CreateBlogPost.module.css';
import { useState } from 'react';
import axios from 'axios';
import Tiptap from '../../appComponents/RichTextEditor/TipTap';

export default function CreateBlogPost() {
 
  // setting the state for the the post fields.
  const [blogSummary, setBlogSummary] = useState('')
  const [blogTitle, setBlogTitle] = useState('')
  const [blogContent, setBlogContent] =useState('');
  const [files, setFiles] = useState("");

  // creating a new object to send as a post request to the backend server.
  // const newBlogData = {
  //   blogAuthor,
  //   blogTitle,
  //   blogContent
  // };

  //on submit we send as post request to the backend with the data we have provided for the blog post.
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // making a HTTP request to the backend of the application.
  //   axios
  //   .post('http://127.0.0.1:8000/api/blogs/new_post', newBlogData)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
      
  //     setBlogData(newBlogData);
  // };



  const handleSubmit = async (e) => {

    const data = new FormData();
    data.set('title', blogTitle);
    data.set('summary', blogSummary);
    data.set('content', blogContent);
    data.set('file', files[0]);
    console.log(data)
    e.preventDefault()

    const blogPostData = await axios.post(
      "http://127.0.0.1:8000/api/blogs/new_post",
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  }

  //returning what will be rendered for our blog post page of our application.
  return (
    <div className={styles.mainContainer}>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit} action='submit'>
        {/* author wrapper */}
        <div className={styles.titleWrapper}>
          <input
            placeholder='Title'
            className={styles.inputStyling}
            onChange={(e) => {
              setBlogTitle(e.target.value);
            }}
            name='title'
            value={blogTitle}
            type='text'
          />
        </div>

        {/* content wrapper */}
        <div className={styles.BlogContentContainer}>
          <div className={styles.titleWrapper}>
            <input
              placeholder='Summary'
              className={styles.inputStyling}
              onChange={(e) => {
                setBlogSummary(e.target.value);
              }}
              name='summary'
              value={blogSummary}
              type='text'
            />
          </div>

          <div className={styles.titleWrapper}>
            <input className={styles.inputStyling}
              type="file"
              name='file'
              onChange={(e)=>{setFiles(e.target.files)}}
             />
          </div>

          <div className={styles.textAreaWrapper}>
  
            {/* using a rich text editor */}
            <Tiptap name="content" value={blogContent} onContentChange={setBlogContent} />
          </div>
        </div>
        {/* button wrapper */}
        <div className={styles.buttonWrapper}>
          <button
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            post
          </button>
        </div>
      </form>
      
      {/* testing to see if the objects and the state has been updated with the correct information. */}
      <div>
       {console.log()}
      </div>

    </div>
  );
}
