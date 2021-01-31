import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ItemList from '../src/component/itemList';
import styles from '../styles/Home.module.css'

export default function Home() {
  const [list,setList] = useState([]);
  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"

  function getData(){
    axios.get(API_URL).then((res)=>{
      setList(res.data)
    })
  }
  useEffect(()=>{
    getData();
  })
  return (
    <div>
      <Head>
        <title>안녕하세요.</title>
      </Head>
      <ItemList list={list}></ItemList>
    </div>
  )
}
