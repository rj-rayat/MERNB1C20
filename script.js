const main = document.getElementById('main')


const section = document.createElement('section');
main.appendChild(section)

const h1 = document.createElement('h1')
h1.innerText = "Second Section"
section.appendChild(h1)


const ul = document.createElement('ul')
section.appendChild(ul)

const li1 = document.createElement('li')
li1.innerText = "Bangladesh";
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = "Argentina";
ul.appendChild(li2)

const li3 = document.createElement('li')
li3.innerText = "Brazil";
ul.appendChild(li3)

section.classList.add('section')

console.log(main)