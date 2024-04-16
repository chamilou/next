import { getPosts } from "@/lib/posts";
import SinglePost from "./singlePost";
import classes from "@/componenets/posts/postGrid.module.css"

export default  function PostsGrid({posts}){

  // {console.log("those are ", posts)}
  
    return(
      <div >
        <ul className={classes.postGrid}>
          {posts.map((post) => (
            <li className={classes.postList} key={post.id}>
              <SinglePost {...post}/>
            </li>
          ))}
        </ul>
          </div>
      );
}