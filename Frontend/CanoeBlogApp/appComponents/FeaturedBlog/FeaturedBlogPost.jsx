import { format } from "date-fns"
import { Link } from "react-router";

export default function FeaturedBlogPost({_id, title, summary, image, createdAt}){
  return (
    <>
      <h1>{title}</h1>
      <div>
        <img src={`http://localhost:8000/${image}`} alt='' />
      </div>
      <div>
        <p>Filo Vaesau</p>
        {/* <p>{format(new Date(createdAt), "MMM do, yyyy h:mm aa")}</p> */}
      </div>
      <p>{summary}</p>

      <div>
        <Link to={`/blogs/${_id}`}>
          <button type='button'>Go to Blog Post</button>
        </Link>
      </div>
    </>
  );
}
