
import PostsGrid from "@/componenets/posts/postsGrid";
import { getPosts } from "@/lib/posts";


import Link from "next/link";

export default  async function BlogPosts(){
    const posts = await getPosts()
    // const posts =[
    //     {id:1, title:"Mr",slug:"kjhkjhkhkjh"},
    //     {id:2, title:"Mr",slug:"it is slug2"},
    //     {id:3, title:"M.",slug:"it is slug3"},
    //     {id:4, title:"Mme",slug:"it is slug4"},
    //     {id:5, title:"Ms",slug:"it is slug5"},
    // ]
    return(

        <main>
        <PostsGrid  posts={posts}></PostsGrid>
        </main>
    )
}