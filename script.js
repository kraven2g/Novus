function enc(alg) {
  var msg = document.getElementById('txt1').value;
  var s = msg.split("");
  var len = s.length;
  var reversed = '';
  var alg,hex;
  var uni;


  for (var i = 0; i < len; i++) {
    if(s[i] == 'a'){
      s[i] = 0;
      alg = (s[i] + 19) * 3301;
      hex = alg.toString(16);
      s[i] = hex;
    }
    if(s[i] == 'b'){
      s[i] = 1;
      alg = (s[i] + 19) * 3301;
      hex = alg.toString(16);
      s[i] = hex;
    }

  if(s[i] == 'c'){
    s[i] = 2;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'd'){
    s[i] = 3;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'e'){
    s[i] = 4;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'f'){
    s[i] = 5;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'g'){
    s[i] = 6;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'h'){
    s[i] = 7;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'i'){
    s[i] = 8;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'j'){
    s[i] = 9;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'k'){
    s[i] = 10;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'l'){
    s[i] = 11;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'm'){
    s[i] = 12;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'n'){
    s[i] = 13;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'o'){
    s[i] = 14;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'p'){
    s[i] = 15;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'q'){
    s[i] = 16;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'r'){
    s[i] = 17;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 's'){
    s[i] = 18;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 't'){
    s[i] = 19;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'u'){
    s[i] = 20;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'v'){
    s[i] = 21;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'w'){
    s[i] = 22;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'x'){
    s[i] = 23;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'y'){
    s[i] = 24;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == 'z'){
    s[i] = 25;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == '0'){
    s[i] = 26;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == '1'){
    s[i] = 27;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == '2'){
    s[i] = 28;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == '3'){
    s[i] = 29;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == '4'){
    s[i] = 30;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == '5'){
    s[i] = 31;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == '6'){
    s[i] = 32;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == '7'){
    s[i] = 33;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == '8'){
    s[i] = 34;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;
  }
  if(s[i] == '9'){
    s[i] = 35;
    alg = (s[i] + 19) * 3301;
    hex = alg.toString(16);
    s[i] = hex;

  }

}

  uni = s.join();

  for (var i = uni.length - 1; i >= 0; i--) {
                reversed += uni[i];
            }
document.getElementById('res').innerHTML = reversed;

}



function desenc(alg) {
  var d = document.getElementById('txt2').value;
  var s = d.split(",");
  var len = s.length;
  var reversed = '';
  var uni;


          
 for (var i = 0; i < len; i++) {
    if(s[i] == 'ff4f'){
      s[i] = 'a';
    }
    if(s[i] == '4e101'){
      s[i] = 'b';
    }

  if(s[i] == '9ce01'){
    s[i] = 'c';
  }
  if(s[i] == 'eab11'){
    s[i] = 'd';
  }
  if(s[i] == '39821'){
    s[i] = 'e';
  }
  if(s[i] == '87531'){
    s[i] = 'f';
  }
  if(s[i] == 'd5241'){
    s[i] = 'g';
  }
  if(s[i] == '24f41'){
    s[i] = 'h';
  }
  if(s[i] == '72c51'){
    s[i] = 'i'
  }
  if(s[i] == 'c0961'){
    s[i] = 'j';
  }
  if(s[i] == '1f571'){
    s[i] = 'k';
  }
  if(s[i] == '6d281'){
    s[i] = 'l';
  }
  if(s[i] == 'bbf81'){
    s[i] = 'm';
  }
  if(s[i] == '0ac91'){
    s[i] = 'n';
  }
  if(s[i] == '589a1'){
    s[i] = 'o';
  }
  if(s[i] == 'a66b1'){
    s[i] = 'p';
  }
  if(s[i] == 'f43c1'){
    s[i] = 'q';
  }
  if(s[i] == '430d1'){
    s[i] = 'r';
  }
  if(s[i] == '91dd1'){
    s[i] = 's';
  }
  if(s[i] == 'ef9e1'){
    s[i] = 't';
  }
  if(s[i] == '3e6f1'){
    s[i] = 'u';
  }
  if(s[i] == '8c302'){
    s[i] = 'v';
  }
  if(s[i] == 'da012'){
    s[i] = 'w';
  }
  if(s[i] == '29d12'){
    s[i] = 'x';
  }
  if(s[i] == '77a22'){
    s[i] = 'y';
  }
  if(s[i] == 'c5732'){
    s[i] = 'z';
  }
  if(s[i] == '14442'){
    s[i] = '0';
  }
  if(s[i] == '62152'){
    s[i] = '1';
  }
  if(s[i] == 'b0e52'){
    s[i] = '2';
  }
  if(s[i] == '0fa62'){
    s[i] = '3';
  }
  if(s[i] == '5d772'){
    s[i] = '4';
  }
  if(s[i] == 'ab482'){
    s[i] = '5';
  }
  if(s[i] == 'f9192'){
    s[i] = '6';
  }
  if(s[i] == '48e92'){
    s[i] = '7';
  }
  if(s[i] == '96ba2'){
    s[i] = '8';
  }
  if(s[i] == 'e48b2'){
    s[i] = '9';

  }

}

    uni = s.join();

  for (var i = uni.length - 1; i >= 0; i--) {
                reversed += uni[i];
            }

  

document.getElementById('res2').innerHTML = reversed;


          }
