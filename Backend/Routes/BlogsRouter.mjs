import { response, Router } from "express";
import { query, validationResult, matchedData, checkSchema } from "express-validator";
import BlogPostSchema from "../ExpressValidations/BlogPostSchema.mjs";

// Demo API Blog Data
const demoBlogData = [
    {
        id: 1,
        title: "The life of Filo", 
        content: "This is the content of the first blog post.",
        author: "Filo Vaesau"
    },
    {
        id: 2,
        title: "Learning javascript",
        content: "This is the content of the second blog post.",
        author: "Filo Vaesau"
    },
    {
        id: 3,
        title: "Fullstack Development: Connecting the frontend to the backend.",
        content: "This is the content of the third blog post.",
        author: "Filo Vaesau"
    },
    {
        id: 4,
        title: "Understanding Game Development",
        content: "This is demo game content for jeerics article.",
        author: "Jeric"
    },
    {
        id: 5, 
        title: "The world of Cyber Security.",
        content: "This is demo content for johns article.",
        author: "John"
    }
]


const BlogRouter = Router();
// GET request to fetch blog data with user queries
BlogRouter.get("/", (request, response) => {
    //test set user to session
    // request.session.user = demoBlogData[1].author;
    
    const {query: {filter, value}} = request;
    if(!filter && !value){
        return response.send(demoBlogData);
    }
    if(filter && value){
        // filtering through the data using the querie parameters
        const filteredData = demoBlogData.filter(blog => blog[filter].includes(value));
        response.status(200).send(filteredData);
    }
})

// GET request used to fetch Blogs by ID.
BlogRouter.get("/:id", (request, response) => {
    const { params:{id} } = request
    const parsedID = parseInt(id);

    if(isNaN(id)){
        return response.status(400).send({msg: "we hit a snag!"});
    }
    // we are searching the demo blog array and filtering through using the provided parameters.
    const findBlog = demoBlogData.find(blog => blog.id === parsedID);
    if(!findBlog){
        return response.status(401).send({msg: "we hit a snag!", error: "blog id can not be found."});
    }
    
    return response.send(findBlog);
})

// POST request to add new blog post.
//This route should only be allowed for users ONLY. We can potentially guard this route by checking to see if the users session object contains the proper credentials. Check if the user is registered with the app, usernamen and password are correct and if so we can modify the session accordingly for access to create posts for the blog application.
BlogRouter.post("/new_post", checkSchema(BlogPostSchema), (request, response) => {
    const errorResults = validationResult(request);
    const {verified} = request.session;
    //check for the user in the database; Only users can post, so if there is no user in the database that matches the search query then we do not modify the session obj with user credentials and deny access to post.
    if(!verified){
        return response.status(401).send({message: "Only users are allowed to post new blogs."})
    }

    // checks if the validation results is not empty which means there are errors
    if(!errorResults.isEmpty()){
        return response.status(400).send({validationErrors : errorResults.array()});
    }

    // if all fields pass validation, send the confirmed body.
    const confrimedData = matchedData(request)
    console.log(confrimedData);
    return response.send({msg: "testing the post request.",
        BlogData : confrimedData
    })
})


export default BlogRouter;