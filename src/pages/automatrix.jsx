import React from 'react'
// import ScriptTag from 'react-script-tag';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import './am.css';
import '../bootstrap.min.css';
import '../App.css';
import '../main//main.css';

export default function Amtr() {
    // const matrjs = props => (
        // <ScriptTag type="text/javascript" src="./matr.js" />
        // )
    const { t, i18n } = useTranslation();
    return (
    
        <>
        {/* <ScriptTag type="text/javascript" src="matr.js" /> */}
        <h3>{t('autom.title')}</h3>
        <Tabs defaultIndex={0} onSelect={(index) => {var tbs = document.getElementsByClassName('tabt'); for (var i=0; i< tbs.length; i++) {if (i==index) { tbs[i].classList.add('fntbold'); tbs[i].classList.remove('fntnormal');} else {tbs[i].classList.add('fntnormal'); tbs[i].classList.remove('fntbold');} }}}>
      <TabList className="table">
        <Tab className=" tabt fntbold">{t('theory')}</Tab>
        <Tab className=" tabt">{t('autom.t1')}</Tab>
        <Tab className=" tabt">{t('autom.t2')}</Tab>
      </TabList>
      <TabPanel className="tabp">
        <div className='dvx'>
          {t('autom.p1')}
        </div>
        <div className='dvx'>
          {t('autom.p4')}
        </div>
        <div className='dvx'>
          {t('autom.p7')}
        </div>
        <div className='dvx'>
          {t('autom.p8')}
        </div>
        <div className='dvx'></div>
            <img src={require("../img/automA.png")} style={{width: 600}} alt="" /><br /><br />
            <div className='td'> <img src={require("../img/automB.png")} style={{width: 350}} alt="" /></div>
            <div className='td dvx'><span>{t('autom.p2')}<br />{t('autom.p3')}</span></div>
           
    
       {/*  <div className='dvx'>
          {t('skilldatasc')}
        </div> */}
      </TabPanel>
      <TabPanel className="tabp">
        <iframe src="matrix5.html" id="ifr1" className='ifr'></iframe> 
      </TabPanel>
      <TabPanel className="tabp">
          <div className=' table'>
        
            <div className='tr'>
                <div className=' dvx'>
                 
                </div>
            </div>
            <div className='tr'>
                <div className='td w160'  >
                <canvas id="mainc" className='canvas' />
                </div>
                <div className='td tst'>
                    <button className='btn btn-primary btn-sm' onClick={ () => { go(1); }} >imagem 1</button>
                    &nbsp;
                    <button className='btn btn-primary btn-sm' onClick={ () => { go(0); }} >imagem 2</button>
                    &nbsp;
                    <button className='btn btn-primary btn-sm' onClick={ () => { grayscale(); }} >grayscale</button>
                    &nbsp;
                    <button className='btn btn-primary btn-sm' onClick={ () => { bw(); }} >bw</button>
                    &nbsp;
                    <button className='btn btn-primary btn-sm' onClick={ () => { mem(); }} >m</button>
                    &nbsp;
                    <button className='btn btn-primary btn-sm' onClick={ () => { noise(); }} >n</button>
                    &nbsp;
                    <button className='btn btn-primary btn-sm' onClick={ () => { plot(); }} >p</button>
                    &nbsp;
                    <button className='btn btn-primary btn-sm' onClick={ () => { memclear(); }} >c</button>

                </div>
                
            </div>
            
        </div>
      </TabPanel>
      </Tabs>
      <br />

        <div></div>
        
          
        </>
    )

    // window.addEventListener('load', this.init());
    const cnv = document.getElementById('mainc');
    const ctx = cnv.getContext("2d");
    // const { t, i18n } = useTranslation();
    
    const img = new Image();    
    var jimg;
    var m;
	var jch;// = false;
    // 
    // function init() {
    //     cnv.width = 150;
    //     cnv.height = 200;
    //     jch = false;
    //     // alert('d');
    // }
    // var pic = [];
    // window.setTimeout('init()', 1000);
    function httpGetAsync(theUrl, callback)
    {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function() { 
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
    }


    function cb1(_arg) {
        // alert(_arg);
        const cnv = document.getElementById('mainc');
        const ctx = cnv.getContext("2d");
        cnv.width = 100;
        cnv.height = 133;
		var image = new Image();
		image.onload = function() {
			if (jch) 
				ctx.drawImage(image, 0, 0);
			jch = false;
		};
		image.src = _arg;
    }
    
    function go(_arg) {
		jch = true;
        var s;
        if (_arg === 1)
            s = '../hes64.txt';
        else
            s = '../shes64.txt';
        
		httpGetAsync(s, cb1); 
    }
    
    function bw()  {
        const cnv = document.getElementById('mainc');
        const ctx = cnv.getContext("2d");
        var img = new Image();
		var thr = 150;
		ctx.drawImage(img, 0, 0);
		const imageData = ctx.getImageData(0, 0, cnv.width, cnv.height);
		const data = imageData.data;
        console.log('data: ' + data);
		for (let i = 0; i < data.length; i += 4) {
			const avg = data[i];
			if (avg < thr) {
				data[i] = 0; // red
				data[i + 1] = 0; // green
				data[i + 2] = 0; // blue
                data[i + 3] = 255;
			}
			else {
				data[i] = 255; // red
				data[i + 1] = 255; // green
				data[i + 2] = 255; // blue
                data[i + 3] = 255;
			}
			
		}
		ctx.putImageData(imageData, 0, 0);
	}
    
    function grayscale()  {
        var img = new Image();
        const cnv = document.getElementById('mainc');
        const ctx = cnv.getContext("2d");
		ctx.drawImage(img, 0, 0);
		const imageData = ctx.getImageData(0, 0, cnv.width, cnv.height);
		const data = imageData.data;
        console.log(data.length);
        console.log(cnv.width + ' ' + cnv.height);
        // return;
		for (let i = 0; i < data.length; i += 4) {
			const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
			data[i] = avg; // red
			data[i + 1] = avg; // green
			data[i + 2] = avg; // blue
            data[i + 3] = 255;
			//console.log(avg)
		}
		ctx.putImageData(imageData, 0, 0);
	}
    
    
function mtx1xm(v1, m1) {
    var res = [];
    for (var i = 0; i < v1.length; i++) {
        res[i] = 0;
        for (var j = 0; j < m1[i].length; j++) {
            res[i] += v1[j] * m1[j][i];
        }
    }
    
    return res;
  }
  
  function mtx1xs(m1, m2) {
    var res = [];
    for (var i = 0; i < m1.length; i++) {
        res[i] = [];
        for (var j = 0; j < m1[i].length; j++) {
            res[i][j] = m1[i][j] + m2[i][j];
        }
    }
    // console.log(res);
    return res;
  }
  
  function mtx1x1(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        var mult = 0;
        for (var j = 0; j < m2.length; j++) {
            mult = m1[i] * m2[j];
            result[i][j] = mult;
            // console.log(sum);
        }
    }
    return result;
  }
  
  function mem() {
    var img = new Image();
    const cnv = document.getElementById('mainc');
    const ctx = cnv.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, cnv.width, cnv.height);
    const data = imageData.data;
    // let data = [];
    // for (let i = 0; i < 400; i++) {
    //     data[i] = randomInteger(0, 1) > 0 ? 0 : 255;
    // }

    console.log(data.length);
    console.log(data);
    console.log(cnv.width + ' ' + cnv.height);
    // return;
    let vec = [];
    let c = 0;
    for (let i = 0; i < data.length; i+=4) {
        vec[c] = data[i] === 255 ? -1 : 1;
        c++;
    }
    let t = mtx1x1(vec, vec);
    console.log(t);
    if (m == null) 
        m = t;
    else 
        m = mtx1xs(t, m);
    console.log(m);
  }

  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;//arr[arr.lenght - 1];
  }

  function noise() {
    var img = new Image();
    const cnv = document.getElementById('mainc');
    const ctx = cnv.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, cnv.width, cnv.height);
    const data = imageData.data;
    let muts = parseInt(m.length * .1);
    let mtctr = 0;
    let v = [];
    let pt = 0;
    for (var i = 0; i < muts; i++) {
        while (true) {
            pt = randomInteger(0, data.length - 1);
            if (pt == 0 || ((pt) % 4 == 0))
                break;
        }
        let c = data[pt] == 255 ? 0 : 255;
        data[pt] = c;
        data[pt + 1] = c;
        data[pt + 2] = c;
        data[pt + 3] = 255;
    
    }
    ctx.putImageData(imageData, 0, 0);
  }
  
  function plot() {
    var img = new Image();
    const cnv = document.getElementById('mainc');
    const ctx = cnv.getContext("2d");
    ctx.drawImage(img, 0, 0);
    const imageData = ctx.getImageData(0, 0, cnv.width, cnv.height);
    const data = imageData.data;
    let v = [];
    let c = 0;
    for (var i = 0; i < data.length; i+=4) {
        
        v[c] = data[i];
        c++;
        
    }
    console.log(v);
    let v2 = mtx1xm(v, m);
    console.log(v2);
    c = 0;
    for (var i = 0; i < data.length; i+=4) {
        data[i] = v2[c] < 0 ? 0 : 255;
        data[i + 1] = data[i];
        data[i + 2] = data[i];
        data[i + 3] = 255;
        c++;
    }
    ctx.putImageData(imageData, 0, 0);
  }

  function memclear() {
    m = [];
  }

}
