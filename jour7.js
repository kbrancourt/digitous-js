//alphabet
function sortLetters(string){
    var words = string;  // je crée une variable avec le paramètre string
    var arrayOfString = words.split(''); //je crée une autre variable pour créer un tableau avec la variable précédente

    console.log(arrayOfString); // resultat de la var arrayOf String

    console.log(arrayOfString.sort()); //mets les lettres en ordre alphabétique

    console.log(arrayOfString.join('')); // mets les valeurs du tableau en ligne sans virgule
}
sortLetters("konexio");


//.split(): pr separer les lettres d'un mot et les mettre dans un tableau
//.sort(): pr mettre ds l'ordre alphabétique
//.join(): pr mettre un tableau en ligne
//.join(''): pr mettre en ligne et supprimer les virgules

//xoxo

function countEach(string){
    var character = string.split('');
    var characterX = 0;
    var characterO = 0;


    for(var i= 0; i< character.length; i++){
        if(character[i] === "x"){
            characterX++;

        }else if(character[i] === "o"){
            characterO++;
        }
        
    }
    if(characterX === characterO){
        console.log("true");
    }else{
        console.log("false");
    }
    
}
countEach("xox");
countEach("xxxoooox");




//palindrome
function checkPal(string){
    var word = string; 
    var reverseWord = word.split("").reverse().join(""); 
    console.log(reverseWord);
    
    if(word === reverseWord){
        console.log("Palindrome");
    } else{
        console.log("Nope");
    }
}
checkPal("racecar");
checkPal("laptop");


//swap

function swap(string){
    for(var i = 0; i < string.length; i++){
        var wordReplace = string.charAt(i); 

        if(wordReplace === wordReplace.toUpperCase()){
            wordReplace = wordReplace.toLowerCase(); 
        }else if(wordReplace = wordReplace.toLowerCase()){
            wordReplace = wordReplace.toUpperCase(); 
        } 
     console.log(wordReplace);    
    }
    
        
}

swap("Hello World")