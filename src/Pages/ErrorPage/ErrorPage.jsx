import Header from '../Shared/Header/Header';
import Navber from '../Shared/Navber/Navber';
const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <Navber></Navber>
            <div className='max-w-7xl mx-auto'>
                <h2 className='text-center mt-96 text-red-500 font-semibold'>This page is ender devlopment team.</h2>
            </div>
        </div>
    );
};

export default ErrorPage;