// function sand(){
//     var sandcontainer = document.querySelector(".sandcontainer")
//     sandcontianer.style.backgroundColor ="red"
// console.log("change backgound")

// }
// function lightning(){
// console.log("lightning")

// }
// function (){
//     console.log("lightning")
//  }
// function flower(){
//         console.log("lightning")
//  }

// var time= new Time()
// document.body.innerHtml= time;
var project={
    sand4:"pictures/sand4.jpeg",
    sand3:"pictures/sand3.jpeg",
    sand2:"pictures/sand2.jpeg",
    sand1:"pictures/sand1.jpeg",
    image1:"pictures/lightning1.png",
    image2:"pictures/lightning2.png",


    poem:"I AM FOREVER walking upon these shores,<br>Betwixt the sand and the foam,<br>The high tide will erase my foot-prints,<br>And the wind will blow away the foam.<br>But the sea and the shore will remain<br>Forever.<br><br>Once I filled my hand with mist.<br>Then I opened it and look, the mist was a worm.<br>And I closed and opened my hand again, and behold there was a bird.<br>And again I closed and opened my hand, and in its hollow stood a man with a sad face, turned upward.<br>And again I closed my hand, and when I opened it there was naught but mist.<br>But I heard a song of exceeding sweetness.<br><br>It was but yesterday I thought myself a fragment quivering without rhythm in the sphere of life.<br>Now I know that I am the sphere, and all life in rhythmic fragments moves within me.<br><br>They say to me in their awakening, \"You and the world you live in are but a grain of sand upon the infinite shore of an infinite sea.\"<br>And in my dream I say to them, \"I am the infinite sea, and all worlds are but grains of sand upon my shore.\"",
poem2:"我永远在沙岸上行走，<br><br>在沙土和泡沫的中间。<br><br>高潮会抹去我的脚印，<br><br>风也会把泡沫吹走。<br><br>但是海洋和沙岸<br><br>却将永远存在。<br><br><br><br>我曾抓起一把烟雾。<br><br>然后我伸掌一看，哎哟，烟雾变成一个虫子。<br><br>我把手握起再伸开一看，手里却是一只鸟。<br><br>我再把手握起又伸开，在掌心里站着一个容颜忧郁，向天仰首的人。<br><br>我又把手握起，当我伸掌的时候，除了烟雾以外，一无所有。<br><br>但是我听到了一支绝顶甜柔的歌曲。<br><br><br><br>仅仅在昨天，我认为我自己只是一个碎片，无韵律地在生命的穹苍中颤抖。<br><br>现在我晓得，我就是那穹苍，一切生命都是在我里面有韵律地转动的碎片。<br><br>他们在觉醒的时候对我说：\"你和你所居住的世界，只不过是无边海洋的无边沙岸上的一粒沙子。\"<br><br>在梦里我对他们说：\"我就是那无边的海洋，大千世界只不过是我的沙岸上的沙粒。\""

}





var i=0;
 function alpha(){
    var x= event.pageX;
    var y=event.pageY;
var xcursor =document.querySelector(".xcursor")
var ycursor =document.querySelector(".ycursor")
var title =document.querySelector("#title")
var time=document.querySelector("#time")
title.style.top=y+0.3*innerHeight+"px";
xcursor.style.top=y+"px";
title.style.left=x-0.495*innerWidth+"px";
ycursor.style.left=x+"px";
time.style.left=-0.02*innerWidth+"px";
time.style.top=y+0.05*innerHeight+"px";
    var sand1=document.querySelector("#sand")
    // var opacity =1-x/1000+0.2;
    var opacity= 1-x/window.innerWidth+0.2;

    
// var sandsrc=document.querySelector("#sand1")
// if(sandsrc=="pictures/sand1.jpeg")



// {console.log("image1")}






var opacity2= y/window.innerHeight
sand.style.opacity=opacity*0.9+opacity2*0.4
if(opacity2<0.2&& counter<5){
   
   document.querySelector("#sand").style.zIndex=10;
    document.querySelector("#sand").src=project.sand1; 
   i=1
}
if(opacity2<0.2&& counter>=5){
   
   document.querySelector("#sand").style.zIndex=10;
    document.querySelector("#sand").src="pictures/flower1.jpeg" 
    document.querySelector("#poem1","#poem2").style.display="none";
   //up
}


if(opacity<0.3 && counter<5){
    document.querySelector("#sand").style.zIndex=10;
    document.querySelector("#sand").src=project.sand3;
//right
i=3
    var opacity =x/window.innerWidth;
    document.querySelector("#lightning").style.top=1200+"vh";
    
}
if(opacity<0.3 && counter>=5){
    document.querySelector("#sand").style.zIndex=10;
    document.querySelector("#sand").src="pictures/flower2.jpeg"


    var opacity =x/window.innerWidth;
    
}
else if(opacity>1.1 &&counter<5){
 document.querySelector("#sand").style.zIndex=10;
 document.querySelector("#sand").src=project.sand4
   i=4;
    // console.log("alpha>1")
    document.querySelector("#lightning").style.top=1200+"vh";
//left
}
else if(opacity>1.1 &&counter>=5){
 document.querySelector("#sand").style.zIndex=10;
 document.querySelector("#sand").src="pictures/flower3.jpeg" 
 document.querySelector("#lightning").style.display="none";
    // console.log("alpha>1")

}







console.log(opacity)
    // console.log("alpha works"+"x:"+x+"y:"+y)
 }

