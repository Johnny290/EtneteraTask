let currentPosition = 0;
let activeSlide = 1

function slide(direction){
    const sliders = document.querySelectorAll('.slide')
    const slideWrapper = document.getElementById('slide-wrapper')
    const slideWidth = sliders[0].clientWidth;

    if(direction === 'next'){      
        activeSlide++;      
        if(activeSlide <= sliders.length){
            currentPosition = currentPosition - slideWidth
        }else{
            activeSlide = 1
            currentPosition = 0
        }
        slideWrapper.style.transform = `translateX(${currentPosition}px)`
    }
    else if(direction === 'prev'){
        activeSlide--;
        if(activeSlide >= 1){
        currentPosition = currentPosition + slideWidth
        }else{
            activeSlide = sliders.length;
            currentPosition = -slideWidth * (activeSlide -1)
        }
        slideWrapper.style.transform = `translateX(${currentPosition}px)`
    }   
}



const ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.height = 24;
ctx.canvas.width = 90;
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00',
                 '18:00', '19:00', '20:00', '21:00', '22:00'],
        datasets: [{
            data: [1, 2, 1, 2, 3, 2, 1, 1.5, 1.5, 3, 3, 2, 3, 1.5, 1],
            backgroundColor: [
                'rgba(255,198,155,255)',//8
                'rgba(249,140,109,255)',//9
                'rgba(255,198,155,255)',//10
                'rgba(249,140,109,255)', //11
                'rgba(230,77,33,255)',//12
                'rgba(249,140,109,255)',//13
                'rgba(249,140,109,255)',//14
                'rgba(255,198,155,255)',//15
                'rgba(255,198,155,255)',//16
                'rgba(230,77,33,255)',//17
                'rgba(230,77,33,255)',//18
                'rgba(249,140,109,255)',//19
                'rgba(230,77,33,255)',//20
                'rgba(255,198,155,255)',//21
                'rgba(255,198,155,255)',//22
            ],
            borderRadius: 40

        }]
    },
    options: {
        responsive: true,
        barThickness: 30,
        plugins: {
            legend:{
                display: false
            }
        },
        scales: {
            x: {
                ticks: {
                    autoSkip: false,
                    maxRotation: 90,
                    minRotation: 90
                  },
                grid:{
                    display:false
                }
            },
            y: {
                grace: '100%',
                beginAtZero: true,
                ticks: {
                    display: false
                },
                grid:{
                    display: false,
                    drawTicks: false
                }
            }
            
        }
    }
});


// modal --------------------

function showModal(){
    const modal = document.getElementById('modal')
    modal.classList.toggle('show')

}


window.addEventListener("scroll", function(event) {
    
    const envelope = document.getElementById('envelope')
    let top = this.scrollY;
    
    if(top > 150){
        envelope.classList.add("visible")
    }else{
        envelope.classList.remove('visible')
    }
  
}, false);

// Dropdown 

function showDropdown(){
    document.getElementById('dropdown-menu').classList.toggle('show')

}


var onresize = function(e) {
    width = e.target.outerWidth;
    height = e.target.outerHeight;
    if(width > 900){
        document.getElementById('dropdown-menu').classList.remove('show')
    }
    
 }
 window.addEventListener("resize", onresize);


