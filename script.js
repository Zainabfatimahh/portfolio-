const nav=document.querySelector(".nav"), menuBtn=document.querySelector(".menu-btn");
menuBtn?.addEventListener("click",()=>nav.classList.toggle("open"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("visible")});
},{threshold:.1});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const filterButtons=document.querySelectorAll(".filter button");
const projects=document.querySelectorAll(".project");
filterButtons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    filterButtons.forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    const type=btn.dataset.filter;
    projects.forEach(p=>{
      p.style.display=(type==="all"||p.dataset.type===type)?"block":"none";
    });
  });
});

const modal=document.getElementById("behanceModal");
const openModal=()=>{modal.classList.add("open");modal.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"};
const closeModal=()=>{modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow=""};
document.getElementById("behanceOpen")?.addEventListener("click",openModal);
document.getElementById("behanceOpen2")?.addEventListener("click",openModal);
document.getElementById("modalClose")?.addEventListener("click",closeModal);
document.getElementById("modalX")?.addEventListener("click",closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

const glow=document.querySelector(".cursor-glow");
window.addEventListener("pointermove",e=>{
  glow.style.left=e.clientX+"px";
  glow.style.top=e.clientY+"px";
});
