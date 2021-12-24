import { Link } from "react-router-dom"

const NotFound = () => {
    return (<div className="notFound">
        <h2>Sorry</h2>
        <p>Page you have been looking for isn't available.</p>
        <Link to='/'>Back to home page...</Link>
    </div>)
}

export default NotFound;