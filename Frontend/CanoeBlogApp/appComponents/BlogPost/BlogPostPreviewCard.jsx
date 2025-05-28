import styles from './BlogPostPreviewCard.module.css';
import { useEffect } from 'react';
import axios from 'axios';

export default function BlogPostPreviewCard({ imgUrl, author, title }) {


  return (
    <>
      <div className={styles.blogPostWrapper}>
        <div className={styles.blogPostCardContainer}>
          <div className={styles.blogImgAndAuthorWrapper}>
            <img
              className={styles.blogPostImage}
              src={imgUrl}
              alt='blog post image'
            />
            <div>
             <h3>{title}</h3>
            </div>
            <div className={styles.blogAuthorDateWrapper}>
              <p className={styles.blogAuthor}>{author}</p>
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

        <a className={styles.readFullBlogOutter} href=''>
          <div className={styles.readFullBlogContainer}>
            <svg
              className={styles.fullBlogIcon}
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
            >
              <path
                fill='#f0f0f0'
                d='M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm395.3 11.3l-112 112c-4.6 4.6-11.5 5.9-17.4 3.5s-9.9-8.3-9.9-14.8l0-64-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-64c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l112 112c6.2 6.2 6.2 16.4 0 22.6z'
              />
            </svg>
            <p>Open Blog</p>
          </div>
        </a>
      </div>
    </>
  );
}
