import React from 'react'
// import ScriptTag from 'react-script-tag';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import './am.css';
import '../bootstrap.min.css';
import '../App.css';

export default function Mike200() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <h2>{t('mike200.title')}</h2>
            <h4>{t('by')}<img className='a1' src={require("../img/name.gif")} style={{ width: 190 }} alt="" /></h4>
            <h6>18/02/2023&nbsp;<span className='padright20'>~500 {t('words')}</span><img className='a1' src={require("../img/5min2.gif")} style={{ width: 20 }} alt="" /> <span className='padright20'>5min {t('rdtime')}</span></h6>
            <hr></hr>
            <p>{t('mike500.p1')}</p>
            <p>{t('mike500.p2')}</p>
            <p>{t('mike500.p3')}</p>
            <p>{t('mike500.p4')}</p>
            <p>{t('mike500.p5')}</p>
            <p>{t('mike500.p6')}</p>
            <p>{t('mike500.p7')}</p>
            <p>{t('mike500.p8')}</p>
            <p>{t('mike500.p9')}</p>
            <p>{t('mike500.p10')}</p>

        </>
    );
}

    