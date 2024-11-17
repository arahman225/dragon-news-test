import moment from 'moment';
import logo from '../assets/images/logo.png'

const Header = () => {
    return (
        <div>
            <div className='flex justify-center flex-col items-center space-y-4'>
                <div><img src={logo} alt="" /></div>
                <div>
                    <p>Journalism Without Fear or Favour</p>
                    <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
                </div>
            </div>
        </div>
    );
};

export default Header;