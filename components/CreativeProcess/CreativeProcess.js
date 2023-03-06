import React from 'react'
import { Container } from 'react-bootstrap';
import styles from './CreativeProcess.module.css';
import Image from 'next/image';

const CreativeProcess = () => {
    return (
        <>
            <section className={styles.process}>
                <Container>
                    <div className={styles.processText}>
                        <h2>Industry's Inefficient Creative Production Process</h2>
                        <p>Waiting for weeks to receive untested creatives can jeopardize your ROI</p>

                        <Image src='/images/process.png' width={1200} height={554} />
                    </div>
                    <div className={styles.processText}>
                        <h2>Creative.ai High-Performing, Data-Driven Ads Production Process</h2>
                        <p>AI leverages attention span, top concepts, creative tags, and asset space utilization for data-driven ads.</p>

                        <Image src='/images/process2.png' width={1200} height={554} />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default CreativeProcess