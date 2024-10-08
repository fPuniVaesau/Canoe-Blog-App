import style from './BlogPosts.module.css';

export default function BlogPosts() {
  return (
    <div className={style.blogPostContainer}>
      <img
        src='https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHx0ZWNofGVufDB8fDB8fHww'
        alt='blog banner image'
      />
      <h2>demo blog title</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates qui
        molestias sapiente ducimus placeat magni eaque cupiditate dicta
        inventore omnis odio laboriosam aliquid, velit distinctio nulla et culpa
        illo quis ipsam. Atque, dolorum?
      </p>
    </div>
  );
}
