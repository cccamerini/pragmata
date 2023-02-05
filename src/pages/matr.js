
//  matrix operations library


// multiply two vectors into result (i x j)
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

  // sum two matrices into res[][]
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


  // multiply vector v1 by matrix m1 into res[]
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


  