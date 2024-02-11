import * as React from 'react';
import { Link, useParams } from 'react-router-dom';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    // let params = useParams();
    // console.log(window.location.pathname);
    let [path,] = React.useState(window.location.pathname);
  return (
    <>
       
        <header className="header-area header-style-two header--transparent header-light-mode header--sticky">
            <div className="header-wrapper">
                <div className="header-left d-flex align-items-center">
                    <div className="logo">
                        <Link to="/">
                            <img src="assets/images/logo/logo-symbol-dark.png" alt="Piyush Prajapati"/>
                        </Link>
                    </div>
                    <nav className="mainmenunav d-lg-block ml--50">
                        <div className="navbar-example2">
                           {/* {path!='/portfolio'?  */}
                            <ul className="mainmenu nav nav-pills">
                                <li className="nav-item">
                                    <a className="nav-link smoth-animation active" href="#home">Home</a>
                                </li>
                                <li>
                                    <a className="nav-link smoth-animation" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link smoth-animation" href="#skills">Skills</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link smoth-animation" href="#portfolio">Portfolio</a>
                                </li>
                                {/* <li className="nav-item">
                                    <a className="nav-link smoth-animation" href="#blog">Blog</a>
                                </li> */}
                                <li className="nav-item">
                                    <a className="nav-link smoth-animation" href="#contact">Contact</a>
                                </li>
                            </ul>
                            {/* : <ul className="mainmenu nav nav-pills">
                            <li className="nav-item">
                                <Link className="nav-link smoth-animation active" to="/">Home</Link>
                            </li>                                                   
                        </ul>} */}
                            
                        </div>
                    </nav>
                </div>
                <div className="header-right">
                    <div className="social-share-inner">
                        <ul className="social-share social-style--2 d-flex justify-content-start liststyle">
                            <li><a target="_blank" href="https://github.com/piyushbhai"><i className="fab fa-github"></i></a></li>
                            
                            <li><a target="_blank" href="https://www.linkedin.com/in/piyushprajapati16"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a target="_blank" href="mailto:prajapati.piyush16@gmail.com"><i className="fa fa-envelope"></i></a></li>
                            <li><a target="_blank" href="https://gitlab.com/piyushprajapati"><i className="fab fa-gitlab"></i></a></li>
                            {/* <li><a target="_blank" href="#"><i className="fab fa-medium"></i></a></li>
                            <li><a target="_blank" href="#"><i className="fab fa-stack-overflow"></i></a></li> */}
                            
                            
                            <li><a target="_blank" href="https://www.hackerrank.com/profile/ppiyushh16"><i className="fab fa-hackerrank"></i></a></li>
                            <li><a className='text-white' target="_blank" href="https://leetcode.com/piyushprajapati16/">
                                <img  src="./assets/images/icon/leetcode (2).svg" alt="" />
                            </a></li>
                            {/* <li><a target="_blank" href="https://www.facebook.com/piyushbhai321"><i className="fab fa-facebook-f"></i></a></li> */}
                        </ul>
                    </div>
                    </div>
                    
                    <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
                        <span className="menutrigger text-white">
                            <i data-feather="menu"></i>
                        </span>
                    </div>
                    
                    
                    <div className="close-menu d-block d-lg-none">
                        <span className="closeTrigger">
                            <i data-feather="x"></i>
                        </span>
                    </div>
                    
            </div>
        </header>
        
    </>
  );
};

export default Header;
