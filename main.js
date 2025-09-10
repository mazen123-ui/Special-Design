// change header background
let header = document.querySelector('header')
let sources = ['imgs/01.jpg', 'imgs/02.jpg', 'imgs/03.jpg', 'imgs/04.jpg', 'imgs/05.jpg']
let changeOption = true
let changeBg;

function intervalBg() {
    if (changeOption === true) {
        changeBg = setInterval(() => {
            let randomImg = sources[Math.floor(Math.random() * sources.length)]
            header.style.backgroundImage = `url(${randomImg})`
        }, 15000)
    }
}
intervalBg()
// show navbar in small devices
let menu = document.querySelector('.container i')
let ul = document.querySelector('.links-container')

menu.onclick = () => {
    ul.classList.toggle('open')
    menu.classList.toggle('rotate')
    if (ul.classList.contains('open')) {
        menu.classList.remove('fa-navicon')
        menu.classList.add('fa-close')
    } else {
        menu.classList.remove('fa-close')
        menu.classList.add('fa-navicon')
    }
}
// show and hide settings box with all featurs
let settingsBox = document.querySelector('.settings-box')
let iconBox = document.querySelector('.icon')
let icon = document.querySelector('.icon i')
let lis = document.querySelectorAll('.color-container li')
let btns = document.querySelectorAll('.btns button')

iconBox.onclick = () => {
    settingsBox.classList.toggle('open')
    icon.classList.toggle('fa-spin')
}
window.onload = () => {
    if (localStorage.getItem('main-color')) {
        document.documentElement.style.setProperty('--main-color', localStorage.getItem('main-color'))
        lis.forEach((li) => {
            li.classList.remove('active')
        })
        document.querySelector(`[data-color='${localStorage.getItem('main-color')}']`).classList.add('active')
    }
    if (localStorage.getItem('change-bg') === 'no') {
        changeOption = false
        clearInterval(changeBg)
        btns.forEach((btn) => {
            btn.classList.remove('active')
        })
        document.querySelector(`[data-answer='${localStorage.getItem('change-bg')}']`).classList.add('active')
    } else {
        changeOption = true
        document.querySelector(`[data-answer='${localStorage.getItem('change-bg')}']`).classList.add('active')
    }
}
lis.forEach((li) => {
    li.addEventListener('click', (e) => {
        lis.forEach((li) => {
            li.classList.remove('active')
        })
        e.target.classList.add('active')
        localStorage.setItem('main-color', e.target.dataset.color)
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
    })
})
btns.forEach((btn) => {
    btn.addEventListener(('click'), (e) => {
        btns.forEach((btn) => {
            btn.classList.remove('active')
        })
        e.target.classList.add('active')
        if (e.target.dataset.answer === 'yes') {
            changeOption = true
            intervalBg()
            localStorage.setItem('change-bg', 'yes')
        } else {
            changeOption = false
            clearInterval(changeBg)
            localStorage.setItem('change-bg', 'no')
        }
    })
})
// scroll animation on skills section 
let skillsSectoin = document.querySelector('.skills')
let spans = document.querySelectorAll('.skill span')

window.onscroll = () => {
    if (window.scrollY >= skillsSectoin.offsetTop - 200 || window.scrollY >= skillsSectoin.offsetTop) {
        spans.forEach((span) => {
            span.style.width = span.dataset.progress
        })
    }
}
// show image gallary on full screen 
let imgPreview = document.querySelector('.img-preview')
let close = document.querySelector('.img-preview .img i')
let fullImg = document.querySelector('.img-preview .img img')
let imgTitle = document.querySelector('.img-title')
let imgs = document.querySelectorAll('.gallary .container img')

imgs.forEach((img) => {
    img.addEventListener('click', (e) => {
        imgPreview.style.display = 'block'
        fullImg.src = e.target.src
        imgTitle.innerHTML = e.target.alt
    })
})
close.onclick = ()=> {
    imgPreview.style.display = 'none'
}
// make the copyright year dynamic
let year = document.querySelector('footer p .year')
year.innerHTML = new Date().getFullYear()
// scroll animations usnig intersectionObserver
// for the header section 
let mainText = document.querySelector('.main-content')
let observer1 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('load')
        }else{
            entry.target.classList.remove('load')
        }
    })
},{})
observer1.observe(mainText)
// for the about-us section
let aboutText = document.querySelector('.about-us .container .text')
let aboutImg = document.querySelector('.about-us .container .img')
let observer2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade-in')
        }else{
            entry.target.classList.remove('fade-in')
        }
    })
},{})
observer2.observe(aboutImg)
observer2.observe(aboutText)
// for the gallary section images 
let gallaryImgs = document.querySelectorAll('.gallary .container img')
let observer3 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade-in')
        }else{
            entry.target.classList.remove('fade-in')
        }
    })
},{})
gallaryImgs.forEach((img) => observer3.observe(img))
observer3.observe(aboutImg)
observer3.observe(aboutText)
//for the timeline section
let timelineSection = document.querySelector('.timeline')
let leftBoxs = document.querySelectorAll('.timeline .container .left')
let rightBoxs = document.querySelectorAll('.timeline .container .right')

let observer4 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('reveal')
        }else {
            entry.target.classList.remove('reveal')
        }
    })
},{})
leftBoxs.forEach((left) => {observer4.observe(left)})
rightBoxs.forEach((right) => {observer4.observe(right)})
// for the features section cards 
let featuresCards = document.querySelectorAll('.features .container .card')

let observer5 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('reveal')
        }else {
            entry.target.classList.remove('reveal')
        }
    })
},{})
featuresCards.forEach((card) => {observer5.observe(card)})
// for the testimonials section cards 
let testimonialsCards = document.querySelectorAll('.testimonials .container .card')
let observer6 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('fade-in')
        }else{
            entry.target.classList.remove('fade-in')
        }
    })
},{})
testimonialsCards.forEach((card) => observer6.observe(card))
// for the contact form sectioin
let leftForm = document.querySelector('.contact form .left')
let rightForm = document.querySelector('.contact form .right')

let observer7 = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('slide')
        }else{
            entry.target.classList.remove('slide')
        }
    })
},{})
observer7.observe(leftForm)
observer7.observe(rightForm)