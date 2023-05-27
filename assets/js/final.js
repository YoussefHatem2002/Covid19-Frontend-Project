let t1=setInterval(ts1);
let t2=setInterval(ts2);
let t3=setInterval(ts3);
let c1=0;
let c2=0;
let c3=0;
function ts1(){
    var t1= document.getElementById("t1");
    if(c1<=606717943)
    {
        t1.innerHTML= (c1+=303360);
    }
}
function ts2(){
    var t2= document.getElementById("t2");
    if(c2<=6507525)
    {
        t2.innerHTML= (c2+=3256);
    }
}
function ts3(){
    var t3= document.getElementById("t3");
    if(c3<=583017357)
    {
        t3.innerHTML= (c3+=291508);
    }
}



let back = document.getElementById("b1");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 200) {
    back.style.display = "block";
  } else {
    back.style.display = "none";
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}