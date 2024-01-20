import * as React from 'react';

interface IFooterProps {
}

const Footer: React.FunctionComponent<IFooterProps> = (props) => {
  return (<>
     <div className="footer-style-2 ptb--30 bg_image bg_image--1" data-black-overlay="6">
            <div className="wrapper plr--50 plr_sm--20">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12">
                        <div className="inner">
                            <div className="logo text-center text-sm-left mb_sm--20">
                                <a href="http://piyushprajapati.tech/" style={{color: "#f9004d"}}>
                                    <img src="assets/images/logo/logo-symbol-dark.png" alt="Piyush Prajapati" /> Piyush Prajapati
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                        <div className="inner text-center">
                            <ul className="social-share rn-lg-size d-flex justify-content-center liststyle">
                                <li><a target="_blank" href="https://github.com/piyushbhai"><i className="fab fa-github"></i></a></li>
                            
                            <li><a target="_blank" href="https://www.linkedin.com/in/piyushprajapati16"><i className="fab fa-linkedin-in"></i></a></li>
                            <li><a target="_blank" href="mailto:prajapati.piyush16@gmail.com"><i className="fa fa-envelope"></i></a></li>
                            <li><a target="_blank" href="https://gitlab.com/piyushprajapati"><i className="fab fa-gitlab"></i></a></li>
                            <li><a target="_blank" href="#"><i className="fab fa-medium"></i></a></li>
                            <li><a target="_blank" href="#"><i className="fab fa-stack-overflow"></i></a></li>
                            {/* <!-- <li><a target="_blank" href="https://twitter.com/piyushbhai10"><i className="fab fa-twitter"></i></a></li> --> */}
                            {/* <!-- <li><a target="_blank" href="https://www.instagram.com/piyush_h_prajapati/"><i className="fab fa-instagram"></i></a></li> --> */}
                            <li><a target="_blank" href="https://www.hackerrank.com/profile/ppiyushh16"><i className="fab fa-hackerrank"></i></a></li>
                            <li><a className='text-white' target="_blank" href="https://leetcode.com/piyushprajapati16/">
                                <img  src="./assets/images/icon/leetcode (2).svg" alt="" />
                            </a></li>
                            <li><a target="_blank" href="https://www.facebook.com/piyushbhai321"><i className="fab fa-facebook-f"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                        <div className="inner text-lg-right text-center mt_md--20 mt_sm--20">
                            <div className="text">
                                <p>Copyright © 2024 <a href="http://piyushprajapati.tech/">Piyush Prajapati</a>. All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  </>);
};

export default Footer;
