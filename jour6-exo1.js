//formatDate

function formatDate(dateString){
    var date = new Date(dateString); 
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    
        console.log(`${day}/${month}/${year}`)
    }

formatDate("2020-12-17");



