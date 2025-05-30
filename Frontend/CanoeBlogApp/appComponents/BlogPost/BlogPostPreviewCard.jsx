import styles from './BlogPostPreviewCard.module.css';
import { useEffect } from 'react';
import { compareAsc, format, formatISO9075 } from "date-fns";
import axios from 'axios';
import {Link} from "react-router-dom"

export default function BlogPostPreviewCard({_id, title, summary, image, createdAt }) {


  return (
    <>
      <div className={styles.blogPostWrapper}>
        <div className={styles.blogPostCardContainer}>
          <div className={styles.blogImgAndAuthorWrapper}>
            <Link to={`/blogs/${_id}`}>
              <img
                className={styles.blogPostImage}
                src={'http://localhost:8000/' + image}
                alt='blog post image'
              />
            </Link>
            <Link to={`/blogs/${_id}`}>
              <h3>{title}</h3>
            </Link>
            <div className={styles.blogAuthorDateWrapper}>
              <p className={styles.blogAuthor}>filo.vaesau</p>
              <div className={styles.dateAndTimeWrapper}>
                <p>{format(new Date(createdAt), "MMM do, yyyy h:mm aa")}</p>
              </div>
            </div>
          </div>
          {/* blog post discription section */}
          <div className={styles.blogPostDiscriptionWrapper}>
            <p>{summary}</p>
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
