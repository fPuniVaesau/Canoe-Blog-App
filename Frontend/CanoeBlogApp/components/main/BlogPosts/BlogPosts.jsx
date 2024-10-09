import style from './BlogPosts.module.css';

export default function BlogPosts() {
  return (
    <div className={style.blogPostContainer}>
      <div className={style.postImageContainer}>
        <img
          src='https://images.unsplash.com/photo-1727972937004-daaf17edbcb2?q=80&w=3732&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          alt='blog banner image'
        />
      </div>

      <div className={style.titleDiscriptionContainer}>
        <h2 className={style.blogTitle}>Demo blog title.</h2>
        <div className={style.authorTimeStampContainer}>
          <a>Filo Vaesau</a>
          <time datetime="">2025-04-11 12:00am</time>
        </div>
        <p className={style.blogSummary}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates
          qui molestias sapiente ducimus placeat magni eaque cupiditate dicta
          inventore omnis odio laboriosam aliquid, velit distinctio nulla et
          culpa illo quis ipsam. Atque, dolorum?
        </p>
      </div>
    </div>
  );
}
