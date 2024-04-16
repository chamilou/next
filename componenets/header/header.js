import Image from "next/image";
import styles from "@/componenets/header/header.module.css"

export default function Header(){
    return(
        <div className={styles.header}>
        <div><Image src={""}alt="Unknown" width={50}height={60}></Image></div>
        <div> MyBlogs</div>
        </div>
        
    )
} 