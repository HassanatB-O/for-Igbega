let click = 0

document.querySelector(".uti-btn").addEventListener('click', () =>{
    click ++
    if(click % 2 === 1){
        document.querySelector(".uti-msg").style.display = "block"
    }
    else{
        document.querySelector(".uti-msg").style.display = "none"
    }
})

document.querySelector(".ame-btn").addEventListener('click', () =>{
    click ++
    if(click % 2 === 1){
        document.querySelector(".ame-msg").style.display = "block"
    }
    else{
        document.querySelector(".ame-msg").style.display = "none"
    }
})

document.querySelector(".h-btn").addEventListener('click', () =>{
    click ++
    if(click % 2 === 1){
        document.querySelector(".h-msg").style.display = "block"
    }
    else{
        document.querySelector(".h-msg").style.display = "none"
    }
})
