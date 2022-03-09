
const heart = document.querySelectorAll('.transparent')
const boxes = document.querySelector('.boxes')
heart.forEach((ne)=>{
  ne.addEventListener('click',()=>{
    ne.classList.toggle('red')
  })

  
})

boxes.addEventListener('click',e=>{
 
  if(e.target.classList.contains('plus')){


    let quantity=Math.floor(e.target.nextElementSibling.textContent++)
    let price= Math.floor(e.target.parentElement.previousElementSibling.textContent)
    total = price*(quantity+1)

    let output = `${total}`

    e.target.parentElement.nextElementSibling.nextElementSibling.textContent=output
}
if(e.target.classList.contains('minus')){

  if(e.target.previousElementSibling.textContent>1){

 
  let quantity=Math.floor(e.target.previousElementSibling.textContent--)
  let price= Math.floor(e.target.parentElement.previousElementSibling.textContent)
  total = price*(quantity-1)

  let output = `${total}`

  e.target.parentElement.nextElementSibling.nextElementSibling.textContent=output
}
}


if(e.target.classList.contains('b')){
  e.target.parentElement.parentElement.remove()
}


})
