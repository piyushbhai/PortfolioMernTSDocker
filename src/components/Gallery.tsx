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

  return (<>
  
  <div className="page-wrapper">
  <div className="rn-slider-area" id="home">
                
                <div className="slide personal-portfolio-slider slider-paralax slider-style-3 dark-slider d-flex align-items-center justify-content-center bg_image bg-dark" style={{padding:"55px"}}>
                                        
                </div>
            </div>
    <div className="p-5">
  <LightGallery
                // onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80">
                    <img alt="img1" src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80" />
                </a> &nbsp;
                <a href="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80">
                    <img alt="img2" src="https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80" />
                </a>
                {/* ... */}
            </LightGallery></div>
      </div>
            
  </>);
};

export default Gallery;
