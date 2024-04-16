"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "@/componenets/navigation/navLink.module.css"

export default function NavLink({href, children}){
const path = usePathname();
    return (

        <div className={styles.link}>
        <Link href={href} className={path.startsWith(href)?styles.active:undefined} >
        {children}
        </Link>
        </div>
    )
}