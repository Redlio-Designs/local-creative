import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Header from '../components/Header/Header.js';
import HeroSection from '../components/HeroSection/HeroSection.js';
import CreativeProcess from '../components/CreativeProcess/CreativeProcess.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Creative.AI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.svg" />
      </Head>
      <Header />
      <HeroSection />
      <CreativeProcess />
    </>
  )
}