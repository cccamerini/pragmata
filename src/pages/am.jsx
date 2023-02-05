import React from 'react'
import './am.css';
import {Pixel} from './pixel.js'
// import './chars';
import '../bootstrap.min.css';
import '../App.css';
// import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';
// import { useRouteLoaderData } from 'react-router-dom';

// const cha = [-1,1,1,1,-1,
//    1,-1,-1,-1,1,
//    1,-1,-1,-1,1,
//    1,1,1,1,1,
//    1,-1,-1,-1,1,
//    1,-1,-1,-1,1,
//    ];

export default function Am() {
    
    // const cnv = document.getElementById('mainc');
    // cnv.width = 150;
    // cnv.height = 200;
    // let p = new Pixel(0,0,1);

    const cha = [-1,1,1,1,-1,
                1,-1,-1,-1,1,
                1,-1,-1,-1,1,
                1,1,1,1,1,
                1,-1,-1,-1,1,
                1,-1,-1,-1,1];
    
    const chb = [1,1,1,1,-1,
                1,-1,-1,-1,1,
                1,-1,-1,-1,1,
                1,1,1,1,1,
                1,-1,-1,-1,1,
                1,1,1,1,-1];
    
    const chc = [-1,1,1,1,-1,
                1,-1,-1,-1,1,
                1,-1,-1,-1,-1,
                1,-1,-1,-1,-1,
                1,-1,-1,-1,1,
                -1,1,1,1,-1];

    const ch0 = [-1,1,1,1,-1,
                1,-1,-1,-1,1,
                1,-1,-1,-1,1,
                1,-1,-1,-1,1,
                1,-1,-1,-1,1,
                -1,1,1,1,-1];
    
    const ch1 = [-1,-1,1,-1,-1,
                -1,1,1,-1,-1,
                -1,-1,1,-1,-1,
                -1,-1,1,-1,-1,
                -1,-1,1,-1,-1,
                -1,1,1,1,-1];
    
    let ch2 = [-1,1,1,1,-1,
                1,-1,-1,-1,1,
                -1,-1,-1,1,-1,
                -1,-1,1,-1,-1,
                -1,1,-1,-1,-1,
                1,1,1,1,1];

    const ch3 = [-1,1,1,1,-1,
                1,-1,-1,-1,1,
                -1,-1,-1,1,-1,
                -1,-1,1,1,-1,
                -1,-1,-1,-1,1,
                -1,1,1,1,-1];            
        
   let p = [1,1,1,1,1,
            1,1,1,1,1,
            1,1,1,1,1,
            1,1,1,1,1,
            1,1,1,1,1,
            1,1,1,1,1]; 

   p = ch3;
   //  let p = ch2.slice(0);
    // for (var i = 0; i < p.length; i++) {
    //    p[i] = -1; 
    // }

      function f_a() {
        //  alert('d');
         p = ch2;
         
      }

    let chs = '';
    return (
    <div className="row">
         <div className="col-md-6">
             
            <br />
            <button onClick={ () => { f_a(); }} >A</button>
            <div className='ln'>
            {  
                  
                p.map((el, i) => (
                <><input onChange={() => {if (el === -1) el = 1; else el = -1;}} type="checkbox" checked={ el === -1 ? false : true} />{ (i+1) % 5 === 0 ? (<br />) : null}</>
                ))
                
            }
            </div>
            
            
            
           
         </div>
         <div className="col-md-6">
           

         </div>
        
    </div>
  )
}


  
