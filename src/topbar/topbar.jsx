import React from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
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
    const { t, i18n } = useTranslation();
  return (
    <>
    <div className='top'>
        <div className="row">
            <div className="col-md-4" >
                <h2>&nbsp;Pragmata</h2>
                
            </div>
            <div className="col-md-4" style={{ textAlign: 'center'}} title={t('ukr')}  >
                <img className='a1' src={require("../img/ukraine.png")}alt="" />
                <br />
                <img src={require("../img/freeUkraine.png")} style={{width: 110}} alt="" />
            </div>
            <div className="col-md-4 alright"  >
                <h2>πράγματα</h2>
                <span className='a2'>{t('under')}</span> 
                &nbsp;
                <img className='a3' src={require("../img/react.gif")}alt="" />
                <img className='a3' src={require("../img/linux.gif")}alt="" />
            </div>
        </div>
    </div>
    
    
  </>
  );
}



// TopBar;