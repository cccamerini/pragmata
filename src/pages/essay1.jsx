import React from 'react'
// import ScriptTag from 'react-script-tag';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import './am.css';
import '../bootstrap.min.css';
import '../App.css';

export default function Essay1() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <h2>{t('essay1.title')}</h2>
            <h4>{t('essay1.stit')}, {t('by')}<img className='a1' src={require("../img/name.gif")} style={{ width: 190 }} alt="" /></h4>
            <h6></h6>
            <h6>19/10/2022&nbsp;<span className='padright20'>~1500 {t('words')}</span><img className='a1' src={require("../img/10min2.gif")} style={{ width: 20 }} alt="" /> <span className='padright20'>10min {t('rdtime')}</span><span className='padleft10'><a href="#av">avaliação do professor</a></span></h6>
            <hr></hr>
            <p>{t('essay1.p1')}</p>
            <p>{t('essay1.p2')}</p>
            <p>{t('essay1.p3')}</p>
            <p>{t('essay1.p4')}</p>
            <ol>
                <li>{t('essay1.t1')}</li>
                <li>{t('essay1.t2')}</li>
                <li>{t('essay1.t3')}</li>
                <li>{t('essay1.t4')}</li>
                <li>{t('essay1.t5')}</li>
                <li>{t('essay1.t6')}</li>
                <li>{t('essay1.t7')}</li>
                <li>{t('essay1.t8')}</li>
                <li>{t('essay1.t9')}</li>
                <li>{t('essay1.t10')}</li>
                <li>{t('essay1.t11')}</li>
            </ol>
            <p>{t('essay1.p5')}</p>
            <p>{t('essay1.p6')}</p>
            <ul>
                <li>{t('essay1.t12')}</li>
                <li>{t('essay1.t13')}</li>
            </ul>
            <p>{t('essay1.p7')}</p>
            <p>{t('essay1.p8')}</p>
            <p>{t('essay1.p9')}</p>
            <p>{t('essay1.p10')}</p>
            <div style={{ padding: 20}}>
                <img  src={require("../img/risingtide.png")} alt="" />
            </div>
            <p>{t('essay1.p11')}</p>
            <p>{t('essay1.p12')}</p>
            <p>{t('essay1.p13')}</p>
            <p>{t('essay1.p14')}</p>
            <p>{t('essay1.p15')}</p>
            <br />
            <p>[1] Creativity and Philosophy, Mark A. Runco, in Creativity (Second Edition), 2014</p>
            <p>[2] Leggere la complessità, Carlo Grande - Archivio «La Stampa», 14-11-2007, TUTTOSCIENZE, NAZIONALE, p.2 https://innovando.loescher.it/files/7114</p>
            <p>[3] Does the Flap of a Butterfly's Wings in Brazil Set Off a Tornado in Texas?, Edward N Lorenz (1972) MIT https://eapsweb.mit.edu/sites/default/files/Butterfly_1972.pdf</p>
            <p>[4] The Collapse of Complex Societies, Joseph Tainter (1988) Cambridge University Press</p>
            <p>[5] Antropoceno - https://pt.wikipedia.org/wiki/Antropoceno acessado em 19/10/2022</p>
            <p>[6] The Paris Agreement https://www.un.org/en/climatechange/paris-agreement</p>
            <p>[7] World is off track to meet Paris Agreement climate targets (Mundo está fora do caminho para cumprir as metas climáticas do Acordo de Paris) https://unepccc.org/world-is-off-track-to-meet-paris-agreement-climate-targets/#:~:text=%E2%80%9CWe%20are%20still%20significantly%20off,and%20livelihoods%20on%20every%20continent</p>
            <p>[8] O Pensamento Complexo de Edgar Morin, Gian Danton – http://www.mundocultural.com.br/artigos/4/index.asp?cod=4&nome=Gian%20Danton</p>
            <p>[9] Darcy Ribeiro estava certo: educação é o caminho para reduzir a criminalidade, Renan Damasceno em O Estado de Minas (2017)  https://www.em.com.br/app/noticia/politica/2017/01/15/interna_politica,839547/darcy-ribeiro-estava-certo-educacao-e-o-caminho-para-reduzir-crime.shtml</p>
            <br />
            <br />
            Avaliação do professor
            <p id="av">
            <img src={require("../img/evalM1.png")}  alt="" />
            </p>

        </>
    );
}

    