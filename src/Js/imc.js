
function DarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode"); 
}

function calculaIMC() {
  document.getElementById("altura").style.border = "solid, 1px, rgba(165, 42, 157, 0.7)";
  document.getElementById("altura").style.backgroundColor = "#fff";
  document.getElementById("peso").style.border = "solid, 1px, rgba(165, 42, 157, 0.7)";
  document.getElementById("peso").style.backgroundColor = "#fff";
  if (document.getElementById("peso").value == "") {
    alert("Preencha o peso");
    document.getElementById("peso").style.borderColor = "red";
    document.getElementById("peso").style.backgroundColor = "#ffe5e5";
    document.getElementById("peso").focus();
    return false;
  }
  if (document.getElementById("altura").value == "") {
    alert("Preencha o altura");
    document.getElementById("altura").style.borderColor = "red";
    document.getElementById("altura").style.backgroundColor = "#ffe5e5";
    document.getElementById("altura").focus();
    return false;
  }
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var resultado = peso / (altura * altura);
  document.getElementById("resultado").innerHTML = resultado
  return true;
}