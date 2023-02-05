
var tb;       var m;
var thr;      var vec = []; 
var tds;      var modal;
var slider;   var output;

function init() {
    thr = 120;
    modal = document.getElementById("myModal");
    tb = document.getElementById('dvtb');
    slider = document.getElementById("rng");
    slider.oninput = function() {
      output.innerHTML = this.value;
      thr = parseInt(this.value);
    }
    output = document.getElementById("rngval");
    output.innerHTML = thr; 
    var elms = [];
    for (var h = 0; h < 134; h++) {
        elms[h] = [];
        var tr = document.createElement('div');
        tr.setAttribute('class', 'tr');
        for (var w = 0; w < 100; w++) {
            elms[h][w] = document.createElement('div');
            elms[h][w].setAttribute('class', 'td');
            elms[h][w].innerHTML = '&nbsp;';
            tr.appendChild(elms[h][w]);
        }
        tb.appendChild(tr);
    }
    tds = document.getElementsByClassName('td');
  }

  function wait() {
    modal.style.display = 'block';
  }
  
  function nwait() {
    modal.style.display = 'none';
  }

  function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function img1(_arg) {
  httpGetAsync(_arg, cb1);
}

function cb1(_arg) {
  var ar = _arg.split(';');
  for (var i = 0; i < tds.length - 1; i++) {
    tds[i].style.backgroundColor = '#' + ar[i];
  }
}


function gray() {
    for (var i = 0; i < tds.length; i++) {
      let cl = tds[i].style.backgroundColor;
      tds[i].style.backgroundColor = getgrayhex(cl);
  
    }
  }
  
  function bw() {
    for (var i = 0; i < tds.length; i++) {
      let cl = tds[i].style.backgroundColor;
      let cw = getRGBValues(cl).b;
      if (cw > thr)
        tds[i].style.backgroundColor = '#ffffff';
      else 
        tds[i].style.backgroundColor = '#000000';
    }
  }
  
  function getRGBValues(str) {
    var vals = str.substring(str.indexOf('(') +1, str.length -1).split(', ');
    return {
      'r': vals[0],
      'g': vals[1],
      'b': vals[2]
    };
  }
  
  function getgray(str) {
    var v = getRGBValues(str);
    return ((parseInt(v.r) + parseInt(v.g) + parseInt(v.b))  / 3);
  }
  
  function getgrayhex(str) {
    var vals = str.substring(str.indexOf('(') +1, str.length -1).split(', ');
    let hg = parseInt((parseInt(vals[0]) + parseInt(vals[1]) + parseInt(vals[2]))  / 3).toString(16);
    let r = '#' + hg.toString() + hg.toString() + hg.toString();
    return r;
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
    return res;
  }
  
  function mtx1x1(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        var sum = 0;
        for (var j = 0; j < m2.length; j++) {
            sum = m1[i] * m2[j];
            result[i][j] = sum;
        }
    }
    return result;
  }
  
  function mem() {
    vec = [];
    for (var i = 0; i < tds.length; i++)
        vec[i] = (getRGBValues(tds[i].style.backgroundColor).r == 255) ? -1 : 1;
    if (m == null) {
        m = mtx1x1(vec, vec);
    }
    else {
        m = (mtx1xs((mtx1x1(vec, vec)), m));
    }
    nwait();
  }
  
  function plot() {
      let v = [];
      for (var i = 0; i < tds.length; i++) {
          v[i] = (getRGBValues(tds[i].style.backgroundColor).r.toString() == '255') ? 1 : -1;
      }

      let v2 = mtx1xm(v, m);
      
      grid(v2);
    
      nwait();
  }
  
  function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function noise() {
    let muts = parseInt(tds.length * .1);
    let mtctr = 0;
    let v = [];
    let pt = 0;
    let pt0 = '';
    for (var i = 0; i < muts; i++) {
          pt = randomInteger(0, 13299);
          mtctr++;
          tds[pt].style.backgroundColor = (parseInt(getRGBValues(tds[pt].style.backgroundColor).r) == 255) ? 'black' : 'white';
    }
  }
  
  function grid(v) {
    let str = '';
    let ctr = 0;
    for (var i = 0; i < v.length; i++) {
        let c = (v[i] <= 0) ? '#000000' : '#ffffff'; 
        tds[i].style.backgroundColor = c;
    }
}





