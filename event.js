document.getElementById('update').addEventListener('click', function(){
    const p = document.getElementById('paragraph');
    p.innerText = "Rj Rayat"
})

document.getElementById('update-btn').addEventListener('click', function (){
    const text = document.getElementById('text');
    
    const input = document.getElementById('input')
    const inputValue = input.value

    text.innerText = inputValue;

    input.value = ""
    
})

document.getElementById('comment-btn').addEventListener('click', function(){
   const p = document.createElement('p');

   const comment = document.getElementById('comment-text')
   const text = comment.value;
   
   p.innerText = text;

   const section = document.getElementById('box')
   section.prepend(p)
   
   p.classList.add('comment')

   comment.value = ""
})