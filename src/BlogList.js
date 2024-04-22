import {Link} from "react-router-dom/cjs/react-router-dom.min";
import GetBlogs from "./GetBlogs";

const BlogList = ({blogs, title, handleDelete}) => {
    //const blogs = props.blogs;
    //const title = props.title;

    //<button onClick={() => handleDelete(blog.id)}>delete blog</button>
    const {blogs: b} = GetBlogs(blogs);

    return (
        <div className="blog-list">
            <h2>{title} : {b.length} / 10</h2>
            {b.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={'/blogs/' + blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </Link>                  
                </div>
            ))}
        </div>
    );
}

export default BlogList;