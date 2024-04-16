"use client"

import {useFormStatus} from "react-dom"
export default function FormSubmissionBut(){
const {pending} = useFormStatus() 
    return <button disabled ={pending}>
    {pending ? "Submiting Post....":"Upload Post"}
    </button>
}
