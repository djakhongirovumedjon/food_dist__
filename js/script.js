let inpNeeds = document.querySelectorAll('.order__input')
let form = document.forms.reg
let allInps = document.querySelectorAll('form input')



let regex = {
    name: /^[a-z ,.'-]+$/g,
    phone: /^998[012345789][0-9]{8}$/g
}


function validate(regex, field) {
    if (regex.test(field.value)) {
      
        field.style.borderColor = "green"
    } else {
      
        field.style.borderColor = "red"
    }

}

allInps.forEach(inp => {
    inp.onkeyup = () =>{
      validate(regex[inp.name], inp)

    }
});

form.onsubmit = (event) => {
    event.preventDefault();
    let errorss = 0

    inpNeeds.forEach(inp => {
        inp.classList.remove('invalid')
        if (inp.value.length < 1) {

            inp.classList.add('invalid')
            errorss++
        }
    })
    
    
    ;


    if (errorss > 0) {
        console.log('error');
    } else {
        submit(form)
    }

}


function submit(formElement) {
    let user = {}

    let fm = new FormData(formElement)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}



let slide = document.querySelectorAll('.offer__slide')
let close = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let text = document.querySelector('#current')
let total = document.querySelector('#total')


let slide_next = 0

close.onclick = () => {
    slide_next--
    shou_slide(slide_next)
}


next.onclick = () => {
    slide_next++
    shou_slide(slide_next)
}


function shou_slide(nc) {
    if (nc >= slide.length) {
        slide_next = 0
    }

    if (nc == -1) {
        slide_next = slide.length - 1
    }
    slide.forEach((slide) => {
        slide.style.display = "none"
        slide.classList.remove('fade')
    })
    slide[slide_next].classList.add('fade')
    slide[slide_next].style.display = "block"

    text.innerHTML = '0' + (slide_next + 1)
}

shou_slide()


let tabcontents = document.querySelectorAll('.tabcontent')
let btns = document.querySelectorAll('.tabheader__item')

showTabs()

function showTabs(n = 0) {
    tabcontents.forEach(element => {
        element.style.display = "none"
        element.classList.remove('fade')
    });
    tabcontents[n].classList.add('fade')
    tabcontents[n].style.display = "block"
}


btns.forEach((btn, index) => {
    btn.onclick = () => {
        btns.forEach(el => el.classList.remove('tabheader__item_active'))

        btn.classList.add('tabheader__item_active')
        showTabs(index)
    }
}) 

///timer


const deadline = 'December 2022 31 23:59'


function getTime(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date()),
      days = Math.round(t / (1000 * 60 * 60 * 24)),
      hours = Math.round((t / (1000 * 60 * 60)) % 24),
      minutes = Math.round((t / 1000 / 60) % 60),
      seconds = Math.round((t / 1000) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}

function setTime(selector, endtime) {
    const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#min +utes'),
        seconds = timer.querySelector('#seconds'),
        updateInt = setInterval(updateTime, 1000)


    function updateTime() {
        const t = getTime(endtime)

        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds

        if(t.t <= 0) {
            clearInterval(updateInt)
        }
    }

}

setTime('.timer',deadline)



