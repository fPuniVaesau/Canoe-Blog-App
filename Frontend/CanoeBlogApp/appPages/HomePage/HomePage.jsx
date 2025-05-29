import styles from './HomePage.module.css';
import NavigationBar from '../../appComponents/NavigationBar/NavigationBar';
import SearchBar from '../../appComponents/SearchBar/SearchBar';
import OpeningMessage from '../../appComponents/OpeningMessage/OpeningMessage';
import BlogPostPreviewCard from '../../appComponents/BlogPost/BlogPostPreviewCard';
import axios from 'axios';
import { useEffect } from 'react';


export default function HomePage() {

  const baseUrl = "http://127.0.0.1:8000/api/home";

  useEffect(() => {
    const fetchAndSetCookie = async () => {
      try {
        await axios.get(baseUrl); // Important for sending/receiving cookies
      } catch (error) {
        console.error('Failed to set cookie:', error);
      }
    };
    fetchAndSetCookie();
  }, []);



  return (
    <>
      <div className={styles.HomePageContainer}>
        {/* navbar */}
        {/* <NavigationBar /> */}

        {/* search bar */}
        {/* <SearchBar /> */}

        {/* blog home page message */}
        <OpeningMessage />

        <div className={styles.blogCardContainer}>
          {/* blog post preview */}
          <h2>Featured Blog</h2>
        </div>
       
      </div>
    </>
  );
}
