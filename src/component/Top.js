import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top(){
    return(
        <>
        <img src={"/images/로고.jpg"} alt="" style={{width:"80px"}}/>
        {/* 파일 임포트시 위와 같은 방식 */}
        <Header as="h1">NEXT JS</Header>
        <Gnb></Gnb>
        </>
    )
}