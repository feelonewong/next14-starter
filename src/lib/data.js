const users = [
    { id: 1,name: 'Tom'},
    { id: 2,name: 'Jane'},
    { id: 3,name: 'Jack'},
    { id: 4,name: 'Wallen'},
]
const posts = [
    { id: 1, title: 'Post One', body: 'This is post one', userId: 1 },
    { id: 2, title: 'Post Two', body: 'This is post two', userId: 2 },
    { id: 3, title: 'Post Three', body: 'This is post three', userId: 3 },
    { id: 4, title: 'Post Four', body: 'This is post four', userId: 4 },
]


export const getPosts = async () => {
    return posts;
}

export const getPost = async (id) => {
    return posts.find(post => post.id === parseInt(id));
}


export const getUser = async (id) => {
    return users.find((user)=> user.id === id)
}