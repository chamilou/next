import SinglePost from "@/componenets/posts/singlePost"
import { getPost } from "@/lib/posts"
import Image from "next/image";
import classes from "@/app/page.module.css"

export default async function SinglePostView({ params }) {
    const onePost = getPost(params.id)

    onePost.instructions = onePost.instructions.replace(/\n/g, '<br/>');
    return (
        <main >

            <div className={classes.card}>
                <div>

                    <Image src={onePost.image} width={500} height={500} alt={onePost.slug}></Image>
                </div>
                <div>

                    <p className={classes.p_html}
                        dangerouslySetInnerHTML={{ __html: onePost.instructions, }}>
                    </p>
                    <p>
                        {onePost.creator_email}

                    </p>
                </div>


            </div>

        </main>
    )
}