import axios from 'axios'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import ItemList from '../src/component/itemList';
import styles from '../styles/Home.module.css'

export default function Home({list}) {
  return (
    <div>
      <Head>
        <title>안녕하세요.</title>
      </Head>
      <ItemList list={list}></ItemList>
    </div>
  )
}

// 정적 생성
export async function getStaticProps(){
  const apiUrl = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  // await : 프로미스가 처리되기까지 대기
  const res = await axios.get(apiUrl);
  const data = res.data;

  return{
      props:{
          list: data
      },
  }
}