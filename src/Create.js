import { useState } from "react";
import {useHistory} from 'react-router-dom';

const Create =()=>{
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const history = useHistory();

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        const blog = {title, body, author};

        fetch('http://localhost:8000/blogs',{
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog)
        }).then(()=> {alert("New blog added.")
    history.push('/')});
    }

    return <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
        required=""
        type="text" 
        value={title}
        onChange={(event)=> setTitle(event.target.value)}
        />
        <label>Blog body:</label>
        <textarea 
        required
        value={body}
        onChange={(event)=>setBody(event.target.value)}
        />
        <label>Blog author:</label>
        <select
        value={author}
        onChange={(event)=>setAuthor(event.target.value)}>
            <option value="mario">mario</option>
            <option value="luigi">luigi</option>
        </select>
        <button>Add Blog</button>
        </form>
    </div>;
}

export default Create;