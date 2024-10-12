import './MainPage.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import FloatingNavBar from '../FloatingNavBar/FloatingNavBar';
import TopWebPageLogo from '../TopWebPageLogo/TopWebPageLogo';
import BottomFooter from '../BottomFooter/BottomFooter';
import HomePageContents from '../MainPageContents/HomePageContents/HomePageContents';
import AddressPage from '../AddressPageContents/AddressPage/AddressPage';
import GalleryMainPage from '../GalleryPageContents/GalleryMainPage/GalleryMainPage';

const MainPage = ()=>{
    return(
        <>
            <BrowserRouter>
                <TopWebPageLogo />
                <Routes>
                    <Route path='' element={<HomePageContents />} />
                    <Route path='/home' element={<HomePageContents />} />
                    <Route path='/address' element={<AddressPage />} />
                    <Route path='/gallery' element={<GalleryMainPage />} />
                </Routes>
                <FloatingNavBar />
                <BottomFooter />
            </BrowserRouter>
        </>
    )
}
export default MainPage;