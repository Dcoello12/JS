//Tasca 1
//Demana introduir dos números i digues quin és més gran, quin és més petit o si són iguals.

function Exercici1() {
window.alert("Posa dos numeros i et direm quin és més gran, petit o iguals")
var numero1 = prompt("Primer numero");
var numero2 = prompt("Segon numero");

  if (numero1>numero2) {
    document.write("<h2>El numero " + numero1 + " es mes gran que el numero " + numero2 + " </h2>.")
}
  else if (numero1<numero2) {
    document.write("<h2>El numero " + numero2 + " es mes gran que el numero " + numero1 + " </h2>.")
}
  else if (numero1==numero2) {
    document.write("<h2>Els " + numero1 + " i " + numero2 + " tenen el mateix valor.</h2>")

  }
}

//Tasca2
//Demana introduir un número, i mostra la seva taula de multiplicar

function Exercici2() {
  window.alert("Posa un número i et mostrarem la seva taula de multiplicar!")
  var numero = prompt("Quin número vols posar?");
  document.write("<h2>Taula de multiplicar del " + numero +"</h2>")
  document.write("<ul>")
  for(k = 1;k<=10;k++){
    document.write("<li>")
    document.write(numero + "x " + k + "= " + numero * k)
    document.write("</li>")

    }
}

//Tasca 3
//Demana introduir el nom, l’edat i el correu electrònic, i mostra’ls per pantalla juntament amb el text:
//“Hola nomIntroduit cognomsIntroduits!
//Moltes gràcies per presentar-te, i dir-me que tens anysIntroduits.
//Em guardaré el teu correu electrònic (emailIntroduit) per si mai et vull enviar un missatge.

//A reveure!”

function Exercici3(){
window.alert("Volem conèix-te millor, omple els camps.")
var nom = prompt("Com et dius?","");
var cognom = prompt("Quin es el teu cognom?","");
var edat = prompt("Quants anys tens?","");
var email = prompt("Quin es el teu correu electronic?","");

document.write("Hola " + nom + " " + cognom + "</br><br> Moltes gràcies per presentar-te, i dir-me que tens " + edat + " anys</br>Em guardaré el teu correu electrònic " + email + " per si mai et vull enviar un missatge. <br><br>A reveure!")
}
