let dbUrl = 'https://jsonplaceholder.typicode.com';

let getPosts = () => fetch(`${dbUrl}/posts`).then(res => res.json());

export { getPosts };
