import './styles.css';
import {ReactComponent as YoutubeIcon} from './youtube.svg';
import {ReactComponent as InstagramIcon} from './instagram.svg';
import {ReactComponent as LinkedinIcon} from './linkedin.svg';


function Footer() {
    return (
    <footer className="main-footer">
        PIZZARIA EM DESENVOLVIMENTO (MISOON DEV)
        <div className='footer-icons'>
            <a href="https://www.youtube.com/channel/UCR5V87s7CcJola5yKqo65Cg" target="_new">
                <YoutubeIcon/>

            </a>

            <a href="https://br.linkedin.com/" target="_new">
                <LinkedinIcon/>

            </a>

            <a href="https://www.instagram.com/">
                <InstagramIcon/>

            </a>



        </div>
        </footer>
        
    )
}

export default Footer;