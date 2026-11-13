console.log('Работа с API подключена');

const student = {
    name: 'Кирилл',
    group: 'ИС-1-25',
    age: 16,
    city: 'Чебоксары',
    subjects: ['HTML', 'CSS', 'JavaScript', 'PHP']
};

console.log(student)
console.log(student.name)
console.log(student.subjects)

const jsonText = JSON.stringify(student);

console.log('JSON:', jsonText)

const restoredStudent = JSON.parse(jsonText);

console.log('После преобразования', restoredStudent)

const jsonRes = document.querySelector('#json-result')

jsonRes.textContent = `${student.city}, Кол-во предметов: ${student.subjects.length}`

// Задача 2

const loadPostBtn = document.querySelector('#load-post');

const postResult = document.querySelector('#post-result');

loadPostBtn.addEventListener('click', function() {
    
    postResult.textContent = 'Загрузка...'

    fetch('data/post.json')

        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка HTTP: ' + response.status);
            }

            return response.json();
        })
        .then(data => {
            postResult.textContent = 
                `Заголовок записи: ${data.title}`;
            
                console.log(data)
        })

        .catch(error => {
            postResult.textContent = 'Ошибка загрузки данных';

            console.error(error);
        });
});

// Задача 3

const loadUsersBtn = document.querySelector('#load-users');

const usersResult = document.querySelector('#users-result');

loadUsersBtn.addEventListener('click',function (){

    usersResult.textContent = 'Загрузка пользователей...'

    fetch('data/users.json')
        .then(response => {
            if(!response.ok) {
                throw new Error('Ошибка HTTP: ', response.status);
            }

            return response.json();
        })

        .then(users =>{
            usersResult.textContent = '';
            const count = document.createElement('p');
                count.textContent = `Всего пользователей: ${users.length}`;
                usersResult.prepend(count);
            for (const user of users) {
                const card = document.createElement('div');
                card.className= 'card';

                const title = document.createElement('h3');
                title.textContent= user.name;

                const email = document.createElement('p');
                email.textContent= `Email: ${user.email}`;
                
                const phone = document.createElement('p');
                phone.textContent= `phone: ${user.phone}`;
                
                const city = document.createElement('p');
                city.textContent= `city: ${user.address.city}`;

                card.append(title, email, phone, city);
                usersResult.append(card);
            }
        })
        .catch(error =>{
            usersResult.textContent = 'Не удалось загрузить пользователей';
            usersResult.className = 'error';
            console.error(error)
        });
});

// Задача 4.

const loadProductsBtn = document.querySelector('#load-products');
const productsResult = document.querySelector('#products-result');
loadProductsBtn.addEventListener('click', function () {
  productsResult.textContent = 'Загрузка товаров...';
  fetch('data/products.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка HTTP: ' + response.status);
      }
      return response.json();
    })
    .then(data => {
      productsResult.textContent = '';
      for (const product of data.products) {

        const card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('h3');
        title.textContent = product.title;

        const description = document.createElement('p');
        description.textContent = `Описание: ${product.description}`;
        
        const rating = document.createElement('p');
        rating.textContent = `рейтинг: ${product.rating}🔥`;

        const price = document.createElement('p');
        price.textContent = `Цена: ${product.price}`;

        const category = document.createElement('p');
        category.textContent = `Категория: ${product.category}`;
        
        const img = document.createElement('img');
        img.src = product.img;
        img.width = '200';
        img.style.borderRadius = '8px'
        card.style.backgroundColor = 'lightgreen'
        card.append(img, title, price, description, rating, category);
        productsResult.append(card);

      }

    })

    .catch(error => {

      productsResult.textContent =
        'Не удалось загрузить каталог';

      console.error(error);

    });

});
