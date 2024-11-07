import {useState} from "react";
import {useHistory} from "react-router-dom";
import useFetch from "./useFetch";
import GetBlogs from "./GetBlogs";

const Create = () => {
    const {data, isPending: isPendingBlogs, error} = useFetch('https://gearscreen.github.io/JSON/db.json');
    var blogs;

    function checkFlag() {
        if(isPendingBlogs === true) {
           window.setTimeout(isPendingBlogs === false, 100);
        } else {        
          //console.log("Pending done : " + isPendingBlogs);
          const {blogs: b} = GetBlogs(data);
          blogs = b;
        }
    }
    checkFlag();

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author}

        if (blogs.length >= 10)
        {
            return;
        }     

        setIsPending(true);

        fetch('https://gearscreen.github.io/JSON/db.json', {
            method: 'POST',
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(blog),
        }).then(() => {
            setIsPending(false);
            console.log('New Blog Added');
            history.push('/'); //Home
        }).catch(err => {
            setIsPending(false);
            console.log(err);
        });
    };

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            {isPendingBlogs && <div>Loading...</div>}
            {!isPendingBlogs && <div>{blogs.length}/10 blogs</div>}
            {!isPendingBlogs && blogs.length >= 10 && <div style={{fontSize: "15px"}}>Maximum 10 blogs, delete one before adding another</div>}
            {!isPendingBlogs && blogs.length < 10 &&
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>               
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>}
            {error && <div>{error}</div>}
        </div>
    );
}
 
export default Create;