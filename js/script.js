let activator = document.querySelectorAll('.nav-link');

let activatorFun = ()=>{
    activator.forEach(element => {
        
    element.addEventListener("click",(e)=>{
        activator.forEach(el=>{
            el.classList.remove('active')
        })
        e.target.classList.add("active")
    })
})};
activatorFun();



let navWider = document.querySelector('#secHero');
let navEle = document.querySelector('.sticky-top')
let movement = ()=>{

let mover = () => {
  let pos = navWider.getBoundingClientRect();
  if (pos.top <= -400) {
    navEle.classList.remove("bg-white");
    navEle.classList.add("bg-light");
  } else {
    navEle.classList.remove("bg-light");
    navEle.classList.add("bg-white");
  }
};
window.addEventListener("scroll", () => mover());
}
movement();


let area1 =document.getElementById('area1');
let area2 =document.getElementById('area2');
let area3 =document.getElementById('area3');
let totalArea =document.getElementById('totalArea');
let areas = document.querySelectorAll('[type="number"]');
let pricing = document.getElementById('pricing');
let totalPrice = document.getElementById('totalPrice')

let areaFun = (ar1,ar2,ar3,ars,totalA,price,tPrice)=>{
    let total=0;
    ars.forEach(area=>{
      area.addEventListener('input',()=>{
        Number(area.value)<=0?area.value=0: total = Number(ar1.value) + Number(ar2.value) + Number(ar3.value);
        totalA.innerHTML = total
        price.addEventListener('change',()=>{
          tPrice.innerHTML = (total * price.value).toLocaleString('en-US');
        })
       
        
      })
      total=0
    })
}
areaFun(area1,area2,area3,areas,totalArea,pricing,totalPrice)

let ground =document.getElementById('checkGround');
let first =document.getElementById('checkFirst');
let second =document.getElementById('checkSecond');
let bright = (element,target)=>{
  element.addEventListener('input',()=>{
    target.classList.remove('opacity-0');
    target.classList.add('brighter');
  })
}
bright(area1,ground);
bright(area2,first);
bright(area3,second);


let heighter = ()=>{
let current = window.scrollY;
let pageBody = window.outerHeight;
let maxHeight = document.body.offsetHeight;
let scrollSapy = document.getElementById('scrollSpy');
let percent;
current <= 0 ? percent = current/maxHeight*100 : percent = ((current+pageBody)/maxHeight*100);
percent > 100 ? percent = 100 : percent
scrollSapy.style.width = `${percent}%`
}
window.addEventListener('scroll',()=> heighter())





let secOneInterector = document.getElementById('secInfo');
let leftWing = document.getElementById('leftWing');
let rightWing = document.getElementById('rightWing');

let interesctorGeneral = (intersected,applyer1,applyer2,applyer3,animation1,animation2,animation3)=>{
  const io = new IntersectionObserver((entries,) => {
    entries.forEach((entry) => {
      
      if (entry.intersectionRatio > 0) {
       applyer1 ? applyer1.classList.add(`${animation1}`):false;
       applyer2 ? applyer2.classList.add(`${animation2}`):false;
       applyer3 ? applyer3.classList.add(`${animation3}`):false;
      }
      setTimeout( ()=>{
        applyer1 ? applyer1.classList.remove(`${animation1}`):false;
        applyer2 ? applyer2.classList.remove(`${animation2}`):false;
        applyer3 ? applyer3.classList.remove(`${animation3}`):false;
      },3500)

      
  
    })

  })
  
    io.observe(intersected);
}

interesctorGeneral(secOneInterector,leftWing,rightWing,null ,'animate__slideInLeft','animate__slideInRight',null);

let partnerContainer = document.getElementById('partnerContainer');
let partnerChild = document.querySelectorAll('.partnerChild');
interesctorGeneral(partnerContainer,partnerChild[0],partnerChild[1],partnerChild[2] ,'animate__fadeInLeft','animate__fadeInLeft','animate__fadeInLeft');


let outerCaller = ()=>{
  let cards = document.querySelectorAll('.card');
cards.forEach(crd=>{
  interesctorGeneral(crd,crd,null,null,"animate__fadeInDown",null,null)
})
}
outerCaller()



let counter = ()=>{
  let cards = document.querySelectorAll('.counter');
for(let i=0;i<cards.length;i++){
  cards[i].innerHTML = `0${i+1}`
}
}
counter();