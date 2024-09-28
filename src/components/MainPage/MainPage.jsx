import './MainPage.css';
import FloatingNavBar from '../FloatingNavBar/FloatingNavBar';

const MainPage = ()=>{
    return(
        <div className="main-page">
            <div className='floatingNavBar-div'>
                <FloatingNavBar />
            </div>
        </div>
    )
}
export default MainPage;