import axios from "axios";

const getPost = id =>
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

const getUsers = id =>
    axios.get(`https://jsonplaceholder.typicode.com/users`);

export {getPost, getUsers};