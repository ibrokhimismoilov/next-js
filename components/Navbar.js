import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from "../styles/Navbar.module.scss";

const navigation = [
    { id: 1, title: "Home", path: "/" },
    { id: 2, title: "Posts", path: "/posts" },
    { id: 3, title: "Contacts", path: "/contacts" },
]

const Navbar = () => {
    const { pathname } = useRouter();

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                Ibrokhim
            </div>
            <div className={styles.links}>
                {
                    navigation.map(item => {
                        return (
                            <Link key={item.id} href={item.path}>
                                <a className={pathname === item.path ? styles.active : ""}>{item.title}</a>
                            </Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}

export default Navbar
