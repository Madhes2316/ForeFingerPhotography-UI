import './MainPage.css';
import FloatingNavBar from '../FloatingNavBar/FloatingNavBar';
import TopWebPageLogo from '../TopWebPageLogo/TopWebPageLogo';
import BottomFooter from '../BottomFooter/BottomFooter';
import HeroAnimation from '../MainPageContents/HeroAnimation/HeroAnimation';
import HeroContent from '../MainPageContents/HeroContent/HeroContent';

const MainPage = ()=>{
    return(
        <div className="main-page">
            <TopWebPageLogo />
            <HeroAnimation />
            <HeroContent />
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