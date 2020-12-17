//validor
var prompt = require("prompt"); 


var properties = [
  {
    name: "username",
    validator: /^[a-zA-Z\s\-]+$/, // Regex de validation : lettres maj / min, espaces et tirets
    warning: "Le username ne doit contenir que des lettres, espaces et tirets"
  },
  {
      name: "email", 
      validator: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      warning: "Le email ne doit contenir que des lettres, des tirets, des chiffres et caractères spéciaux"

  },
  {
    name: "password",
    hidden: true // n'affichera pas la saisie de l'utilisateur à l'écran
  }
];

prompt.start(); // démarre le prompt

function onErr(err) { // permet de gérer les erreurs
  console.log(err);
  return 1;
}

prompt.get(properties, function (err, res) {
  if (err) {
		return onErr(err);
	} else{
        return ("All good!");
    }

  console.log("Données reçues :");
  console.log("=> Username : " + res.username);
  console.log("=> Email : " + res.email);
  console.log("=> Password : " + res.password);
});
