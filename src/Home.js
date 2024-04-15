import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    const [name, setName] = useState('mario');
    const title = 'App Comp';
    const link = 'http://google.com';

    const handleDelete = (id) =>
    {
        console.log("Handle Delete id : " + id);
        //const newBlogs = blogs.filter(blog => blog.id !== id);
        //setBlogs(newBlogs);
    }

    //#region handleClicks

    const handleClick = () => {
        setName('luigi');
    }

    const handleClick2 = text => {
        setName('mario');
        console.log("Click " + text);
    }

    //#endregion

    //#region useEffect/Events

    useEffect(() => {
        //Triggered when render happen
        //console.log("Use Effect");
    });

    useEffect(() => {
        //console.log("Start");
    }, []);

    useEffect(() => {
        //console.log("Name Change " + name);
    }, [name]);

    //#endregion

    return ( 
        <div className="home">
            <h1>{title}</h1>
            <p>Random number : {Math.random() * 10}</p>
            <a href={link}>Google</a>
            <br></br>
            <br></br>
            <h2>Home Page</h2>
            <button onClick={handleClick}>click me</button>
            <button onClick={() => handleClick2('2')}>click me 2</button>
            <p>{name}</p>
            <br></br>
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />}
        </div>
        //<BlogList blogs={blogs.filter((blog) => blog.author === "mario")} title="Mario's Blogs" handleDelete={handleDelete}></BlogList>
    );
}
 
export default Home;