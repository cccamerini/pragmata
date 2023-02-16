import React from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
// import type { ReactTabsFunctionComponent, TabProps } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import '../bootstrap.min.css';
import '../App.css';
import "./main.css";



export default function Main() {
const { t, i18n } = useTranslation();
  return (
    <>
    <div className='nme'>Christian Camerini &nbsp;<span className='fs12'>BEng<span className='itl'> (Hons)</span> University of Greenwich, 2004</span></div>
    {/* <span className='sp'>{t('skilleng')}</span><span className='sp'>{t('skillfstack')}</span> */}
    <div>
    <Tabs defaultIndex={0} onSelect={(index) => {var tbs = document.getElementsByClassName('tabt'); for (var i=0; i< tbs.length; i++) {if (i==index) { tbs[i].classList.add('fntbold'); tbs[i].classList.remove('fntnormal');} else {tbs[i].classList.add('fntnormal'); tbs[i].classList.remove('fntbold');} }}}>
      <TabList className="table">
        <Tab className=" tabt fntbold">{t('skillset')}</Tab>
        <Tab className=" tabt">ss</Tab>
      </TabList>
      <TabPanel className="tabp">
        
        <div className='dvx'>
          {t('skilleng')}
        </div>
        <div className='dvx'>
          {t('skillfstack')}
        </div>
        <div className='dvx'>
          {t('skilldig')}
        </div>
        <div className='dvx'>
          {t('skillalg')}
        </div>
        <div className='dvx'>
          {t('skilldatasc')}
        </div>
        <div className='dvx'>
          {t('skilliot')}
        </div>
        <div className='dvx'>
          {t('skillmathfin')}
        </div>
        <div className='dvx'>
          {t('skillacwri')}
        </div>
        <div className='dvx'>
          {t('skilltechwri')}
        </div>
      </TabPanel>
      <TabPanel className="tabp">
            adsa7
            <br />
            dscavs

      </TabPanel>
    </Tabs>
      
      {/* <div className='dvx'>
        {t('drw')}
      </div> */}
      {/* <div className='dvx'>
        {t('drw2')}
      </div> */}
    </div>
    
    
    </>
  )
}
