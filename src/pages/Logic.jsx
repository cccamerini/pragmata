import React from 'react'
import '../App.css';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
export default function Logic() {
  const { t, i18n } = useTranslation();
  return (
    <div>
      {/* <Breadcrumbs /> */}
        &bull;<a href="http://paginapessoal.utfpr.edu.br/paulabenevides/raciocinio-logico-quantitativo/raciocinio-logica-quantitativo/" target="_blank">Exercícios resolvidos 12 aulas - material progressivo</a>&nbsp;Paula Francis Benevides - Universidade Tecnológica Federal do Paraná
        <br />
        &bull;<a href="https://sites.millersville.edu/bikenaga/math-proof/truth-tables/truth-tables.html" target="_blank">Truth Tables, Tautologies, and Logical Equivalences</a>&nbsp;Millersville University
        <br />
        &bull;<a href="https://concurseria.com.br/wp-content/uploads/2017/11/L%C3%B3gica-Proposicional.pdf" target="_blank" >Lógica Proposicional</a><div className="pdf"><img style={{ width: 25 }} className="pdf" src={require("../img/pdf4.png")} alt="pdf"/></div>&nbsp;https://concurseria.com.br/
        <br />
        &bull;<a href="https://homepages.dcc.ufmg.br/~loureiro/md/md_LE1_Solucao.pdf" target="_blank">Exercícios resolvidos logica proposicional</a><div className="pdf"><img style={{ width: 25 }} className="pdf" src={require("../img/pdf4.png")} alt="pdf"/></div>&nbsp; Dept Ciencias da Computacao UFMG
        <br />
        &bull;<a href="https://sabermatematica.com.br/exercicios-resolvidos-proposicoes-logicas.html" target="_blank">Exercícios resolvidos: PROPOSIÇÕES LÓGICAS</a>&nbsp;https://sabermatematica.com.br/
        <br />
        &bull;<a href="https://www.ime.usp.br/~slago/ia-2.pdf" target="_blank">Lógica Proposicional</a><div className="pdf"><img style={{ width: 25 }} className="pdf" src={require("../img/pdf4.png")} alt="pdf"/></div>&nbsp;Prof. Dr. Silvio do Lago Pereira USP
        <br />
        &bull;<a href="https://www.facom.ufu.br/~gustavo/Logica/Apostila_LogicaProposicional.pdf" target="_blank">Apostila Lógica Proposicional</a><div className="pdf"><img style={{ width: 25 }} className="pdf" src={require("../img/pdf4.png")} alt="pdf"/></div>&nbsp;Prof. Luiz Gustavo Almeida Martins - Federal Uberlandia
        <br />
        &bull;<a href="https://sigaa.ufpi.br/sigaa/verProducao?idProducao=2997821&key=40323d0ec33bf19495a0bc95e7d2a130" target="_blank">Lógica para a Computação</a>&nbsp;<div className="pdf"><img style={{ width: 25 }} className="pdf" src={require("../img/pdf4.png")} alt="pdf"/></div>&nbsp;Francisco Vieira de Souza - Federal Piauí (142 pag)
        <br />
        &bull;<a href="https://sejatrainee.com.br/testes-de-raciocinio-logico-dos-processos-trainee/" target="_blank">testes de raciocinio logico dos processos trainee</a>&nbsp;https://sejatrainee.com.br/
        <br />
        <br />
        <u>{t('ttgs')}</u>&nbsp;online

    </div>
  )
}
