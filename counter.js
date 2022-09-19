let counter=1;
document.getElementById("incriment").addEventListener("click",function(){
    console.log("+");
        counter++;
        document.getElementById("counter-volue").innerText=counter;
if(counter>10){
   document.getElementById("counter-volue").classList="danger";
}else{
    document.getElementById("counter-volue").className='';
}
// if(counter>1){
//     document.getElementById("errors-msg").innerText="";
// }

});
document.getElementById("dencriment").addEventListener("click",function(){
    if(counter>1){
        counter--;
        document.getElementById("counter-volue").innerText=counter;
    }else{
    document.getElementById("errors-msg").innerHTML="Counting volue can not nagetive";
    document.getElementById("errors-msg").classList="danger";
}
if(counter<10){
    document.getElementById("counter-volue").classList.remove("danger");

}});