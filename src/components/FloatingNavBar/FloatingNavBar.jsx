import './FloatingNavBar.css';
import fbLogo from '../../assets/social-media-logo/fb.svg';
import instalogo from '../../assets/social-media-logo/insta.svg';
import wplogo from '../../assets/social-media-logo/wp.svg';
import maillogo from '../../assets/social-media-logo/mail.svg';
import calllogo from '../../assets/social-media-logo/call.svg';
import { useEffect, useState } from 'react';
import { Link,useNavigate,useLocation  } from 'react-router-dom';
import LongFloatingMenuBar from '../LongFloatingMenuBar/LongFloatingMenuBar';

const FloatingNavBar = () => {

    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isSmallScreen = windowDimensions.width < 1200;

    const MainMenuArray = [
        {
            id: 1,
            liItem: 'Home',
        },
        {
            id: 2,
            liItem: 'Gallery',
        },
        {
            id: 3,
            liItem: 'Services',
        },
        {
            id: 4,
            liItem: 'AboutUs',
        },
        {
            id: 5,
            liItem: 'Address',
        },
        {
            id: 6,
            liItem: 'Blog',
        },
    ];

    const [isShortMenuIconClicked, setIsShortMenuIconClicked] = useState(false);

    const shortMenuClick = () => {
        setIsShortMenuIconClicked((prev) => !prev);
    };

    const navigate = useNavigate();
    const OnContactUsButtonClick = () =>{
        navigate('/contactus');
    }

    const socialMediaLink = {
        'Fb':{
          'link':'https://www.instagram.com/surjith_easjay?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
        },
        'Insta':{
          'link':'https://www.instagram.com/surjith_easjay?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
        },
        'Wp':{
          'link':'https://wa.me/919488187955?text=Hello%20ForeFinger%20Photography%20team'
        },
        'Mail':{
          'link':'mailto:surjithcbe27@gmail.com'
        },
        'Call':{
          'link':'tel:+919488187955'
        }
      }

      
      const getPathName = () => {
        const { pathname } = useLocation();
        const firstSegment = pathname.split("/")[1] || "home"; // Get the first segment of the path
    
        // Format the path name to capitalize the first letter
        const formattedPathName = firstSegment.replace(/^\w/, (c) => c.toUpperCase());
    
        // Define valid routes
        const validRoutes = ["home", "gallery", "services", "aboutus", "address", "contactus", "blog"];
    
        // Check if the first segment is an exact match for a valid route
        const isValidRoute = validRoutes.includes(firstSegment.toLowerCase());
    
        return isValidRoute ? formattedPathName : "404"; // Return the formatted name or "404"
    }
    


    return (
        <>
        <div className='floatingNavBar-div'>
            {/* Render LongFloatingMenuBar when screen size is more than 1200px */}
            {!isSmallScreen && <LongFloatingMenuBar />}

            {/* Render button-div when menu is not clicked and screen size is small */}
            {isSmallScreen && !isShortMenuIconClicked && (
                <div className="button-div">
                    <div className="iconMenu-div">
                        <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="24px" fill="#F7C601"><path d="m80-520 200-360 200 360H80Zm200 400q-66 0-113-47t-47-113q0-67 47-113.5T280-440q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-280q0-33-23.5-56.5T280-360q-33 0-56.5 23.5T200-280q0 33 23.5 56.5T280-200Zm-64-400h128l-64-115-64 115Zm304 480v-320h320v320H520Zm80-80h160v-160H600v160Zm80-320q-57-48-95.5-81T523-659q-23-25-33-47t-10-47q0-45 31.5-76t78.5-31q27 0 50.5 12.5T680-813q16-22 39.5-34.5T770-860q47 0 78.5 31t31.5 76q0 25-10 47t-33 47q-23 25-61.5 58T680-520Zm0-105q72-60 96-85t24-41q0-13-7.5-21t-20.5-8q-10 0-19.5 5.5T729-755l-49 47-49-47q-14-14-23.5-19.5T588-780q-13 0-20.5 8t-7.5 21q0 16 24 41t96 85Zm0-78Zm-400 45Zm0 378Zm400 0Z"/></svg>
                        <a className="menu-text text-white text-2xl font-semibold">{getPathName()}</a>
                    </div>
                    <div className="hamburgerMenuSvg-div" onClick={() => shortMenuClick()}>
                        <svg
                            fill="white"
                            className="ham-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="27px"
                            viewBox="0 -960 960 960"
                            width="24px"
                        >
                            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                        </svg>
                    </div>
                </div>
            )}

            {/* Render main-bottom-floater-menu-div when menu is clicked and screen size is small */}
            {isSmallScreen && isShortMenuIconClicked && (
                <div className="main-bottom-floater-menu-div">
                    <div className="menu-div">
                        <ul>
                            {MainMenuArray.map((item) => (
                                <li key={item.id} onClick={() => shortMenuClick()}>
                                    {/* Conditionally add Link for 'Home' and 'Address' */}
                                    {(item.liItem === 'Home' || item.liItem === 'Address' || item.liItem === 'Gallery' || item.liItem === 'Services' || item.liItem === 'Blog' || item.liItem === 'AboutUs') ? (
                                        <Link to={`/${item.liItem.toLowerCase().replace(/\s+/g, '-')}`}>{item.liItem}</Link>
                                    ) : (
                                        item.liItem
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <hr />
                    <div className="social-div">
                        <ul>
                            <li>
                                <a href={socialMediaLink.Fb.link} target='_blank' rel='noopener noreferrer'>
                                    <img src={fbLogo} alt="Facebook logo" />
                                    <span>Facebook</span>
                                </a>
                            </li>
                            <li>
                                <a href={socialMediaLink.Insta.link} target='_blank' rel='noopener noreferrer'>
                                    <img src={instalogo} alt="Instagram logo" />
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a href={socialMediaLink.Wp.link} target='_blank' rel='noopener noreferrer'>
                                    <img src={wplogo} alt="Whatsapp logo" />
                                    <span>Whatsapp</span>
                                </a>
                            </li>
                            <li>
                                <a href={socialMediaLink.Mail.link} target='_blank' rel='noopener noreferrer'>
                                    <img src={maillogo} alt="Mail logo" />
                                    <span>Mail</span>
                                </a>
                            </li>
                            <li>
                                <a href={socialMediaLink.Call.link} target='_blank' rel='noopener noreferrer'>
                                    <img src={calllogo} alt="Mail logo" />
                                    <span>Call?</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr />
                    <div className="contactus-div">
                        <button onClick={() => {OnContactUsButtonClick(), shortMenuClick()}}>Contact Us</button>
                    </div>
                    <div className="bottom-button-div">
                        <div className="menu-button-div">
                            <div className="logoMenu-div" onClick={() => shortMenuClick()}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="24px" fill="#F7C601"><path d="m80-520 200-360 200 360H80Zm200 400q-66 0-113-47t-47-113q0-67 47-113.5T280-440q66 0 113 47t47 113q0 66-47 113t-113 47Zm0-80q33 0 56.5-23.5T360-280q0-33-23.5-56.5T280-360q-33 0-56.5 23.5T200-280q0 33 23.5 56.5T280-200Zm-64-400h128l-64-115-64 115Zm304 480v-320h320v320H520Zm80-80h160v-160H600v160Zm80-320q-57-48-95.5-81T523-659q-23-25-33-47t-10-47q0-45 31.5-76t78.5-31q27 0 50.5 12.5T680-813q16-22 39.5-34.5T770-860q47 0 78.5 31t31.5 76q0 25-10 47t-33 47q-23 25-61.5 58T680-520Zm0-105q72-60 96-85t24-41q0-13-7.5-21t-20.5-8q-10 0-19.5 5.5T729-755l-49 47-49-47q-14-14-23.5-19.5T588-780q-13 0-20.5 8t-7.5 21q0 16 24 41t96 85Zm0-78Zm-400 45Zm0 378Zm400 0Z"/></svg>
                                <button>{getPathName()}</button>
                            </div>
                            <div className="closelogo-div" onClick={() => shortMenuClick()}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#5f6368"
                                >
                                    <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </>
    );
};

export default FloatingNavBar;
