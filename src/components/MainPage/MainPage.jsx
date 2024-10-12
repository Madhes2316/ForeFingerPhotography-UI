import './MainPage.css';
import { BrowserRouter,Routes,Route,ScrollRestoration  } from 'react-router-dom';
import FloatingNavBar from '../FloatingNavBar/FloatingNavBar';
import TopWebPageLogo from '../TopWebPageLogo/TopWebPageLogo';
import BottomFooter from '../BottomFooter/BottomFooter';
import HomePageContents from '../MainPageContents/HomePageContents/HomePageContents';
import AddressPage from '../AddressPageContents/AddressPage/AddressPage';
import GalleryMainPage from '../GalleryPageContents/GalleryMainPage/GalleryMainPage';
import ScrollToTop from '../ScrollToTopContents/ScrollToTopComponent/ScrollToTop'

const MainPage = ()=>{
    return(
        <>
            <BrowserRouter>
                <ScrollToTop>
                <TopWebPageLogo />
                <Routes>
                    <Route path='' element={<HomePageContents />} />
                    <Route path='/home' element={<HomePageContents />} />
                    <Route path='/address' element={<AddressPage />} />
                    <Route path='/gallery' element={<GalleryMainPage />} />
                </Routes>
                <FloatingNavBar />
                <BottomFooter />
                </ScrollToTop>
            </BrowserRouter>
        </>
    )
}
export default MainPage;