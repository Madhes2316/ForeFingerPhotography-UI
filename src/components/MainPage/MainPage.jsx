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
import CommonImageGallery from '../GalleryPageContents/CommonImageGallery/CommonImageGallery';
import ContactUs from '../ContactUsContents/ContactUs';
import ServicePage from '../ServicePageContents/ServicePage';
import MainBlogPage from '../BlogPageContents/MainBlogPage'
import PageNotFoundPage from '../PageNotFoundContents/PageNotFoundPage';
import AboutUsPage from '../AboutUsPageContents/AboutUsPage';

const MainPage = ()=>{
    return(
        <>
            <BrowserRouter>
                <ScrollToTop>
                <TopWebPageLogo />
                <Routes>
                    <Route path='/' element={<HomePageContents />} />
                    <Route path='/home' element={<HomePageContents />} />
                    <Route path='/gallery' element={<GalleryMainPage />} />
                    <Route path='/gallery/galleryone' element={<GalleryOneMainPage />} />
                    <Route path='/gallery/gallerytwo' element={<GalleryTwoMainPage />} />
                    <Route path='/gallery/galleryone/imagegallery/:topicName' element={<CommonImageGallery />} />
                    <Route path='/services' element={<ServicePage />} />
                    <Route path='/aboutus' element={<AboutUsPage />} />
                    <Route path='/address' element={<AddressPage />} />
                    <Route path='/contactus' element={<ContactUs />} />
                    <Route path='/blog' element={<MainBlogPage />} />
                    <Route path='*' element={<PageNotFoundPage />} />
                </Routes>
                <FloatingNavBar />
                <BottomFooter />
                </ScrollToTop>
            </BrowserRouter>
        </>
    )
}
export default MainPage;