
const menuBtn=document.querySelector('.menu-btn');let menuOpen=!1;menuBtn.addEventListener('click',()=>{if(!menuOpen){menuBtn.classList.add('open');menuOpen=!0}else{menuBtn.classList.remove('open');menuOpen=!1}});const tarjeta1=document.querySelector('.tarjeta1');const tarjeta2=document.querySelector('.tarjeta2');const tarjeta3=document.querySelector('.tarjeta3');const contenedorUno=document.querySelector('.caja1');const contenedorDos=document.querySelector('.caja2');const contenedorTres=document.querySelector('.caja3');const titulo1=document.querySelector('.titulo1')
const titulo2=document.querySelector('.titulo2')
const titulo3=document.querySelector('.titulo3')
const p1=document.querySelector('.p1');const p2=document.querySelector('.p2');const p3=document.querySelector('.p3');const img1=document.querySelector('.img1');const img2=document.querySelector('.img2');const img3=document.querySelector('.img3');contenedorUno.addEventListener('mousemove',e=>{const Xmove=(window.innerWidth/2-e.pageX)/12;const Ymove=(window.innerHeight+500-e.pageY)/12;tarjeta1.style.transform=`rotateY(${Xmove}deg) rotateX(${Ymove}deg)`});contenedorDos.addEventListener('mousemove',e=>{const Xmove=(window.innerWidth/2-e.pageX)/10;const Ymove=(window.innerHeight+500-e.pageY)/10;tarjeta2.style.transform=`rotateY(${Xmove}deg) rotateX(${Ymove}deg)`});contenedorTres.addEventListener('mousemove',e=>{const Xmove=(window.innerWidth/2-e.pageX)/17;const Ymove=(window.innerHeight+500-e.pageY)/12;tarjeta3.style.transform=`rotateY(${Xmove}deg) rotateX(${Ymove}deg)`});contenedorUno.addEventListener('mouseenter',(e)=>{tarjeta1.style.transition='none';titulo1.style.transform='translateZ(40px)';p1.style.transform='translateZ(35px)';img1.style.transform='translateZ(35px) scaleZ(1.3)'})
contenedorDos.addEventListener('mouseenter',(e)=>{tarjeta2.style.transition='none';titulo2.style.transform='translateZ(40px)';p2.style.transform='translateZ(35px)';img2.style.transform='translateZ(35px) scaleZ(1.3)'})
contenedorTres.addEventListener('mouseenter',(e)=>{tarjeta3.style.transition='none';titulo3.style.transform='translateZ(40px)';p3.style.transform='translateZ(35px)';img3.style.transform='translateZ(35px) scaleZ(1.3)'})
contenedorUno.addEventListener('mouseleave',e=>{tarjeta1.style.transition='all 800ms ease';tarjeta1.style.transform=`rotateY(0deg) rotateX(0deg)`;titulo1.style.transform='translateZ(0px)';img1.style.transform='translateZ(0px) rotateZ(0deg)';p1.style.transform='translateZ(0px)'})
contenedorDos.addEventListener('mouseleave',e=>{tarjeta2.style.transition='all 800ms ease';tarjeta2.style.transform=`rotateY(0deg) rotateX(0deg)`;titulo2.style.transform='translateZ(0px)';img2.style.transform='translateZ(0px) rotateZ(0deg)';p2.style.transform='translateZ(0px)'})
contenedorTres.addEventListener('mouseleave',e=>{tarjeta3.style.transition='all 800ms ease';tarjeta3.style.transform=`rotateY(0deg) rotateX(0deg)`;titulo3.style.transform='translateZ(0px)';img3.style.transform='translateZ(0px) rotateZ(0deg)';p3.style.transform='translateZ(0px)'})