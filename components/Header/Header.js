import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import styles from './Header.module.css'


const Header = () => {
    return (
        <>
            <Navbar className={styles.header}>
                <div className={`custom-container ${styles.mainHeader}`}>
                    <Navbar.Brand href="/">
                        <Image src='/images/logo.svg' width={244} height={56} alt='logo'></Image>
                    </Navbar.Brand>
                    <div className={styles.signIn} >
                        <Link href="#">
                            Sign in
                        </Link>
                        <Link href="#" className={styles.signUp}>
                            Sign Up
                        </Link>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default Header