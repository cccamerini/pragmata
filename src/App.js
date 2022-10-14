import React, { Component } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import './App.css';
import './bootstrap.min.css';
import Main from './main/main';
import Logic from './pages/Logic';
import TopBar from './topbar/topbar';
import useCollapse from 'react-collapsed';
// import Breadcrumbs from './Breadcrumbs';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import useBreadcrumbs from "use-react-router-breadcrumbs";
// import TestPage from './pages/testpage/testpage';
// import Prisdil from './pages/prisdil';

const Breadcrumbs = () => {
  
  const breadcrumbs = useBreadcrumbs();

  return (
    <React.Fragment>
      {breadcrumbs.map(({ breadcrumb }) => <span className='crumb'>{breadcrumb} </span>)} 
    </React.Fragment>
  );
};

// function Section(props) {
//   const { t } = useTranslation();
//   const config = {
//       defaultExpanded: props.defaultExpanded || false,
//       collapsedHeight: props.collapsedHeight || 0
//   };
//   const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);
// return (
//   <div className="collapsible">
//       <div className="header" {...getToggleProps()}>
//           <div className="title">{t(props.title)}</div>
//           <div className="icon">
//               <i className={'fas fa-chevron-circle-' + (isExpanded ? 'up' : 'down')}></i>
//           </div>
//       </div>
//       <div {...getCollapseProps()}>
//           <div className="content">
//               {t(props.children)}
//           </div>
//       </div>
//   </div>
//   );
// }

function Page() {
  // const breadcrumbs = useBreadcrumbs();
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <>
     
    <div className="row alcenter" style={{ textAlign: 'center'}}>
      <div className='alright '>
        <img className='flags' src={require("./img/br.png")} alt=""  onClick={() => changeLanguage('pt')} />
        &nbsp;
        <img className='flags' src={require("./img/uk.png")} alt=""  onClick={() => changeLanguage('en')} />
        &nbsp;
      </div>


      
      <div className="col-md-2 content main fnt1 alleft">
       
      &bull;&nbsp;<a href="/">home</a>
      <br />
      &bull;&nbsp;<a href="/logic">{t('log')}</a>
      </div>

      <div className="col-md-7 alcenter main fnt1 " >
        <Router>
        <Breadcrumbs />
        {/* <Link to="/"></Link>*/}
        {/* <Link to="/Logic">{t('log')}</Link>  */}
          <div >
            <Routes>
              <Route exact path='/' element={< Main />}></Route>
              <Route  path='/logic' element={< Logic />}></Route>
            </Routes> 
          </div>
      
        </Router>
      </div>
    </div>
  </>
   );
}

class App extends Component {
  render() {
    
    return (
      <>
      {/* <Breadcrumbs /> */}
      
    <TopBar />
    <Page />
    {/* </div> */}
    </>
  );
  }
  }
  


export default App;
