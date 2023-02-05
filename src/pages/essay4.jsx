import React from 'react'
// import ScriptTag from 'react-script-tag';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import './am.css';
import '../bootstrap.min.css';
import '../App.css';

export default function Essay4() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <h2>{t('essay4.title')}</h2>
            <h4>por<img className='a1' src={require("../img/name.gif")} style={{ width: 190 }} alt="" /></h4>
            <h6>18/11/2022&nbsp;<span className='padright20'>~800 {t('words')}</span><img className='a1' src={require("../img/5min2.gif")} style={{ width: 20 }} alt="" /> <span className='padright20'>6min {t('rdtime')}</span><span className='padleft10'><a href="#av">avaliação do professor</a></span></h6>
            <hr />
            <p>{t('essay4.p1')}</p>
            <p>{t('essay4.p2')}</p>
            <p>{t('essay4.p3')}</p>
            <p>{t('essay4.p4')}</p>
            <p>{t('essay4.p5')}</p>
            <p>{t('essay4.p6')}</p>
            <p>{t('essay4.p7')}</p>
            <p>{t('essay4.p8')}</p>
            <p>{t('essay4.p9')}</p>
            <p>{t('essay4.p10')}</p>
            <p>{t('essay4.p11')}</p>
            <p>{t('essay4.p12')}</p>
            <p>{t('essay4.p13')}</p>
            <p>{t('essay4.p14')}</p>
            
            <br />
            <p><u>Bibliografia</u></p>
            <p>Gordon, Bett J. et al Anatomy and physiology: Houston, Texas. p. 9. (2017)</p>
            <p>Darwin, Charles. On the Origin Of Species: Natural History Museum (2019)</p>
            <p>Dawkins, Richard. The Selfish Gene: Oxford University Press, USA; 4th ed. (2016)</p>
            <p>Damasio, Antonio. The Strange Order Of Things: Life, Feeling and the Making of Cul-tures. Robinson (2021)</p>
            <p>Kierkegaard, Søren. Concluding Unscientific Postscript to the Philosophical Crumbs. Cambridge University Press (2009)</p>
            <p>Hume, David. Of the Standard of Taste. (1757)</p>
            <p>Kant, Immanuel. Critique of the Power of Judgment (1790)</p>
            <br />
            <br />
            Avaliação do professor
            <p id="av">
            <img src={require("../img/evalM5.png")}  alt="" />
            </p>

        </>
    );
}

    