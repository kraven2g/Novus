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

function desenc(){
  var msg = document.getElementById('txt2').value;
  var s = msg.split("");
  var len = s.length;
  var reversed = '';
  var alg,hex;
  var uni;


  for (var i = msg.length - 1; i >= 0; i--) {
                reversed += uni[i];
            }
            
  document.getElementById('res2').innerHTML = reversed;

}
