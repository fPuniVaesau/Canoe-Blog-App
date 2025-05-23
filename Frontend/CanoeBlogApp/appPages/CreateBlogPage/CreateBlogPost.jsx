import styles from './CreateBlogPost.module.css';
import { useState } from 'react';
import axios from 'axios';
import Tiptap from '../../appComponents/RichTextEditor/TipTap';

export default function CreateBlogPost() {
 
  // setting the state for the the post fields.
  const [blogAuthor, setBlogAuthor] = useState('')
  const [blogTitle, setBlogTitle] = useState('')
  const [blogContent, setBlogContent] =useState('');

  // creating a new object to send as a post request to the backend server.
  const newBlogData = {
    blogAuthor,
    blogTitle,
    blogContent
  };

  //on submit we send as post request to the backend with the data we have provided for the blog post.
  const handleSubmit = (e) => {
    e.preventDefault();
    // making a HTTP request to the backend of the application.
    axios
      .post('http://127.0.0.1:8000/api/blogs/new_post', newBlogData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      
      setBlogData(newBlogData);
  };

  //returning what will be rendered for our blog post page of our application.
  return (
    <div className={styles.mainContainer}>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit} action='submit'>
        {/* author wrapper */}
        <div className={styles.titleWrapper}>
          <label htmlFor=''>author</label>
          <input
            className={styles.inputStyling}
            onChange={(e) => {
              setBlogAuthor(e.target.value);
            }}
            name='author'
            value={blogAuthor}
            type='text'
          />
        </div>

        {/* content wrapper */}
        <div className={styles.BlogContentContainer}>
          <div className={styles.titleWrapper}>
            <label htmlFor=''>title</label>
            <input
              className={styles.inputStyling}
              onChange={(e) => {
                setBlogTitle(e.target.value);
              }}
              name='title'
              value={blogTitle}
              type='text'
            />
          </div>

          <div className={styles.textAreaWrapper}>
            <label htmlFor=''>content</label>
            {/* using a rich text editor */}
            <Tiptap onContentChange={setBlogContent} />
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
      {/* <div>
        <p>{newBlogData.blogAuthor}</p>
        <p>{newBlogData.blogTitle}</p>
        <p>{newBlogData.blogContent}</p>
      </div> */}

    </div>
  );
}
