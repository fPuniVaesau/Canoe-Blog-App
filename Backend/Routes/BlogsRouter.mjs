import { Router } from "express";
import { query, validationResult, matchedData, checkSchema } from "express-validator";
import BlogPostSchema from "../ExpressValidations/BlogPostSchema.mjs";
import BlogPost from "../MongooseValidations/MongooseSchemas/BlogPostSchema.mjs";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";
import passport from "passport";

//Blog Router
const BlogRouter = Router();

// GET request to fetch blog data with user queries
BlogRouter.get("/", async (request, response) => {
    //test set user to session
    // console.log(request.session);
    
    const {query: {filter, value}} = request;
    if(!filter && !value){
       
        const allBlogs = await BlogPost.find({})
        console.log(allBlogs);
        return response.send(allBlogs);
    }
    //working on filtering logic for searches
    // if(filter && value){
    //     // filtering through the data using the querie parameters
    //     const foundUser = await User.find({username : value});
    //     const {_id} = foundUser;
    //     const foundBlogs = await BlogPost.find({author : _id});
    //     // console.log(`filter: ${filter}, value: ${value}`);
    //     console.log(foundUser);
    //     console.log (foundBlogs);
    //     // const filteredData = demoBlogData.filter(blog => blog[filter].includes(value));
    //     response.status(200).send(foundBlogs);
    // }
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
BlogRouter.post("/new_post", checkSchema(BlogPostSchema), async(request, response) => {
    const errorResults = validationResult(request);
    // checks if the validation results is not empty which means there are errors
    if(!errorResults.isEmpty()){
        return response.status(400).send({validationErrors : errorResults.array()});
    }
    
    console.log(request.session.passport);
    if(!request.session.passport.user){
        console.log(request.session)
        return response.status(401).send({msg : "unauthorized user."});
    }

    const userID = request.session.passport.user._id
    // if all fields pass validation, send the confirmed body.
    const confrimedData = matchedData(request)
    // console.log(confrimedData);
 
    const newBlog = await BlogPost.create({...confrimedData, author : userID});
    console.log(newBlog);

    const foundUser = await User.findById(newBlog.author); //find the user. 
    await foundUser.blogs.push(newBlog._id);
    const savedData = await foundUser.save();
    const populatedData = await User.findById(newBlog.author).populate("blogs");
    console.log('Updated User: ', populatedData );
   
    return response.status(200).send({newBlog});
})

//Devlopement route to llok up all blogs from a specific user
BlogRouter.get("/dev/myBlogs", async(request, response)=>{
    const userID = request.session.passport.user._id;
    const myBlogData = await User.findById(userID)
    console.log(myBlogData)
    console.log(myBlogData.blogs);

    return response.status(201).send({msg: "ok"});
})

export default BlogRouter;

// Find the user data, 
//Get the ID of the newly created blog.
//Update the array for the user data with the new Blog _id
//save userdate.
//Populate new user data with the blog _ids.

//when we delete a post we have to make sure that the ref objectID is deleted in the users blogs array as well.