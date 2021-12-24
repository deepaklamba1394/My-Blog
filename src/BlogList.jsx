import { Link } from "react-router-dom";

const BlogList = (props) =>
{
    const blogs = props.blogs;
    return ( <div className="BlogList">
        {blogs.map((blog)=> (
            <div className="blog_preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <p>{blog.body}</p></Link>
            </div>
        ))}
    </div> )
}

export default BlogList;