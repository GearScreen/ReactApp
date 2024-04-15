import {Link} from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs, title, handleDelete}) => {
    //const blogs = props.blogs;
    //const title = props.title;

    //<button onClick={() => handleDelete(blog.id)}>delete blog</button>

    return (
        <div className="blog-list">
            <h2>{title} : {blogs.length} / 10</h2>
            {blogs.map((blog) => (
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