// import Head from 'next/head';// import Image from 'next/image';
// import styles from '../styles/Home.module.css'
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  const message = 'Hello, World!';
  const element = <h1>{message}</h1>;
  return element;
}
