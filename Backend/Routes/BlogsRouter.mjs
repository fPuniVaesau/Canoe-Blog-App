import { response, Router } from "express";

const demoBlogData = [
    {
        id: 1,
        title: "The life of Filo", 
        content: "This is the content of the first blog post."
    },
    {
        id: 2,
        title: "Learning javascript",
        content: "This is the content of the second blog post."
    },
    {
        id: 3,
        title: "Fullstack Development: Connecting the frontend to the backend.",
        content: "This is the content of the third blog post."
    }
]


const BlogRouter = Router();

BlogRouter.get("/", (request, response) => {
    const {query: {filter, value}} = request;
    if(!filter && !value){
        return response.status(400).send({ msg: "we hit a snag!", error : "invalid queries" });
    }
    if(filter && value){
        // filtering through the data using the querie parameters
        const filteredData = demoBlogData.filter(blog => blog[filter].includes(value));
        response.status(200).send(filteredData);
    }
    return response.send(demoBlogData);
})

// this route fetches blogs by thier ids.

BlogRouter.get("/:id", (request, response) => {
    const {params:{id}} = request
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

// this route searchs and fetches blogs by the search query.


export default BlogRouter;

