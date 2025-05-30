import styles from './HomePage.module.css';
import NavigationBar from '../../appComponents/NavigationBar/NavigationBar';
import SearchBar from '../../appComponents/SearchBar/SearchBar';
import OpeningMessage from '../../appComponents/OpeningMessage/OpeningMessage';
import BlogPostPreviewCard from '../../appComponents/BlogPost/BlogPostPreviewCard';
import axios from 'axios';
import { useState, useEffect } from 'react';


export default function HomePage() {

  const baseUrl = "http://127.0.0.1:8000/api/"
  const homeEndpoint = "home";
  const blogsEndpoint = "blogs"
  const [blogs, setBlogs] = useState([])


  useEffect(() => {
    const fetchAndSetCookie = async () => {
      try {
        await axios.get(`${baseUrl}${homeEndpoint}`); // Important for sending/receiving cookies
      } catch (error) {
        console.error('Failed to set cookie:', error);
      }
    };
    fetchAndSetCookie();

    const fetchFeaturedBlogs = async () => {
      try{
        const response = await axios.get(`${baseUrl}${blogsEndpoint}`);
        const blogData = await response.data;
        setBlogs(blogData);
        setFeaturedBlog(blogData[0]);
      }
      catch(error){
        console.log(error);
      }
    }
    fetchFeaturedBlogs();
  }, []);



  return (
    <>
      <div className={styles.HomePageContainer}>

        {/* blog home page message */}
        <OpeningMessage />
        <div>
          <h3>featured blog</h3>
        </div>
        <div className={styles.blogCardContainer}>
          {/* blog post preview */}
          <div>
              {
              blogs.length > 0 && blogs.map(post => (
              <BlogPostPreviewCard {...post}/>
              ))
              }
          </div>
        </div>
      </div>
    </>
  );
}
