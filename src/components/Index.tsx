import React,{useState} from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ModalVideo from 'react-modal-video'

interface IAppProps {
}

const App: React.FunctionComponent<IAppProps> = (props) => {
    const [isOpen, setOpen] = useState(false)

  return (<>
   <div className="page-wrapper">
            
            <div className="rn-slider-area" id="home">
                
                <div className="slide personal-portfolio-slider slider-paralax slider-style-3 dark-slider d-flex align-items-center justify-content-center bg_image bg_image--28">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="inner text-left">
                                    <span>Full - Stack Web Developer</span>
                                    <h1 className="title">Hi,  <span>Piyush Prajapati</span></h1>
                                    <span>Self-driven, quick learner, passionate programmer who enjoys<br/> solving a complex and challenging real-world problems.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            

            
            <div className="about-area rn-section-gap bg_color--1" id="about">
                <div className="about-wrapper">
                    <div className="container">
                        <div className="row row--35 align-items-center">
                            {/* <!-- <div className="col-lg-5">
                                <div className="thumbnail">
                                    <img className="w-100" src="assets/images/about/about-piyush.jpg" alt="About Piyush Prajapati" />
                                </div>
                            </div> --> */}
                            <div className="col-lg-12">
                                <div className="about-inner inner pt--20 pt_sm--40 pt_md--40">
                                    <div className="section-title text-center">
                                        <h2 className="title">About Me</h2>
                                        <p className="description text-justify">
                                            I'm a passionate Full Stack Web Developer with 7+ years of experience with  developing Full Stack web applications with React Js, Angular, Node Js, PHP, Mongo DB, Mysql and Cloud Technologies like AWS EC2, S3 etc., My experiences range from building scalable sites. My aim has always been to produce websites that look beautiful and professional, are highly functional, load quickly, and are Search Engine optimized.
                                        </p>
                                        <p className="description text-justify">
                                            I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.
                                        </p>
                                    </div>
                                    <div className="tab-wrapper mt--30">
                                        <ul className="nav nav-tabs tab-style--1" id="myTab" role="tablist">
                                            <li className="nav-item">
                                                <a className="nav-link active" id="mainskill" data-toggle="tab" href="#rn-mainskill" role="tab" aria-controls="mainskill" aria-selected="true">Skills</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="awards" data-toggle="tab" href="#rn-awards" role="tab" aria-controls="awards" aria-selected="false">Awards</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="experience" data-toggle="tab" href="#rn-experience" role="tab" aria-controls="experience" aria-selected="false">Experience</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="education" data-toggle="tab" href="#rn-education" role="tab" aria-controls="education" aria-selected="false">Education</a>
                                            </li>
                                        </ul>
                                        <div className="tab-content" id="myTabContent">
                                            <div className="tab-pane fade show active" id="rn-mainskill" role="tabpanel" aria-labelledby="mainskill">
                                                <div className="single-tab-content">
                                                    <ul>
                                                <li>
                                                    <b>Full Stack Web Development</b> <span> :
                                                MERN Stack (Mongo DB, Express JS, React Js, Node JS) , Angular, PHP</span>
                                                <br/><b>Languages : </b> <span>HTML/CSS, PHP, JavaScript</span>
                                                <br/><b>Databases : </b> <span>MySQL, MongoDB</span>
                                                <br/><b>Frameworks : </b> <span>React Js, Next Js, Node.js, Bootstrap, Material Bootstrap, ANT Design</span>
                                                <br/><b>Tools & Technologies : </b> <span>Git, Docker, AWS ( EC2, S3 ), JIRA</span>
                                                <br/><b>Problem Solving : </b> <span>Solved problems in leetcode </span>


                                               
                                                </li>                                                       
                                                </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="rn-awards" role="tabpanel" aria-labelledby="awards">
                                                <div className="single-tab-content">
                                                    <ul>
                                                        <li>Webimation -
                                                                    Website Development 2015 -
                                                            2016
                                                   </li>                                                        
                                                        <li>Star Performer -
                                                                    Web Development 2021
                                                </li>                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tab-pane fade" id="rn-experience" role="tabpanel" aria-labelledby="experience">
                                                <div className="single-tab-content">
                                                    <ul>
                                                        <li>Sr. Full Stack Web (MERN) Developer<span> - Rayvat Outsouring(Jenya)
                                                        </span> 2017 - Present</li>
                                                        <li>Full Stack Web Developer<span> -
                                                        SYNC Technologies PVT. LTD.
                                                    </span> 2016 - 2017</li>
                                                        <li>Jr. Web Developer<span> -
                                                            RJITech IT Solution PVT. LTD.
                                                        </span> 2015 - 2016</li>
                                                      
                                                      
                                                    </ul>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade" id="rn-education" role="tabpanel" aria-labelledby="education">
                                                <div className="single-tab-content">
                                                    <ul>
                                                        <li>MCA (Master Of Computer Application)<span> - Kadi University,
                                                                    Gandhinagar</span> 2015 with 7.22 CPI</li>
                                                        <li>BCA (Bachelor Of Computer Application)<span> -
                                                                    HNGU University,
                                                                    Kadi, Mehsana</span> 2012 with 60%</li>                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="view-more-btn mt--0 m--0 mt_sm--30 text-center">
                        <a className="rn-button-style--2 btn_solid btn-size-sm" href="#">Download Resume</a>
                    </div>
                </div>
            </div>
        </div>
        <hr/>

             
             <div className="rn-service-area rn-section-gap bg_color--1" id="skills">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--30 mb_sm--0 mb_md--0">
                                <h2 className="title">My Skills</h2>
                                <p>My experiences range from building scalable sites.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mt--10">
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--10">
                            <div className="single-service service__style--2 bg-color-gray text-center">
                                    <div className="service">
                                        <div className="icon pb-3">
                                            <img width="150px" src="./assets/images/icon/mongodb.svg"/>
                                        </div>
                                        <div className="content text-justify">
                                            <p className="title text-center">Mongo DB</p>
                                            <small >
                                                MongoDB is a popular, open-source NoSQL database management system. It is designed to handle large volumes of data and provide high performance and scalability.
                                            
                                                MongoDB is commonly used in various applications, including web development, mobile app development, and big data processing.</small>
                                        </div>
                                    </div>                                
                            </div>
                        </div>
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--10">
                            <div className="single-service service__style--2 bg-color-gray text-center">
                                    <div className="service">
                                        <div className="icon ">
                                            <img width="50px" src="./assets/images/icon/icons8-express-js.svg"/> 
                                        </div>
                                        <div className="content text-justify">
                                            <p className="title text-center">Express JS</p>
                                            <small >
                                                Express.js, or simply Express, is a backend web application framework for building RESTful APIs with Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It is used to build a single page, multipage, and hybrid web application.</small>
                                        </div>
                                    </div>                                
                            </div>
                        </div>
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--10">
                            <div className="single-service service__style--2 bg-color-gray text-center">
                                    <div className="service">
                                        <div className="icon ">
                                            <i className="fa-brands fa-react " style={{color: "#5ED3F3"}}></i>
                                        </div>
                                        <div className="content text-justify">
                                            <p className="title text-center" >React JS</p>
                                            <small >
                                                React.js is an open-source JavaScript library developed and maintained by Facebook. It is widely used for building user interfaces, particularly for single-page applications where user interactions are dynamic and the content may change without requiring a full page reload.</small>
                                        </div>
                                    </div>                                
                            </div>
                        </div>
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--10">
                            <div className="single-service service__style--2 bg-color-gray text-center">
                                    <div className="service">
                                        <div className="icon ">
                                            <i className="fa-brands fa-node " style={{color: "#509941"}}></i>
                                        </div>
                                        <div className="content text-justify">
                                            <p className="title text-center">Node JS</p>
                                            <small >
                                                Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.</small>
                                        </div>
                                    </div>                                
                            </div>
                        </div>
                        

                      
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--10">
                            <div className="single-service service__style--2 bg-color-gray text-center">
                                    <div className="service">
                                        <div className="icon ">
                                            <img width="50px" src="./assets/images/icon/nextjs-icon-svgrepo-com.svg"/> 
                                        </div>
                                        <div className="content text-justify">
                                            <p className="title text-center">Next JS</p>
                                            <small >
                                                Next.js is a React-based open-source web development framework created by Vercel. It is designed to simplify the process of building modern, server-rendered React applications with a focus on performance and developer experience. Next.js provides a set of conventions and tools that help developers build scalable and production-ready applications.</small>
                                        </div>
                                    </div>                                
                            </div>
                        </div>
                        
                       
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--10">
                            <div className="single-service service__style--2 bg-color-gray text-center">
                                    <div className="service">
                                        <div className="icon ">
                                            <img width="50px" src="./assets/images/icon/typescript.svg"/> 
                                        </div>
                                        <div className="content text-justify">
                                            <p className="title text-center">Typescript</p>
                                            <small >
                                                TypeScript is an open-source programming language developed and maintained by Microsoft. It is a superset of JavaScript, which means that any valid JavaScript code is also valid TypeScript code. TypeScript adds optional static typing and other features to JavaScript, making it a more robust and scalable language, particularly for large-scale applications.</small>
                                        </div>
                                    </div>                                
                            </div>
                        </div>
                        
                       
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--10">
                            <div className="single-service service__style--2 bg-color-gray text-center">
                                    <div className="service">
                                        <div className="icon ">
                                            <img width="50px" src="./assets/images/icon/icons8-angularjs.svg"/> 
                                        </div>
                                        <div className="content text-justify">
                                            <p className="title text-center">Angular</p>
                                            <small >
                                                Angular is a popular open-source web application framework developed and maintained by Google. It's a comprehensive framework for building dynamic, single-page web applications (SPAs) and is known for its modularity, declarative templates, dependency injection system, and the use of TypeScript as its primary programming language.</small>
                                        </div>
                                    </div>                                
                            </div> <br/>
                            <div className="single-service service__style--2 bg-color-gray text-center">
                                <div className="service">
                                    <div className="icon ">
                                        <img width="80px" src="./assets/images/icon/Git-Logo-2Color.svg"/> 
                                    </div>
                                    <div className="content text-justify">
                                        <p className="title text-center">GIT ( Version Control System )</p>
                                        <small >
                                            Git is a distributed version control system (DVCS) that is widely used for tracking changes in source code during software development.</small>
                                    </div>
                                </div>                                
                        </div>
                        </div>
                        
                       
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--10">
                            <div className="single-service service__style--2 bg-color-gray text-center">
                                    <div className="service">
                                        <div className="icon ">
                                            <img width="70px" src="./assets/images/icon/new-php-logo.svg"/> &nbsp;
                                            <img width="40px" src="./assets/images/icon/codeigniter-icon.svg"/>  &nbsp;
                                            <img width="50px" src="./assets/images/icon/icons8-wordpress.svg"/> 
                                        </div>
                                        <div className="content text-justify">
                                            <p className="title text-center">PHP / Codeigniter / Wordpress</p>
                                            <small >
                                                PHP (Hypertext Preprocessor) is a server-side scripting language widely used for web development.</small> <br/><br/>
                                            <small >
                                                CodeIgniter is an open-source web application framework for building dynamic web applications in PHP. It follows the model-view-controller (MVC) architectural pattern.</small><br/><br/>
                                            <small >
                                                WordPress is a free and open-source content management system (CMS) that is widely used for creating websites and blogs. </small>
                                        </div>
                                    </div>                                
                            </div> <br/>
                          
                        </div>
                        
                        
                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--10">
                            <div className="single-service service__style--2 bg-color-gray text-center">
                                    <div className="service">
                                        <div className="icon ">
                                            <img width="60px" src="./assets/images/icon/icons8-html-5.svg"/> 
                                            <img width="60px" src="./assets/images/icon/icons8-css.svg"/> 
                                            <img width="60px" src="./assets/images/icon/icons8-javascript.svg"/> 
                                        </div>
                                        <div className="content text-justify">
                                            <p className="title text-center">HTML / CSS / Javascript</p>
                                            <small >
                                                HTML, or HyperText Markup Language, is the standard markup language for creating and structuring content on the web.</small> <br/><br/>
                                            <small >
                                                CSS, or Cascading Style Sheets, is a style sheet language used to describe the presentation and formatting of a document written in HTML or XML. It is visual appearance of web pages, including the layout, colors, fonts, and spacing.</small><br/><br/>
                                            <small >
                                                JavaScript (JS) is a high-level, interpreted programming language. JavaScript is now widely used across various platforms, including server-side development, mobile app development, and more.</small>
                                        </div>
                                    </div>                                
                            </div>
                        </div>
                        

                        
                        <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--10">
                            <div className="single-service service__style--2 bg-color-gray text-center">
                                <div className="service">
                                    <div className="icon ">
                                        <img width="50px" src="./assets/images/icon/docker-svgrepo-com.svg"/> 
                                    </div>
                                    <div className="content text-justify">
                                        <p className="title text-center">Docker</p>
                                        <small >
                                          
Docker is an open-source platform designed to automate the deployment, scaling, and management of applications within lightweight, portable containers. Containers are standalone, executable packages that include everything needed to run a piece of software, including the code, runtime, libraries, and system tools.</small>
                                    </div>
                                </div>                                
                        </div>
                         </div>
                        
                         
                        
                           <div className="col-lg-4 col-md-6 col-sm-6 col-12 mt--10">
                            <div className="single-service service__style--2 bg-color-gray text-center">
                                <div className="service">
                                    <div className="icon ">
                                        <img width="50px" src="./assets/images/icon/icons8-amazon-web-services.svg"/> 
                                    </div>
                                    <div className="content text-justify">
                                        <p className="title text-center">AWS</p>
                                        <small >Amazon Web Services (AWS) is a comprehensive and widely used cloud computing platform provided by Amazon. Launched in 2006, AWS offers a vast array of on-demand cloud services, </small> <br/>
                                        <small >EC2 (Amazon Elastic Compute Cloud)</small> <br/>
                                        <small >S3 (Amazon Simple Storage Service)</small><br/>
                                        <small >Route53</small><br/>
                                        <small >Amazon IAM (Identity and Access Management)</small><br/>
                                        <small >Amazon Cloudfront</small>
                                    </div>
                                </div>                                
                        </div>
                        </div>
                        


                    </div>
                </div>
            </div>
            
            
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="title text-center">Proficiency</h2>
                    </div>

                    <div className="col-lg-12">
                          
                            <div className="progress-wrapper">
                             

                                
                                <div className="rn-progress-charts">
                                    <h6 className="heading heading-h6">Frontend / Design</h6>
                                    <div className="progress">
                                
                                        <div className="progress-bar wow fadeInLeft" data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" style={{width: "90%"}} ><span
                                                className="percent-label">90%</span></div>
                                    </div>
                                </div>
                                


                                
                                <div className="rn-progress-charts custom-color--2 mt--40">
                                    <h6 className="heading heading-h6">Backend</h6>
                                    <div className="progress">
                                        <div className="progress-bar wow fadeInLeft" data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" style={{width: "85%"}} ><span
                                                className="percent-label">85%</span></div>
                                    </div>
                                </div>
                                

{/*                                 
                                <div className="rn-progress-charts custom-color--3 mt--40">
                                    <h6 className="heading heading-h6">Programming</h6>
                                    <div className="progress">
                                        <div className="progress-bar wow fadeInLeft" data-wow-duration="0.8s" data-wow-delay=".8s" role="progressbar" style={{width: "80%"}} ><span
                                                className="percent-label">80%</span></div>
                                    </div>
                                </div>
                                 */}

                                
                                <div className="rn-progress-charts custom-color--4 mt--40">
                                    <h6 className="heading heading-h6">Server</h6>
                                    <div className="progress">
                                        <div className="progress-bar wow fadeInLeft" data-wow-duration="0.9s" data-wow-delay=".9s" role="progressbar" style={{width: "70%"}}  ><span
                                                className="percent-label">70%</span></div>
                                    </div>
                                </div>
                                
                        </div>
                        
                    </div>
                   
                </div>
            </div>
            <hr/><br/>
           
           <div className="rn-portfolio-area rn-section-gap bg_color--1">
            <div className="portfolio-sacousel-inner pb--30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--20 mb_sm--0 mb_md--0">
                                <h2 className="title">My All Works</h2>
                                <p>My most successful projects are llisted below</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rn-video-popup-area rn-section-gap bg_color--1">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="thumbnail position-relative">
                                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

                                    <img className="w-100" src="https://rainbowit.net/html/trydo/assets/images/portfolio/portfolio-big-01.jpg" alt="About Images"/>
                                    <a className="video-popup position-top-center play__btn size-medium" href="#" onClick={()=> setOpen(true)}><span className="play-icon"></span></a>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <h5 className="mb-1">Web Design</h5>
                                        <h6>T-shirt design is the part of design</h6>
                                    </div>
                                </div>
                            </div>
                            
    
                            
                            <div className="col-lg-4 col-md-6 col-12 mt_sm--30">
                                <div className="thumbnail position-relative">
                                    <img className="w-100" src="https://rainbowit.net/html/trydo/assets/images/portfolio/portfolio-big-02.jpg" alt="About Images"/>
                                    <a className="video-popup position-top-center black-color play__btn size-medium" href="https://www.youtube.com/watch?v=ctsT5Y-InqE&amp;ab_channel=Rainbow-Themes"><span className="play-icon"></span></a>
                                </div>
                            </div>
                            
    
                            
                            <div className="col-lg-4 col-md-6 col-12 mt_sm--30 mt_md--30">
                                <div className="thumbnail position-relative">
                                    <img className="w-100" src="https://rainbowit.net/html/trydo/assets/images/portfolio/portfolio-big-03.jpg" alt="About Images"/>
                                    <a className="video-popup position-top-center black-color play__btn size-medium" href="https://www.youtube.com/watch?v=ctsT5Y-InqE&amp;ab_channel=Rainbow-Themes"><span className="play-icon"></span></a>
                                </div>
                            </div>
                            
    
                        </div>
                    </div>
                </div>

            
            <div className="rn-gallery-area rn-section-gap bg_color--1 line-separator">
                <div className="container">
                    <div className="gallery-wrapper gallery-grid row mt_dec--60" id="animated-thumbnials">

                        
                        <a className="item-portfolio-static gallery col-lg-6 col-md-6" href="assets/images/portfolio/portfolio-1.jpg">
                            <div className="portfolio-static">
                                <div className="thumbnail-inner">
                                    <div className="thumbnail">
                                        <img src="assets/images/portfolio/portfolio-1.jpg" alt="Portfolio Images"/>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <p>Website Development</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        

                        
                        <a className="item-portfolio-static gallery col-lg-6 col-md-6" href="assets/images/portfolio/portfolio-2.jpg">
                            <div className="portfolio-static">
                                <div className="thumbnail-inner">
                                    <div className="thumbnail">
                                        <img src="assets/images/portfolio/portfolio-2.jpg" alt="Portfolio Images"/>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <p>Website Development</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </a>
                        

                        
                        <a className="item-portfolio-static gallery col-lg-6 col-md-6" href="assets/images/portfolio/portfolio-3.jpg">
                            <div className="portfolio-static">
                                <div className="thumbnail-inner">
                                    <div className="thumbnail">
                                        <img src="assets/images/portfolio/portfolio-3.jpg" alt="Portfolio Images"/>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <p>Website Development</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </a>
                        

                        
                        <a className="item-portfolio-static gallery col-lg-6 col-md-6" href="assets/images/portfolio/portfolio-4.jpg">
                            <div className="portfolio-static">
                                <div className="thumbnail-inner">
                                    <div className="thumbnail">
                                        <img src="assets/images/portfolio/portfolio-4.jpg" alt="Portfolio Images"/>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <p>Website Development</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </a>
                        

                        
                        <a className="item-portfolio-static gallery col-lg-6 col-md-6" href="assets/images/portfolio/portfolio-5.jpg">
                            <div className="portfolio-static">
                                <div className="thumbnail-inner">
                                    <div className="thumbnail">
                                        <img src="assets/images/portfolio/portfolio-5.jpg" alt="Portfolio Images"/>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <p>App Development</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </a>
                        

                        
                        <a className="item-portfolio-static gallery col-lg-6 col-md-6" href="assets/images/portfolio/portfolio-6.png">
                            <div className="portfolio-static">
                                <div className="thumbnail-inner">
                                    <div className="thumbnail">
                                        <img src="assets/images/portfolio/portfolio-6.png" alt="Portfolio Images"/>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="inner">
                                        <p>Website Development</p>
                                        
                                    </div>
                                </div>
                            </div>
                        </a>
                                                    


                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                        <div className="view-more-btn mt--60 mt_sm--30 text-center">
                            <a className="rn-button-style--2 btn_solid" target="_blank" href="gallery.html">View More Projects</a>
                            <a className="rn-button-style--2 btn_solid" target="_blank" href="https://gitlab.com/piyushprajapati/myportfolio">View More(Github Link)</a>
                        </div>
                        </div>
                        </div>
                </div>
            </div>
            
               </div>
            </div>
             

        
        <div className="rn-contact-area rn-section-gap bg_color--1" id="contact">
                <div className="contact-form--1">
                    <div className="container">
                        <div className="row row--35 align-items-start">
                            <div className="col-lg-6 order-2 order-lg-1">
                                <div className="section-title text-left mb--50 mb_sm--30 mb_md--30">
                                    <h2 className="title">Contact Me.</h2>
                                    <p className="description">I am available for Full-Stack Development work. Connect with me via
                                        phone:
                                        <a href="tel:+919824827317">98248 27317</a> or <a href="tel:+918200432810">82004 32810</a> or email:
                                        <a href="mailto:prajapati.piyush16@gmail.com"> prajapati.piyush16@gmail.com</a> </p>
                                </div>
                                <div className="form-wrapper">
                                    <form action="mail.php" method="POST">
                                        <label htmlFor="item01">
                                            <input type="text" name="name" id="item01" placeholder="Your Name *" />
                                        </label>

                                        <label htmlFor="item02">
                                            <input type="text" name="email" id="item02" placeholder="Your email *"/>
                                        </label>

                                        <label htmlFor="item03">
                                            <input type="text" name="subject" id="item03" placeholder="Write a Subject"/>
                                        </label>
                                        <label htmlFor="item04">
                                            <textarea id="item04" name="message" placeholder="Your Message"></textarea>
                                        </label>
                                        <button className="rn-button-style--2 btn_solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit</button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2">
                                <div className="thumbnail mb_md--30 mb_sm--30">
                                    <img src="assets/images/about/about-piyush.png" width="600px" height="600px" alt="trydo" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
  </>);
};

export default App;
