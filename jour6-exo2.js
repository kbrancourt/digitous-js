//age

function calculateAge(jj, mm, aaaa) {
    var date = new Date("9-7-1993");
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    var ageYears = Math.abs(age.getUTCFullYear() - 1970); {
        console.log(`Cette personne a ${ageYears} ans.`);
    }
}

calculateAge(20,05,1982);