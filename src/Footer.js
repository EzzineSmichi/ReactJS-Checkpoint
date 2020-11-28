import {Component} from 'react';
import logo from './logo.png';

class Footer extends Component{
    render(){
        return(
            <div className='d-flex justify-content-between align-items-center bg-dark'>
                <div className='mx-auto mx-md-0'>
                    <img src={logo} alt='logo' className='img-logo'/>
                </div >
                <div className='d-xs-none d-md-block text-light'>
                    <p>&copy; Copyright 2020 by SMICHI</p> 
                </div>
                    
                <div className='d-xs-none d-md-block'>
                    <a href='#' className='my-3 p-3'>
                        <i class="fab fa-facebook-square fa-3x"></i>
                    </a>
                    <a href='#' className='my-3 p-3'>
                        <i class="fab fa-linkedin fa-3x"></i>
                    </a>
                </div>
            </div> 
        )
    }
}

export default Footer;