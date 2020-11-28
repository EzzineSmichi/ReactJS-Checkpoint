
import {Component} from 'react';
import logo from './logo.png';


class Header extends Component {
    render(){
        return(
            <nav className="navbar navbar-expand-md bg-dark navbar-dark px-2 py-0 my-0">
                <a className="navbar-brand mr-md-5" href="#">
                    <img src={logo} alt='logo' className='img-logo p-0'/>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse ml-md-5 mr-md-5" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                    <li className="nav-item mr-md-5 pr-md-5">
                        <a className="nav-link text-primary font-italic" href="#">HOME</a>
                    </li>
                    <li className="nav-item mr-md-5 pr-md-5">
                        <a className="nav-link text-primary font-italic" href="#">ABOUT</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-primary font-italic" href="#">CONTACT</a>
                    </li>    
                    </ul>
                </div>  
            </nav>
            
        )
    }
}

export default Header;