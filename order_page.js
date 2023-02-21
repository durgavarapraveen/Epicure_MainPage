const arr = [74,26,100]; 
var i=0;
function save() {
    for( i=0;i<3;i++) {
        var amount  = document.getElementById('i').value * arr[i];
    }
    document.getElementById('amount').innerHTML = amount;

}

// function myfunction() {
//     var popup = document.getElementById('myPopup');
//     popup.classList.toggle("show");
// }