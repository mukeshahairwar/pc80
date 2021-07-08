var namasofpeople
var Guest_name=document.getElementById("name1").value;
namasofpeople.push(Guest_name);

namasofpeople.sort();

function searching() {
    var s=document.getElementById("1ipt").value;
    var found=0
    var j
    for ( j= 0;j< namasofpeople.length; j++) {
        if(s==namasofpeople[j]){
        found=found+1;
        }        
        
    }
       document.getElementById("p2").innerHTML="name found"+found+"time/s";
       console.log("name found"+found+"time/s")
}