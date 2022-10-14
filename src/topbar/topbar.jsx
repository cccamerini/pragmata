import React from 'react';
// import { useTranslation, withTranslation, Trans } from 'react-i18next';
import './topbar.css';
import '../bootstrap.min.css';
// import Main from '../main/main';
// import '../App';

// function Page() {
//     const { t, i18n } = useTranslation();
  
//     const changeLanguage = (lng) => {
//       i18n.changeLanguage(lng);
//     };
//     return (
//         <div><Main /></div>
//     );
// }

export default function TopBar() {
  return (
    <>
    <div className='top'>
        <div className="row">
            <div className="col-md-4" >
                <h2>&nbsp;Pragmata</h2>
            </div>
            <div className="col-md-4" style={{ textAlign: 'center'}} >
                <img className='a1' src={require("../img/ukraine.png")}  alt="" />
                <br />
                <img src={require("../img/freeUkraine.png")} style={{width: 110}} alt="" />
            </div>
            <div className="col-md-4 alright"  >
                <h2>πράγματα</h2>
            </div>
        </div>
    </div>
    
    
  </>
  );
}



// TopBar;