const elementsWithPhone = document.getElementById('elements-with-phone')
const dropdown = document.querySelectorAll('.questions_question-plus')
const blockDropDown = document.querySelectorAll('.questions-content')

let nowPositionX = 0
let nowPositionY = 0

function positionXY() {
    if(nowPositionX == 0 && nowPositionY == 0){
        nowPositionX = 15
    } else
    if(nowPositionX == 15 && nowPositionY == 0){
        nowPositionY = 15
    } else
    if(nowPositionX == 15 && nowPositionY == 15){
        nowPositionX = 0
    } else
    if(nowPositionX == 0 && nowPositionY == 15){
        nowPositionY = 0
    }
    console.log(nowPositionX);
    console.log(nowPositionY);
    wheelElements(elementsWithPhone)

}


function wheelElements(x) {
    x.style.transform = `translate(${nowPositionX}px , ${nowPositionY}px)`
    setTimeout(positionXY, 200)
}


setTimeout(positionXY, 100)



const btnId = []

dropdown.forEach(btn =>{
    let id = btn.dataset.button
    btnId.push(id)
})

function openQuestion(event) {
    const buttonId = event.target.dataset.button;

    if (buttonId === btnId[0]) {
        rotate(buttonId)
        openBlockId(buttonId)
      } else
    if (buttonId === btnId[1]) {
        rotate(buttonId)
        openBlockId(buttonId)
      } else 
    if (buttonId === btnId[2]) {
        rotate(buttonId)
        openBlockId(buttonId)
      } else 
    if (buttonId === btnId[3]) {
        rotate(buttonId)
        openBlockId(buttonId)
    } else 
    if (buttonId === btnId[4]) {
        rotate(buttonId)
        openBlockId(buttonId)
      }
}

dropdown.forEach(btn =>{
    btn.addEventListener('click', openQuestion)
})

function openBlockId(id) {
    blockDropDown.forEach(el =>{
        if(el.dataset.button === id){
            if(el.style.display == ''){
                el.style.display = 'flex'
                setTimeout(() => {
                    el.style.transform = 'scale(1)'
                }, 1);
            } else 
            if(el.style.display == 'flex'){
                setTimeout(() => {
                    el.style.display = ''
                }, 500);
                el.style.transform = 'scale(0)'
            }
        }
    } 
)
}

function rotate(id) {
    dropdown.forEach(el =>{
        if(el.dataset.button === id){
            if(el.style.transform == ''){
                el.style.transform = 'rotate(45deg)'
            } else
            if(el.style.transform == 'rotate(45deg)'){
                el.style.transform = ''
            }
        }
    })
}