import './MainPage.css';
import FloatingMenuBar from '../FloatingMenu/FloatingMenuBar';
import Test from '../Test/Test';

const MainPage = ()=>{
    return(
        <div className="main-page">
            {/* <div className='floatingmenubar-div'>
            <FloatingMenuBar />
            </div> */}
            <div className='test-div'>
                <Test />
            </div>
        </div>
    )
}
export default MainPage;