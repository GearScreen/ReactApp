const GetBlogs = (data) => {
    var blogs = data;
    
    if (data.constructor.name !== "Array")
    {
        blogs = data.blogs;
    }

    return {blogs};
}
 
export default GetBlogs;