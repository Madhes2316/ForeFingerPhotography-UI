import './MainPage.css';
import FloatingNavBar from '../FloatingNavBar/FloatingNavBar';
import TopWebPageLogo from '../TopWebPageLogo/TopWebPageLogo';
import BottomFooter from '../BottomFooter/BottomFooter';
import HomePageContents from '../MainPageContents/HomePageContents/HomePageContents';

const MainPage = ()=>{
    return(
        <>
            <TopWebPageLogo />
            <HomePageContents />
            <FloatingNavBar />
            <BottomFooter />
        </>
    )
}
export default MainPage;