var validmail = ["io@gmail", "tu@libero", "noi@hotmail", "voi@gmail", "loro@alice"];
var mail = prompt ("Scrivi la tua email");
result = false
for(var i = 0; i < validmail.length; i++) {
  if(validmail[i] == mail) {
    result = true;
  }
}
if (result==true) {
  document.write ("Mail valida")
}
else {
  alert ("Accesso negato!")
}
