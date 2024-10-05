import './MainPage.css';
import FloatingNavBar from '../FloatingNavBar/FloatingNavBar';
import TopWebPageLogo from '../TopWebPageLogo/TopWebPageLogo';
import BottomFooter from '../BottomFooter/BottomFooter';
import HomePageContents from '../MainPageContents/HomePageContents/HomePageContents';

const MainPage = ()=>{
    return(
        <div className="main-page">
            <TopWebPageLogo />
            <HomePageContents />
            <div className='floatingNavBar-div'>
                <FloatingNavBar />
            </div>
            <div className='footer-div'>
                <BottomFooter />
            </div>
        </div>
    )
}
export default MainPage;