var cartitems = [];
var count = 0;
function addtocart(){
    var productname = document.getElementById('itemname').innerHTML;
    cartitems.push(productname);
    count++;
    alert(count);
    alert(productname);
    alert(cartitems);
}
















// var btns = document.getElementsById("btn")
// var count = btns.lenghth
// alert();
// function addtocart(){
//     let name = document.getElementById
// }
// var buttons = document.getElementById("btn")
// var buttonsCount = buttons.length
// for(var i = 0; i <= buttonsCount; i++){
//     buttons[i].onclick = function(e){
//         alert(this.id);
//     }
// }