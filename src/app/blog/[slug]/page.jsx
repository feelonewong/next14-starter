import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
const getData = async (slug) => {
  let url = `https://jsonplaceholder.typicode.com/posts/${slug}`;
  const response = await fetch(url, { next: { revalidate: 3600 } });
  return await response.json();
};
const SinglePostPage = async ({ params }) => {
  const { slug } = params;

  const post = await getData(slug);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/27398983/pexels-photo-27398983.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/27398983/pexels-photo-27398983.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt=""
            width={50}
            height={50}
            className={styles.avatar}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId}></PostUser>
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc urna
          quam, aliquet vel ultrices eget, commodo non lacus. Donec in est sit
          amet nulla placerat efficitur. Nulla facilisi. Sed ut dolor auctor,
          bibendum
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
