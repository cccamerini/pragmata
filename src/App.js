import React, { Component } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import './App.css';
import './bootstrap.min.css';
import Main from './main/main';
import Logic from './pages/Logic';
import TopBar from './topbar/topbar';
import Amtr from './pages/automatrix';
import Matr from './pages/am';
import Essay1 from './pages/essay1';
import Essay2 from './pages/essay2';
import Essay3 from './pages/essay3';
import Essay4 from './pages/essay4';
import Tech1 from './pages/tech1';
import Drw from './pages/drw';
import Drw2 from './pages/drw2';
import Drw3 from './pages/drw3';
import Drw4 from './pages/drw4';
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

// const Breadcrumbs = () => {
  
//   const breadcrumbs = useBreadcrumbs();

//   return (
//     <React.Fragment>
//       {breadcrumbs.map(({ breadcrumb }) => <span className='crumb'>{breadcrumb} </span>)} 
//     </React.Fragment>
//   );
// };

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




// function matr(props) {


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


      
      <div className="col-md-3 content main fnt1 alleft">
       
        &bull;&nbsp;<a href="/">home</a>
        <br />
        <br />
        {/* &bull;&nbsp;<a href="/logic">{t('log')}</a> */}
        <u><b>portfolio</b></u>
        <br />
        {/* &bull;&nbsp;{t('ml')}
        <br />
        &nbsp;&nbsp;&bull;&nbsp;<a href="/automatrix">AutoMatrix</a>
        <br />
        <br /> */}
        &bull;&nbsp;{t('wri')}
        <br />
        &nbsp;&nbsp;&bull;&nbsp;{t('acad')}
        <br />
        &nbsp;&nbsp;&bull;&nbsp;<a href="/essay1">{t('essay1.title')}</a>
        <br />
        &nbsp;&nbsp;&bull;&nbsp;<a href="/essay2">{t('essay2.title')}</a>
        <br />
        &nbsp;&nbsp;&bull;&nbsp;<a href="/essay3">{t('essay3.title')}</a>
        <br />
        &nbsp;&nbsp;&bull;&nbsp;<a href="/essay4">{t('essay4.title')}</a>
        <br />
        <br />
        &nbsp;&nbsp;&bull;&nbsp;{t('techa')}
        <br />
        &nbsp;&nbsp;&bull;&nbsp;<a href="/tech1">{t('tech1.title')}</a>
        <br />
        <br />
        &bull;&nbsp;{t('drw')}
        <br />
        &nbsp;&nbsp;&bull;&nbsp;<a href="/drw">1</a>
        <br />
        &nbsp;&nbsp;&bull;&nbsp;<a href="/drw2">2</a>
        <br />
        &nbsp;&nbsp;&bull;&nbsp;<a href="/drw3">3</a>
        <br />
        &nbsp;&nbsp;&bull;&nbsp;<a href="/drw4">3</a>
        <br />
      </div>

      <div className="col-md-8 alcenter main fnt1 " >
        <Router>
        {/* <Breadcrumbs /> */}
        {/* <Link to="/"></Link>*/}
        {/* <Link to="/Logic">{t('log')}</Link>  */}
          <div >
            <Routes>
              <Route exact path='/' element={< Main />}></Route>
              <Route  path='/logic' element={< Logic />}></Route>
              <Route  path='/am' element={< Matr />}></Route>
              <Route  path='/automatrix' element={< Amtr />}></Route>
              <Route  path='/essay1' element={< Essay1 />}></Route>
              <Route  path='/essay2' element={< Essay2 />}></Route>
              <Route  path='/essay3' element={< Essay3 />}></Route>
              <Route  path='/essay4' element={< Essay4 />}></Route>
              <Route  path='/tech1' element={< Tech1 />}></Route>
              <Route  path='/drw' element={< Drw />}></Route>
              <Route  path='/drw2' element={< Drw2 />}></Route>
              <Route  path='/drw3' element={< Drw3 />}></Route>
              <Route  path='/drw4' element={< Drw4 />}></Route>
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
