import '../styles/globals.css'
import "semantic-ui-css/semantic.min.css"
import Footer from '../src/component/Footer'
import Top from '../src/component/Top'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Top></Top>
    <Component {...pageProps} />
    <Footer></Footer>
    </>
  ) 
}

export default MyApp


// 페이지 전환시 레이아웃 유지
// 페이지 전환시 상태값 유지
// componentDidCatch를 통한 에러 핸들링 가능
// 추가적인 데이터를 페이지로 주입 가능
// 글로벌 css는 여기에 선언 