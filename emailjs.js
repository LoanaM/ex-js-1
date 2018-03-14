function in_array(mail, a){
    var mail = prompt ("Scrivi la tua email");
    for(var i = 0; i < a.length; i++) {
      if(a[i] == mail) return true;
    }
    return false;
  }

  ggg = new Array("io@gmail", "tu@libero", "noi@hotmail", "voi@gmail", "loro@alice");

  if(in_array('', ggg)) {
    document.write('Mail valida');
  }else{
    alert('Accesso negato');
  }
