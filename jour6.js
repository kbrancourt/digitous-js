//formatDate

function formatDate(aaaa,mm,jj){
    var date = new Date; 
    var aaaa = date.getFullYear();
    var mm = date.getMonth();
    var jj = date.getDate();{
        console.log(`${jj}/${mm}/${aaaa}`)
    }

}
formatDate();

//age

function calculateAge(jj, mm, aaaa) {
    var date = new Date("9-7-1993");
    var diff = Date.now() - date.getTime();
    var age = new Date(diff);
    var ageYears = Math.abs(age.getUTCFullYear() - 1970); {
        console.log(jj, mm, aaaa, ageYears);
    }
}

calculateAge();