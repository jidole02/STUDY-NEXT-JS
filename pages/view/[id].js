import axios from 'axios'
import { useRouter } from 'next/router'
import {useEffect,useState} from 'react'
import Item from '../../src/component/Item'

const Post = ({item}) => {
  return <>{item&& <Item item={item}></Item>}</>
}

export default Post

// html을 미리 만드는 방식 (api 호출 한번이면 됨)
// async 를 함수 앞에 붙이면 항상 프로미스를 반환
// 동기 : 결과값을 가져올때까지 기달림
// 비동기 : 조금 기다리더라도 결과를 다 가져와버림
export async function getServerSideProps(cont){
    const id = cont.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`
    // await : 프로미스가 처리되기까지 대기
    const res = await axios.get(apiUrl);
    const data = res.data;

    return{
        props:{
            item: data,
        },
    }
}