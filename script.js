const loveMe = document.querySelector('.loveMe')
const times = document.getElementById('times')

let clickTime = 0
let timesClicked = 0
//You can use 'dbclick'
loveMe.addEventListener('click', (e)=>{
    if(clickTime===0){
        clickTime = new Date().getTime()
    }else{
        if((new Date().getTime()-clickTime) < 800){
            createHeart(e)
            clickTime = 0
        }else{
            clickTime = new Date().getTime()
        }
    }
})

const createHeart = (e)=>{
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    heart.classList.add('whiteheart')
    
    heart.style.top = `50%`
    heart.style.left = `50%`

    loveMe.appendChild(heart)

    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}