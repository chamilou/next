import NavLink from "./navLink"
import styles from "@/componenets/navigation/navLink.module.css"
export default function PrimaryMenu(){

    return(

        
<div className={styles.nav}>
<NavLink href={"/"}>Home</NavLink>
<NavLink href={"/blog"}>Blogs</NavLink>
<NavLink href={"/about"}>About</NavLink>
<NavLink href={"/contact"}>Contact</NavLink>
</div>
        )
}