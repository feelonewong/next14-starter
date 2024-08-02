import styles from "./postUser.module.css";

const getUserData = async (userId) => {
  let url = `https://jsonplaceholder.typicode.com/users/${userId}`;
  const response = await fetch(url, { next: { revalidate: 3600 } });
  return await response.json();
};
const PostUser = async ({ userId }) => {
  let user = await getUserData(userId);
  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.name}</span>
    </div>
  );
};

export default PostUser;
