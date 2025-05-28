import { Router } from "express";
import { query, validationResult, matchedData, checkSchema } from "express-validator";
import BlogPostSchema from "../ExpressValidations/BlogPostSchema.mjs";
import BlogPost from "../MongooseValidations/MongooseSchemas/BlogPostSchema.mjs";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";
import CreateBlog from "../MongooseValidations/MongooseSchemas/CreateBlogSchema.mjs";
import passport from "passport";
import multer from "multer";
import fs from "fs"

const uploadMiddleware = multer({dest : './Uploads'})

//Blog Router
const BlogRouter = Router();

// GET request to fetch blog data with user queries
BlogRouter.get("/", async (request, response) => {
    //test set user to session
    // console.log(request.session);
    
    const {query: {filter, value}} = request;
    if(!filter && !value){
       
        const allBlogs = await CreateBlog.find({})
        console.log(allBlogs);
        return response.json(allBlogs);
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
    
    return response.json(findBlog);
})

// POST request to add new blog post.
//This route should only be allowed for users ONLY. We can potentially guard this route by checking to see if the users session object contains the proper credentials. Check if the user is registered with the app, usernamen and password are correct and if so we can modify the session accordingly for access to create posts for the blog application.
// BlogRouter.post("/new_post",uploadMiddleware.single('file'), checkSchema(BlogPostSchema), async(request, response) => {

//     const errorResults = validationResult(request);
//     // checks if the validation results is not empty which means there are errors
//     if(!errorResults.isEmpty()){
//         return response.status(400).send({validationErrors : errorResults.array()});
//     }
    
//     console.log(request.session.passport);
//     if(!request.session.passport.user){
//         console.log(request.session)
//         return response.status(401).send({msg : "unauthorized user."});
//     }

//     const userID = request.session.passport.user._id
//     // if all fields pass validation, send the confirmed body.
//     const confrimedData = matchedData(request)
//     // console.log(confrimedData);
 
//     const newBlog = await BlogPost.create({...confrimedData, author : userID});
//     console.log(newBlog);

//     const foundUser = await User.findById(newBlog.author); //find the user. 
//     await foundUser.blogs.push(newBlog._id);
//     const savedData = await foundUser.save();
//     const populatedData = await User.findById(newBlog.author).populate("blogs");
//     console.log('Updated User: ', populatedData );
   
//     return response.json(request.file)
// })

BlogRouter.post('/create', uploadMiddleware.single('file'), async (request, response)=>{
    const { title, summary, content } = request.body
    const { originalname, path } = request.file;
    console.log(request.file);
    //getting the original name for the img file, getting the ext from the original name to append it to the file that is saved into the uploads folder. The new path is the name of the image with the img extension on the end of it. 
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path+"."+ext;

    //we rename the original path to the new path that has the extension.
    fs.renameSync(path, newPath);
    
    //creating a new blog post document to add to the database (mongoDB)
    const createBlog = await CreateBlog.create({
        title,
        summary,
        content,
        image : newPath
    });

    //we confirm that a blog post is created.
    return response.status(201).json(createBlog);
})
export default BlogRouter;

// Find the user data, 
//Get the ID of the newly created blog.
//Update the array for the user data with the new Blog _id
//save userdate.
//Populate new user data with the blog _ids.

//when we delete a post we have to make sure that the ref objectID is deleted in the users blogs array as well.