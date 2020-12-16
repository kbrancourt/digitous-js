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



