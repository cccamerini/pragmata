import React from 'react'
// import ScriptTag from 'react-script-tag';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import './am.css';
import '../bootstrap.min.css';
import '../App.css';

export default function Essay2() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <h2>{t('essay2.title')}</h2>
            <h4>{t('by')}<img className='a1' src={require("../img/name.gif")} style={{ width: 190 }} alt="" /></h4>
            <h6>28/10/2022&nbsp;<span className='padright20'>~500 {t('words')}</span><img className='a1' src={require("../img/5min2.gif")} style={{ width: 20 }} alt="" /> <span className='padright20'>3min {t('rdtime')}</span><span className='padleft10'><a href="#av">avaliação do professor</a></span></h6>
            <hr />
            <p>{t('essay2.p1')}</p>
            <p>{t('essay2.p2')}</p>
            <p>{t('essay2.p3')}</p>
            
            <br />
            <p><u>Bibliografia</u></p>
            <p>Capra, F. &nbsp;The Tao of Physics: 4 ed. London (Inglaterra): Flamingo, 1983</p>
            <p>Capra. F. &nbsp;The Turning Point: Bantam, 1984</p>
            <p>Roggero, P. &nbsp;La pensée complexe d'Edgar Morin: L'université Toulouse-Capitole: Paris, 2018 </p>
            <p>Dennett, Daniel C. &nbsp;Consciousness Explained: 9. ed. Middlesex (Inglaterra): Penguin, 1993</p>
            <br />
            <br />
            Avaliação do professor
            <p id="av">
            <img src={require("../img/evalM2.png")}  alt="" />
            </p>

        </>
    );
}

    