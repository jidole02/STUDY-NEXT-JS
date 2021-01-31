import { useState,useEffect } from "react"
import {Grid} from "semantic-ui-react"
import Link from "next/link"

export default function ItemList({list}){
    const [data,setData] = useState([]);
    useEffect(()=>{
        setData(list)
    },[list])
    return(
        <div>
            <Grid columns={3}>
                    <Grid.Row>
                        {data.map((item,index)=>(
                            <Grid.Column key={index}>
                                <Link as={`/view/${item.id}`} href={`/view/[id]`}>
                                    <a style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                                        <img alt={item.name} src={item.image_link}/>
                                        <strong>{item.name}</strong>
                                        <span>$ {item.price}</span>
                                    </a>
                                </Link>
                            </Grid.Column> 
                        ))}
                    </Grid.Row>
            </Grid>
        </div>
    )
}