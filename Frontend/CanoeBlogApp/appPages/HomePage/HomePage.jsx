import styles from './HomePage.module.css';
import NavigationBar from '../../appComponents/NavigationBar/NavigationBar';
import SearchBar from '../../appComponents/SearchBar/SearchBar';
import OpeningMessage from '../../appComponents/OpeningMessage/OpeningMessage';
import BlogPost from '../../appComponents/BlogPost/BlogPost';

export default function HomePage() {
  return (
    <>
      <div className={styles.HomePageContainer}>
        {/* navbar */}
        <NavigationBar />

        {/* search bar */}
        <SearchBar />

        {/* blog home page message */}
        <OpeningMessage />

        <div className={styles.blogCardContainer}>
          {/* blog post preview */}
          <BlogPost />
          <BlogPost />
          <BlogPost />
        </div>
       
      </div>
    </>
  );
}
