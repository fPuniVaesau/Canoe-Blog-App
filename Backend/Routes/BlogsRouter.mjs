import { Router } from "express";
import { query, validationResult, matchedData, checkSchema } from "express-validator";
import BlogPostSchema from "../ExpressValidations/BlogPostSchema.mjs";
// import BlogPost from "../MongooseValidations/MongooseSchemas/BlogPostSchema.mjs";
import User from "../MongooseValidations/MongooseSchemas/UserSchema.mjs";
import CreateBlog from "../MongooseValidations/MongooseSchemas/CreateBlogSchema.mjs";
import passport from "passport";
import multer from "multer";
import fs from "fs"

const uploadMiddleware = multer({dest : 'Uploads'})

//Blog Router
const BlogRouter = Router();

// GET request to fetch blog data with user queries
BlogRouter.get("/", async (request, response) => {
    //test set user to session
    // console.log(request.session);
    
    const {query: {filter, value}} = request;
    if(!filter && !value){
       
        const allBlogs = await CreateBlog.find({}).sort({createdAt: -1}).limit(10);
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

BlogRouter.get("/featured", async (request, response) => {
    const allBlogs = await CreateBlog.find({}).sort({createdAt: -1}).limit(10);
    console.log(allBlogs[0]);
    return response.json(allBlogs[0]);
});

// GET request used to fetch Blogs by ID.
BlogRouter.get("/:id", async (request, response) => {
    const { params:{id} } = request
    const findBlog = await CreateBlog.findById(id);

    if(!findBlog){
        return response.status(404).send("Blog Cannot be found");
    }

    return response.json(findBlog);
})



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