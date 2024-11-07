import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Not Found</h2>
            <p>That page cannot be found</p>
            <Link to='/ReactApp'>Got back to home page</Link>
        </div>
    );
}
 
export default NotFound;