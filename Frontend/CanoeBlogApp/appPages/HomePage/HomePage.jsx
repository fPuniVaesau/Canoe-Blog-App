import styles from './HomePage.module.css';
import NavigationBar from '../../appComponents/NavigationBar/NavigationBar';
export default function HomePage() {
  return (
    <>
      {/* navbar */}
      <NavigationBar />

      {/* search bar */}
      <div className={styles.searchBarWrapper}>
        <input
          type='search'
          placeholder='Search'
          className={styles.searchBar}
        />

        <button className={styles.searchBtn}>
          <svg
            className={styles.iconSearch}
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z' />
          </svg>
        </button>
      </div>

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
