import React from 'react'
// import ScriptTag from 'react-script-tag';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

import './am.css';
import '../bootstrap.min.css';
import '../App.css';

export default function Essay3() {
    const { t, i18n } = useTranslation();
    return (
        <>
            <h2>{t('essay3.title')}</h2>
            <h4>por<img className='a1' src={require("../img/name.gif")} style={{ width: 190 }} alt="" /></h4>
            <h6>03/11/2022&nbsp;<span className='padright20'>~500 {t('words')}</span><img className='a1' src={require("../img/5min2.gif")} style={{ width: 20 }} alt="" /> <span className='padright20'>4min {t('rdtime')}</span><span className='padleft10'><a href="#av">avaliação do professor</a></span></h6>
            <hr />
            <p>{t('essay3.p1')}</p>
            <p>{t('essay3.p2')}</p>
            <p>{t('essay3.p3')}</p>
            <p>{t('essay3.p4')}</p>
            <p>{t('essay3.p5')}</p>
            <p>{t('essay3.p6')}</p>
            <p>{t('essay3.p7')}</p>
            <p>{t('essay3.p8')}</p>
            
            <br />
            <p><u>Referências</u></p>
            <p>[1] Pilz, L. A. Inteligência Coletiva e Transdisciplinaridade</p>
            <p>[2] Yi, X. et al. Sequencing of 50 Human Exomes Reveals Adaptation to High Altitude (2010) DOI:10.1126/science.1190371</p>
            <p>[3] Zhao, M. et al. Mitochondrial genome evidence reveals successful Late Paleolithic settlement on the Tibetan Plateau (2009) Proceedings of the National Academy of Sciences, 106(50), 21230–21235. doi:10.1073/pnas.0907844106 </p>
            <p>[4] Ilardo, M. A., Moltke, I., Korneliussen, T. S., Cheng, J., Stern, A. J., Racimo, F., … Willerslev, E. (2018). Physiological and Genetic Adaptations to Diving in Sea Nomads. Cell, 173(3), 569–580.e15. doi:10.1016/j.cell.2018.03.054</p>
            <p>[5] Gislén, A., Dacke, M., Kröger, R. H. ., Abrahamsson, M., Nilsson, D.-E., & Warrant, E. J. (2003). Superior Underwater Vision in a Human Population of Sea Gypsies. Current Biology, 13(10), 833–836. doi:10.1016/s0960-9822(03)00290-2</p>
            <p>[6] Nidhi S. Past 5,000 years prolific for changes to human genome (2012) https://www.nature.com/articles/nature.2012.11912</p>
            <br />
            <br />
            Avaliação do professor
            <p id="av">
            <img src={require("../img/evalM3.png")}  alt="" />
            </p>

        </>
    );
}

    