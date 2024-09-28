import './Test.css';
import fbLogo from '../../assets/social-media-logo/fb.svg';
import instalogo from '../../assets/social-media-logo/insta.svg';
import wplogo from '../../assets/social-media-logo/wp.svg';
import maillogo from '../../assets/social-media-logo/mail.svg';

const Test = ()=>{

    const MainMenuArray = [
        {
            id:1,
            liItem:'Home'
        },
        {
            id:2,
            liItem:'Services'
        },
        {
            id:3,
            liItem:'Gallery'
        },
        {
            id:4,
            liItem:'About Us'
        },
        {
            id:5,
            liItem:'Address'
        },
    ]

    return(
        <>
        <div className='main-bottom-floater-menu-div'>
            <div className='menu-div'>
                <ul>
                    {MainMenuArray.map((item) => 
                        <li key={item.id}>{item.liItem}</li>
                    )}
                </ul>
            </div>
            <hr />
            <div className='social-div'>
            <ul>
                    <li>
                        <a href="#">
                            <img src={fbLogo} alt="Facebook logo" />
                            <span>Facebook</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={instalogo} alt="Instagram logo" />
                            <span>Instagram</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={wplogo} alt="Whatsapp logo" />
                            <span>Whatsapp</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={maillogo} alt="Mail logo" />
                            <span>Mail</span>
                        </a>
                    </li>
                </ul>
            </div>
            <hr />
            <div className='contactus-div'>
                <button>Contact Us</button>
            </div>
            <div className="bottom-button-div">
                <div className='menu-button-div'>
                    <div className='logoMenu-div'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="27px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M200-160v-366L88-440l-48-64 440-336 160 122v-82h120v174l160 122-48 64-112-86v366H520v-240h-80v240H200Zm80-80h80v-240h240v240h80v-347L480-739 280-587v347Zm120-319h160q0-32-24-52.5T480-632q-32 0-56 20.5T400-559Zm-40 319v-240h240v240-240H360v240Z"/></svg>
                        <button>Home</button>
                    </div>
                    <div className='closelogo-div'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Test;