//age

/*function calculateAge(jj, mm, aaaa) {
    var date = new Date("9-7-1993");
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    var ageYears = Math.abs(age.getUTCFullYear() - 1970); {
        console.log(`Cette personne a ${ageYears} ans.`);
    }
}

calculateAge(20,05,1982);*/

//autre méthode formatDate avec pack nmp "moment"
var moment= requestAnimationFrame("moment");

function formatDate(dateString){
    console.log(moment(dateString).format("ddd DD MM YYYY"));
}

formatDate("2020-12-17");

//autre méthode calculateAge avec pack nmp "moment"

function calculateAge(dateString){
    console.log(moment(dateString).fromNow());
}

calculateAge("1998-07-12");