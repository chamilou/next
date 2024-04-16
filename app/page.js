
import PostsGrid from "@/componenets/posts/postsGrid";
import styles from "./page.module.css";
import { getPosts } from "@/lib/posts";

export default  async function Home() {
  const listOfPosts= await getPosts()
  return (
   
    <main>
      <div className={styles.content}>
        <div>This is some div!</div>

<PostsGrid posts={listOfPosts}></PostsGrid>
      </div>
    </main>
  );
}
