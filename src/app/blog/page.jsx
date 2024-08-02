import styles from "./blog.module.css";
import PostCard from "@/components/postCard/postCard";
const getData = async () => {
  let url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url, {next: {revalidate: 3600}});
  return await response.json();
};
const BlogPage = async () => {
  const postData = await getData();
  return (
    <div className={styles.container}>
      {postData.map((post) => {
        return <PostCard post={post} key={post.id} />;
      })}
    </div>
  );
};

export default BlogPage;
