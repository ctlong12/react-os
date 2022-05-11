import Head from 'next/head'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'

export default function Home() {
  const message = 'Hello, World!'
  const element = <h1>{ message }</h1>
  return element
}
