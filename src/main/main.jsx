import React from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
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
      {t('skillset')}
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
      <div className='dvx'>
        {t('skilltrans')}
      </div>
      
    </div>
    
    
    </>
  )
}
