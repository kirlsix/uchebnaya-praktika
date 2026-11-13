console.log('Интерактивная страница подклюена');


// Задача 1

const container = document.querySelector('#container');

const newParagraph = document.createElement('p');
const newParagraph1 = document.createElement('p');
const newSkills = document.createElement('h2');

newParagraph.textContent =
    'Этот абзац создан с помощью JavaScript';
newParagraph1.textContent =
    'Кирюха ИС-1-25';
newSkills.textContent = 
    'Мои навыки'

newSkills.style.color = 'blue';
container.append(newParagraph);
container.append(newParagraph1);
container.append(newSkills);

// Задача 2.

const taskInput = document.querySelector('#task-input');
const addTaskBtn = document.querySelector('#add-task');
const taskList = document.querySelector('#task-list');

addTaskBtn.addEventListener('click', function() {
    const taskText = taskInput.value.trim()
    if (taskText === '' ) {
        alert('Введите название задачи');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText +' ';

    const deleteBtn=document.createElement('button');
    deleteBtn.textContent = 'Удалить';
    deleteBtn.addEventListener('click',function(){
        li.remove();
    });

    const doneBtn =  document.createElement('button')
    doneBtn.textContent = 'Выполнено'; 
    doneBtn.addEventListener('click', function () { 
        li.classList.toggle('completed'); 
    }); 

    li.append(doneBtn);
    li.append(deleteBtn);
    taskList.append(li);
    taskInput.value= '';
    
})

// Задача 3

const questions = document.querySelectorAll('.question');

for (const question of questions) {
    question.addEventListener('click', function () {

        const answer = question.nextElementSibling;

        answer.style.backgroundColor = 'lightgreen';
        answer.classList.toggle('open');
    });

}

// Задача 4.
const images = [
    'https://avatars.mds.yandex.net/i?id=021898fe85d455fa670b3af47c84493e_l-5746783-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=dcdb5af64b4196f42891731967f0f1aabb8845d2-5676890-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=b3f27c7094b790d06d859597dffc8f02_l-4055806-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=cd9868334bec23ab635ba49988ccb717_l-9182252-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=ce6b441b70c38daea1f4600407e9633cec4790da-4351509-images-thumbs&n=13',
    'https://avatars.mds.yandex.net/i?id=12a838e1cec1eb0003fbba56c90b68ef_l-4303796-images-thumbs&n=13',

]



let currentSlide = 0;

const sliderImage =document.querySelector('#slider-image');

const slideNumber =document.querySelector('#slide-number');

const nextBtn = document.querySelector('#next-slide');

const prevBtn = document.querySelector('#prev-slide');

function showSlide() {
    sliderImage.src = images[currentSlide];

    sliderImage.style.border = '6px solid gold'
    sliderImage.style.borderRadius = '8px'

    slideNumber.textContent = 
        `Слайд ${currentSlide + 1} из ${images.length}`

}

nextBtn.addEventListener('click', function () {
    currentSlide++;

    if (currentSlide >= images.length) {
        currentSlide = 0;
    }

    showSlide();
})
prevBtn.addEventListener('click', function () {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = images.length - 1;
    }

    showSlide();
})
showSlide()



