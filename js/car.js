/**
 * Created by Administrator on 2016/9/26.
 */
window.onload= function () {
    changeBig();

}
function changeBig(){
    var carObjs=$('.car-main');
        //console.log(carObjs);
    for(var i=0;i<carObjs.length;i++) {
        carObj = carObjs[i];
        carObj.addEventListener('mouseover', bigHandle);
    }
}
var bigHandle = function () {
    this.style.boxShadow='0 0 10px red';
}
