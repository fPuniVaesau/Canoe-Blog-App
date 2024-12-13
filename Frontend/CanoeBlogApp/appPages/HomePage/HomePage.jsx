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
          <BlogPost 
          author={"Filo Vaesau"}
          imgUrl={'https://images.unsplash.com/photo-1701979397766-bbd6fdd29743?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RS0tX3BuSWlyRzR8fGVufDB8fHx8fA%3D%3D'}/>

          <BlogPost 
          author={"Morgan Vaesau"}
          imgUrl={"https://images.unsplash.com/photo-1729343882094-b34a2d5bea1d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fEUtLV9wbklpckc0fHxlbnwwfHx8fHw%3D"} />

          <BlogPost 
          author={"John Doe"}
          imgUrl={"https://images.unsplash.com/photo-1731435265797-136ba0b95cda?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDgwfEUtLV9wbklpckc0fHxlbnwwfHx8fHw%3D"} />

          <BlogPost 
          author={"Jane Doe"}
          imgUrl={"https://images.unsplash.com/photo-1726409178415-2258ec49a81b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE5MHxFLS1fcG5JaXJHNHx8ZW58MHx8fHx8"} />
        </div>
       
      </div>
    </>
  );
}
