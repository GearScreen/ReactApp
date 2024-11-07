import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/ReactApp"><h1>Test Lab</h1></Link>
            <div className="links">
                <Link to="/ReactApp">Home</Link>
                <Link to="/create" style={{color: "white", backgroundColor: "#f1356d", borderRadius: '8px'}}>New blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;