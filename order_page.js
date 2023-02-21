var increment=document.getElementsByClassName('plus');
var decrement=document.getElementsByClassName('minus');

console.log(document.getElementById('20'));

for (var i=0;i<increment.length;i++){
     var button=increment[i];
    //  console.log(button);
     button.addEventListener('click',function(event){
        var clicked = event.target;
        // console.log(clicked);
        var out = clicked.parentElement.children[1];

        // console.log();
        var inputValue =out.value;
        // console.log(inputValue);
        var newd = parseInt(inputValue)+1;
        if (newd>15){

            newd=15;
        }
        out.value=newd;

     })
}
for (var i=0;i<decrement.length;i++){
    var button=decrement[i];
   //  console.log(button);
    button.addEventListener('click',function(event){
       var clicked = event.target;
       // console.log(clicked);
       var out = clicked.parentElement.children[1];

       // console.log();
       var inputValue =out.value;
    //    console.log(inputValue);
       var newd = parseInt(inputValue)-1;
       if (newd<0){
        newd=0;
       }
       out.value=newd;

    })
}
function orderit(){
    var prices=document.getElementsByClassName('rate');
    // console.log(prices);
    const rates=[];
    for (var i=0;i<prices.length;i++){
        rates.push(parseInt(prices[i].innerHTML))
    }
    var count=document.getElementsByClassName('val');
    const counts=[];
    for (var i=0;i<count.length;i++){
        counts.push(parseInt(count[i].value))
    }
    var sum=0;
    for (var i=0;i<rates.length;i++){
        sum+=rates[i]*counts[i];
    }
    var a=3;
    document.getElementById('container3').style.visibility = "visible";

    for(var i=0;i<20;i++) {
        var num = i+20;
        if(counts[i]>0) {
            var mul = a*50;
            console.log(mul);
            console.log(num.toString());
            document.getElementById(i+20).style.visibility = "visible";
            document.getElementById(i+20).style.top = "mul";
            console.log(document.getElementById(i+20));
            a++;
            console.log(a);
        }
    }
    console.log(rates);
    console.log(counts);
    console.log(sum);
    console.log(a);
    // window.location.href="popup.html";
}