var counter =0;
 function lightning(){
    
    counter+=1;
    // console.log(counter)
    
    if(counter==1){
       document.querySelector("#lightning").style.display="block"; 
//         setTimeout(function(){alert("⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️⚡️An average duration of time for a stroke of lightning is about 30 microseconds.");},300);
//         var lightning=document.createElement("img")
//   var container=document.querySelector(".sandcontainer")      
// container.appendChild(lightning);
// lightning.src = project.image1;
// lightning.className= "lightningjava"
// lightning.innerHTML

;


    }
    
    if(counter==2){
     

        document.querySelector("#lightning").src=project.image2;
        document.querySelector("#lightning").style.top=-600+"vh";
        document.body.style.filter="invert(100%)"
        //    setTimeout(function(){alert("⚡️⚡️⚡️电光石火⚡️⚡️⚡️是闪电的光，燧石的火。“电光”常用作比喻世间事物生灭变幻，无常迅速，现多形容事物像闪电和石火一样一瞬间就消逝。");},200);
    }
if(counter==3){
    alert("Try double-click!")
    document.querySelector("#lightning").style.display="none";
    document.body.style.filter="none"
   


        
        }
    
}


    


function flower(){

    document.querySelector("#sand").src="pictures/flower1.jpeg" 
    document.querySelector("#sand").style.filter="invert(100%)"
    document.querySelector("#poem1").style.display="none";
    document.querySelector("#poem2").style.display="none";
    // console.log("doubleclick")
    
}






window.setInterval(function(){
    myDate()  }, 1000);

function myDate(){
 var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var myDate = document.querySelector("#time")
  myDate.innerHTML =
  h + ":" + m + ":" + s;}
  


var execute1=0;
var execute2=0;



 function poem(){

 var poemtext1 = document.createElement("p")
    var container1= document.querySelector("#poem1")
container1.appendChild(poemtext1);


var poemtext2 = document.createElement("p")
    var container2= document.querySelector("#poem2")
container2.appendChild(poemtext2);

if(i==1){

    document.querySelector("#time").style="color:white"
   document.querySelector("#title").style="color:blue"
    // console.log("poem work")
    // document.querySelector(".poem").removeChild();

}

if(i==3 && execute1==0 && execute2==0){
    execute1 =1;
    // console.log("poem work3") 
   
    
   poemtext1.innerHTML=project.poem;
   poemtext1.style.color="white"
//    poemtext.className="poemtext1"
   

   return execute1;
   

}


if(i==3 && execute1==0 && execute2==1){
execute1 =1;
 
    document.querySelector("#poem2").style.display="none";
    
    // console.log("poem work3") 


   poemtext1.innerHTML=project.poem;
   poemtext1.style.color="white"
   
   

   return execute1;
   

}














if(i==3){
document.querySelector("#time").style="color:blue"
   document.querySelector("#title").style="color:red"


}
if(i==4){
  
    document.querySelector("#time").style="color:white"
   document.querySelector("#title").style="color:"
    
    }




if(i==4 && execute1==0 &&execute2==0 ){
   execute2=1;
    console.log("poem work3") 

    poemtext2.innerHTML=project.poem2;
  
 


  
   return execute2;
}



if(i==4 && execute1==1 && execute2==0 ){
    execute2=1;
     console.log("poem work3") 

     document.querySelector("#poem1").style.display="none";

//  document.querySelector(".poem").removeChild();
     poemtext2.innerHTML=project.poem2;
    // poemtext.classname="poemtext2"
    
    
 
    return execute2;
 }


if(i==3 && execute1==1 && execute2==1){

    document.querySelector("#poem1").style.display="block";
    document.querySelector("#poem2").style.display="none";





}

if(i==4 && execute1==1 && execute2==1){

    document.querySelector("#poem1").style.display="none";
    document.querySelector("#poem2").style.display="block";





}











 }


 function poemtransform(){
console.log("poem hover")
document.querySelector(".title").style.opacity=0



 }

 function poemtransform2(){

    document.querySelector(".title").style.opacity=1

 }