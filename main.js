// ..............toggle-btn..................
const toggle= document.querySelector(".toggle-btn");
const body= document.querySelector("body");

toggle.onclick= function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    
    
}
// ..............important hyperlinks..................

document.querySelector('#save').onclick= function(){
    let url= document.querySelector('#url ');
    let urlName= document.querySelector ('#url-name ');
    let savedUrl= document.querySelector('.saved-url');

        if(url.value.length && urlName.value.length !==0){
        savedUrl.innerHTML +=`
        <div class="writtenUrl">
         <span class="hyperlinkField">
           
         <a id="a" href="${url.value}" target="_blank">${urlName.value}</a>
         </span>
         <button class="del-url">x</button>


        </div>
       
       
       `
      
       document.getElementById('url').value='';
       document.getElementById('url-name').value='';

       var deleteUrl= document.querySelectorAll('.del-url')
       for (var i=0; i< deleteUrl.length; i++){
           deleteUrl[i].onclick= function(){
           this.parentNode.remove ();
       }

   }
    }else{alert("please Enter a url");
        
}
}



// ..............to-do-list..................
document.querySelector('#add').onclick= function(){
    if(document.querySelector('.new-task input').value.length ==0){
        alert("please Enter a Task");
    }else{
        document.querySelector('#tasks').innerHTML+=`
        <div class="task">
           <span class="taskname">
           ${document.querySelector('.new-task input').value}
           </span>
           <button class="delete">
              <i>x</i>
           </button>
           </div>
           
        `
        document.getElementById('userdata').value='';
        var currentTasks= document.querySelectorAll('.delete')
        for (var i=0; i< currentTasks.length; i++){
        currentTasks[i].onclick= function(){
            this.parentNode.remove ();
        }
     }
        
        }    
        var cmpl= document.querySelectorAll('.taskname');
        for (var i =0; i< cmpl.length; i++){
            cmpl[i].onclick= function(){
            this.classList.toggle ('completed');    
    }

}
}

// ..............clock..................

addEventListener ('load' , dcPrintTime())
function dcPrintTime(){
    
    let timeNow= new Date();
    let dcHrs= timeNow.getHours();
    let dcMins= timeNow.getMinutes();
    let dcSecs= timeNow.getSeconds();
    let ampm= document.getElementById ('dc-ampm');

    
    if(dcHrs >=12){
        ampm.innerHTML= 'PM'
    }else{
        ampm.innerHTML='AM'
    }
    if(dcHrs >12){
        dcHrs= dcHrs-12;
    }
    document.getElementById ('dc-hh').innerHTML= dcHrs;
    document.getElementById ('dc-mm').innerHTML= dcMins;
    document.getElementById ('dc-ss').innerHTML= dcSecs; 
         
}
setInterval(dcPrintTime, 1000)

// ..............clock..................
const deg = 6;
const hr = document.querySelector('.hours-hand');
const min = document.querySelector('.minutes-hand');
const sec = document.querySelector('.second-hand');


addEventListener ('load' , fady())
function fady() {
let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
min.style.transform = `rotateZ(${mm}deg)`;
sec.style.transform = `rotateZ(${ss}deg)`;

}
setInterval(fady, 1000);

// ..............calender..................

const dow =[
     "Sunday",
     "Monday",
     "Tuesday",
     "Wednesday",
     "Thursday",
     "Friday",
     "Saturday" ];


const month =[
    
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

let date= new Date();
let monthName = date.getMonth(); 
let dayName = date.getDay(); 
let dayNumber = date.getDate(); 
let yearName = date.getFullYear();

document.getElementById ('month-name').innerHTML= month[monthName];     
document.getElementById ('day-name').innerHTML= dow[dayName];     
document.getElementById ('day-number').innerHTML= dayNumber;     
document.getElementById ('year-name').innerHTML= yearName;

// ..............logo..................
let upload= document.getElementById ("upload");
let img= document.getElementById ("img");
let imgBox= document.querySelector('.img-box');
window.onload= function (){
    imgBox.style.display='none';
}

window.onchange= function (){
    imgBox.style.display='block';
    let file= new FileReader();
    file.readAsDataURL(upload.files[0]);
    file.onload= function(){
        img.src= file.result;
    }
}
