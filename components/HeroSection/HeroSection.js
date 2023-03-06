import React from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';

const HeroSection = () => {
    return (
        <>
            <section className={styles.heroSection}>
                <div className={styles.customContainer}>
                    <div className={styles.content}>
                        <h3>Exploit the DNA of a Winning Ad Generate Creative Iterations 6x Faster</h3>
                        <p>Gaming Industry's first Generative AI Video platform built by BLKBOX.ai Founders and Creative Production Expert with 20+ years of experience across 59+ game titles.</p>
                    </div>
                    <div className={styles.videoSection}>
                        <Image src='/images/video.png' width={930} height={640}></Image>
                        <Image src='/images/play-icon.svg' width={83} height={83} className={styles.playIcon}></Image>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection