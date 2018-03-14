function in_array(v, a){
    var v = prompt ("Scrivi la tua email");
    for(var i = 0; i < a.length; i++) {
      if(a[i] == v) return true;
    }
    return false;
  }

  ggg = new Array("io@gmail", "tu@libero", "noi@hotmail", "voi@gmail", "loro@alice");

  if(in_array('', ggg)) {
    alert('Mail valida');
  }else{
    alert('Accesso negato');
  }
