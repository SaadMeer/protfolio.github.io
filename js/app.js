const scroll1 = document.querySelector(".lang-container");
const scroll2 = document.querySelector(".hire-me");

window.addEventListener("scroll" , function(){
    const scrollHeight = window.pageYOffset;
    const skillScroll1 = scroll1.getBoundingClientRect().height;
    const skillScroll2 = scroll2.getBoundingClientRect().height;

    if(scrollHeight > skillScroll1 -550){
        scroll1.classList.add("skill-scroll");
    }

    if(scrollHeight > skillScroll2 + 700){
        scroll2.classList.add("skill-scroll");
    }
})
