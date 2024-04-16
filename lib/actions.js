"use server"

import { redirect } from "next/navigation"
import { savePost } from "./posts"

export async function getData(formData){

    const post ={
        title:formData.get("title"),
        summary:formData.get("summary"),
        image:formData.get("image"),
        instructions:formData.get("instructions"),
        creator:formData.get("creator"),
        creator_email:formData.get("email"),

    }
    // console.log(post)
    await savePost(post)
    redirect("/blog")

}