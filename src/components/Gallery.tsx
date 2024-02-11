import React,{useState} from 'react';
// import 'react-circular-progressbar/dist/styles.css';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';


interface AppProps {}
interface AppState {
//   settings: LightGallerySettings;
}


const Gallery: React.FunctionComponent<AppState> = (props) => {
    const [isOpen, setOpen] = useState(false)

    const openLink = (url:string) => {
        let a= document.createElement('a');
        a.target= '_blank';
        a.href= url;
        a.click();
    }

  return (<>
  
  <div className="page-wrapper">
  <div className="rn-slider-area" id="home">
                
                <div className="bg-dark" style={{padding:"55px"}}>
                                        
                </div>
            </div>
    {/* <div className="p-5">
  <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80">
                    <img alt="img1" src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80" />
                </a> &nbsp;
                <a href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80">
                    <img alt="img2" src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80" />
                </a>
            </LightGallery></div> */}


<div className="rn-portfolio-area rn-section-gap bg_color--1">
            <div className="portfolio-sacousel-inner pb--30">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--20 mb_sm--0 mb_md--0">
                                <h2 className="title">My Portfolio</h2>
                                <p>My most successful projects are listed below</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="rn-video-popup-area rn-section-gap bg_color--1">
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="thumbnail position-relative">
                              
                                    <img className="w-100" src="./assets/images/portfolio/thumbnail/hiforme.png" alt="About Images"/>
                                    {/* <a href='https://www.youtube.com/playlist?list=PLkaTl15B255crc2ojToWqWLyCrCg63MyE' target="_blank" className="video-popup position-top-center play__btn size-medium"><span className="play-icon"></span></a> */}
                                    {/* <button className="video-popup position-top-center play__btn size-medium"  onClick={()=> setOpen(true)}><span className="play-icon"></span></button> */}
                                </div>
                                <div className="content pt-4">
                                    <div className="inner">
                                        <h5 style={{cursor:"pointer",color:"#0c2164;"}} className="mb-1" onClick={()=>openLink("https://hiforme.com/")}><u>Hiforme (Health Insurance Services)</u></h5>
                                        <h6>(React, Redux, Mysql, Express Js Api)</h6>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="thumbnail position-relative">
                              
                                    <img className="w-100" src="./assets/images/portfolio/thumbnail/didbizAdmin.png" alt="About Images"/>                                                             
                                </div>
                                <div className="content pt-4">
                                    <div className="inner">
                                    <h5 style={{cursor:"pointer",color:"#0c2164;"}} className="mb-1" onClick={()=>openLink("https://admin.didbiz.com/")}><u>Didbiz</u></h5>
                                        <h6>(Mysql, Express js, React, Node js)</h6>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="thumbnail position-relative">
                              
                                    <img className="w-100" src="./assets/images/portfolio/thumbnail/carandbid.png" alt="About Images"/>
                                                                   
                                </div>
                                <div className="content pt-4">
                                    <div className="inner">
                                    <h5 style={{cursor:"pointer",color:"#0c2164;"}} className="mb-1" ><u>Modesandmiles</u></h5>
                                        <h6>(MERN: Mongo, Express js, React, Node js)</h6>
                                    </div>
                                </div>
                            </div>
                            
                            
    
                        </div>
                    </div>
                </div>

                    
           
               </div>
            </div>
      </div>
            
  </>);
};

export default Gallery;
