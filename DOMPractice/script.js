const container = document.querySelector("body");

// For h1.titleWebpage
const titleWebpage = document.createElement('h1');

titleWebpage.classList.add('titleWebpage');
titleWebpage.textContent = 'TITLE OF YOUR WEBPAGE'

container.appendChild(titleWebpage)

// For Div element.content
const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is my glorius text-content!'

container.appendChild(content)

// For red <p>
const redText = document.createElement('p')

redText.classList.add('red')
redText.textContent = 'Hey I\'m red!'
redText.style.color = 'red'

container.appendChild(redText)

// For blue h3
const blue = document.createElement('h3')
blue.classList.add('blueHeader')
blue.textContent = 'I\'m a blue h3!'
blue.style.color = 'blue'

container.appendChild(blue)

//For pink div
const pinkBox = document.createElement('div')
pinkBox.setAttribute('style', 'background-color: pink; border: 1px solid black;')
pinkBox.classList.add('pinkBox')
container.appendChild(pinkBox)

//For div.pinkBox h1
const inDiv = document.createElement('h1')
inDiv.textContent = 'I\'m in a div!'
pinkBox.appendChild(inDiv)

//For div.pinkBox p
const alsoInDiv = document.createElement('p')
alsoInDiv.textContent = 'Me too!'
pinkBox.appendChild(alsoInDiv)

//For button in pinkBox
const btn = document.createElement('button')
btn.textContent= 'sumbit'
btn.addEventListener('click', function(e){
    console.log(e.target.style.background = 'blue')
})
pinkBox.appendChild(btn)
const btns = document.querySelectorAll('button');
btns.forEach((button) => {
    button.addEventListener('click',() => {
        alert(button.id);
    })
    
}) 