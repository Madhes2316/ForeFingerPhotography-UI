import './MainPage.css';
import { BrowserRouter,Routes,Route,ScrollRestoration  } from 'react-router-dom';
import FloatingNavBar from '../FloatingNavBar/FloatingNavBar';
import TopWebPageLogo from '../TopWebPageLogo/TopWebPageLogo';
import BottomFooter from '../BottomFooter/BottomFooter';
import HomePageContents from '../MainPageContents/HomePageContents/HomePageContents';
import AddressPage from '../AddressPageContents/AddressPage/AddressPage';
import GalleryMainPage from '../GalleryPageContents/GalleryMainPage/GalleryMainPage';
import ScrollToTop from '../ScrollToTopContents/ScrollToTopComponent/ScrollToTop'
import GalleryOneMainPage from '../GalleryPageContents/GalleryOne/GalleryOneMainPage';
import GalleryTwoMainPage from '../GalleryPageContents/GalleryTwo/GalleryTwoMainPage';

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
                    <Route path='/gallery/galleryone' element={<GalleryOneMainPage />} />
                    <Route path='/gallery/gallerytwo' element={<GalleryTwoMainPage />} />
                </Routes>
                <FloatingNavBar />
                <BottomFooter />
                </ScrollToTop>
            </BrowserRouter>
        </>
    )
}
export default MainPage;