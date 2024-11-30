import styles from './HomePage.module.css';
import NavigationBar from '../../appComponents/NavigationBar/NavigationBar';
import SearchBar from '../../appComponents/SearchBar/SearchBar';


export default function HomePage() {
  return (
    <>
      {/* navbar */}
      <NavigationBar />

      {/* search bar */}
      <SearchBar />

      {/* blog home page message */}
      <div className={styles.openingMessageWrapper}>
        <div className={styles.welcomeQuoteWrapper}>
          <h2>Take courage, lose site of the shores & discover new sea's.</h2>
          <p>what is your journey?</p>
        </div>
      </div>

      {/* blog post preview */}
      <div className={styles.blogPostWrapper}>
        <div className={styles.blogPostCardContainer}>
          <div className={styles.blogImgAndAuthorWrapper}>
            <img

              src='https://images.unsplash.com/photo-1701979397766-bbd6fdd29743?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8RS0tX3BuSWlyRzR8fGVufDB8fHx8fA%3D%3D'
              alt='blog post image'
            />
            <div className={styles.blogAuthorDateWrapper}>
              <p className={styles.blogAuthor}>filo vaesau</p>
              <div className={styles.dateAndTimeWrapper}>
                <p>12/1/2024</p>
                <p>12:00am</p>
              </div>
            </div>
          </div>
          {/* blog post discription section */}
          <div className={styles.blogPostDiscriptionWrapper}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
              error velit iure temporibus nemo nobis ipsa rerum eligendi nostrum
              quis consectetur fugiat repellendus explicabo soluta est. Sint
              totam aspernatur dolor? Ut voluptas veniam cupiditate illum, nam
              eum reprehenderit impedit repellendus eius placeat assumenda nemo
              pariatur cum alias laudantium atque, quas temporibus incidunt.
              Laudantium odit, nihil, eligendi necessitatibus doloremque
              provident cupiditate inventore nisi enim sed obcaecati harum
              explicabo dolor possimus consequuntur.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
