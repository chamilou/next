import fs from "node:fs"
import sql from "better-sqlite3"
import slugify from "slugify";
import xss from "xss";

const db=sql("posts.db")

//get all posts
export async function getPosts(){
    await new Promise((resolve)=> setTimeout(resolve,2000))
    return db.prepare('Select * from posts').all();


}
export function getPost(id){
    // await new Promise((resolve)=> setTimeout(resolve,200))
    return db.prepare('Select * from posts where id =?').get(id);


}
export async function savePost(post){
  post.slug = slugify(post.title, {lower:true})
  post.instructions=xss(post.instructions);
  const extention= post.image.name.split('.').pop()

  const fileName= `${post.slug}.${extention}`
  const stream= fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage= await post.image.arrayBuffer()
  stream.write(Buffer.from(bufferedImage), (error)=>{
if (error){
    throw new Error("Saving failed")
}
  })
post.image=`/images/${fileName}`
db.prepare(`
INSERT INTO posts(title,slug,image, summary, instructions,creator, creator_email)

VALUES (
    @title,
    @slug,
    @image,
    @summary,
    @instructions,
    @creator,
    @creator_email
 )

`).run(post);

}

export function getFilteredPosts(){
    return db.prepare().get()
}