import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Получаем базу данных и метод для работы с ними, ref - путь к данным, onValue - получение данных
import { ref, onValue, getDatabase, child, get } from 'firebase/database';
import { database } from '../..';

const Blog = () => {
    // Список постов и изменение списка
    const [posts, setPosts] = useState([]);
    // Получение списка с сервера

    // Получаем json с данными о постах
    useEffect(() => {
        try {
            let databaseConnection = ref(database, '/Posts/');
            get(databaseConnection).then(
                (data) => {
                    const dataFromDataBase = data.val();
                    setPosts(dataFromDataBase);
                }
            );
        } catch (err) {
            alert("Ошибка подключения к серверу");
            window.location.reload();
        }
    })

    return (
        <div>
            <Container>
                <h1>Blog</h1>
                {
                    posts.map(post => (
                        <Link key={post.id} to={`/blog/${post.id}`}>
                            <li>{post.title}</li>
                        </Link>
                    ))
                }
            </Container>
        </div>
    );
}

export default Blog;
