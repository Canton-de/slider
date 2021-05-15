new Swiper('.image-slider',{
    breakpoints:{
        320:{
            slidesPerView:1.2,
                },
        400:{
            slidesPerView: 1.4
        },
        449:{
            slidesPerView: 1.6,
        },
        520:{
            slidesPerView: 2,
        },
        580:{
            slidesPerView: 2.2,
        },
        650:{
            slidesPerView: 2.3,
        },
       
        700:{
            slidesPerView: 2.5
        }
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    }
})

if(window.innerWidth>=768){
    const brands = document.querySelectorAll('.brands__brand');
    const button = document.querySelector('.header__show-btn');
    const arrows = document.querySelector('.arrows');
    let isShowing = true
    button.addEventListener('click',()=>{
        toggleShowingBrands()
        
        const hideBrands = button.lastElementChild
        if(isShowing){
            hideBrands.innerHTML = "Скрыть"
            arrows.classList.add('arrows-to-top')
            button.classList.add('btn-hide-brands')
        }
        else{
            hideBrands.innerHTML = "Показать все"
            arrows.classList.remove('arrows-to-top')
            button.classList.remove('btn-hide-brands')
        }
    })
    const resize = () =>{
        if(window.innerWidth<=768){
            return;
        }
        const brandWidth =brands[0].offsetWidth 
        const containerWidth = document.querySelector('.container').offsetWidth
        
        for(let i = 0;i < brands.length; i++){
            brands[i].classList.remove('remove-top-margin');
            brands[i].style.marginLeft=0;
        }
        const rowCount = Math.floor(containerWidth/brandWidth)
        const margin = (containerWidth - brandWidth * rowCount)/(rowCount-1);
        for(let i = 0;i < rowCount; i++){
            brands[i].classList.add('remove-top-margin');
        }
        for(let i = 0; i < brands.length;i++){
            if(i%rowCount!=0){
                brands[i].style.marginLeft=margin+'px';
            }
        }
        resizeRowBrands()  
       
    }
    const resizeRowBrands = ()=>{
        
        for(let i = 0;i < brands.length;i++){
            brands[i].classList.remove('display-off')
        }
        const brandWidth =brands[0].offsetWidth 
        const containerWidth = document.querySelector('.container').offsetWidth
        const rowCount = Math.floor(containerWidth/brandWidth)
        for(let i = 0;i < rowCount; i++){
            brands[i].classList.add('remove-top-margin');
        }
        for(let i = rowCount*2;i<brands.length;i++){
            brands[i].classList.add('display-off')
        }
        isShowing=false
        
    }
    const toggleShowingBrands = ()=>{
        const brandWidth =brands[0].offsetWidth 
        const containerWidth = document.querySelector('.container').offsetWidth
        const rowCount = Math.floor(containerWidth/brandWidth)
        for(let i = 0;i < rowCount; i++){
            brands[i].classList.add('remove-top-margin');
        }
        for(let i = rowCount*2;i<brands.length;i++){
            if(!isShowing){
                brands[i].classList.remove('display-off')
            }
            else{
                brands[i].classList.add('display-off')
            }

        }
        isShowing=!isShowing
        
    }
    toggleShowingBrands()
    resize()
    window.onresize = resize
    
}