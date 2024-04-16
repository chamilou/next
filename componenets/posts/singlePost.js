import Image from "next/image"
import Link from "next/link"

export default function SinglePost({id,title,slug,image,summary}){

    return(
        <>
        <div>
       
            <Link href={`/blog/${id}`}> 
            
            <figure>

                <Image src={image}width={200}height={200} alt={slug}></Image>
                <figcaption>{title}</figcaption>
            </figure>
            </Link>
           
        </div>
        </>
    )
}