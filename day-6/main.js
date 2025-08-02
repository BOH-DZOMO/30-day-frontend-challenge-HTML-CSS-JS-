let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");
let scrollContainer = document.querySelector(".gallery")

scrollContainer.addEventListener("wheel",(e)=>{
    e.preventDefault()
    scrollContainer.style.scrollBehavior = "auto"
    scrollContainer.scrollLeft += e.deltaY

})

backBtn.addEventListener("click",(e)=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft -= 900

})

nextBtn.addEventListener("click",(e)=>{
    scrollContainer.style.scrollBehavior = "smooth"
    scrollContainer.scrollLeft += 900

})

