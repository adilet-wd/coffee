import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Button} from 'react-bootstrap';

const Blogpage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState([]);

    const goBack = () => navigate(-1);

    // Получаем json с данными о постах
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])

    return (
        <div>
            <Container>
                
                {post && (
                    <>
                        <h1>{post.title}</h1>
                        <br></br>
                        <div>{post.body}</div>
                        <Button onClick={goBack}>Back</Button>
                    </>
                )}
            </Container>
        </div>
    );
}

export default Blogpage;
