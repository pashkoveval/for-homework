
// неразобрался как всталять картинки под каждый слот свою картинку ;((((

const products = [
    { id: 1, title: 'Notebook', price: 120000, img: 'img/msi.jpg' },
    { id: 2, title: 'Mouse', price: 1500, img: 'img/mause.jpg' },
    { id: 3, title: 'Keyboard', price: 5000, img: 'img/keyboard.jpg' },
    { id: 4, title: 'Gamepad', price: 4500, img: 'img/gamepad.jpg' },
];

const renderProduct = (title, price, img="") => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <img src="${img}" alt="" class="img">
                <p>${price}</p>
                <button class="by-btn">Добавить в корзину</button>
              </div>`;
};

const renderProducts = list => {
    const productList = list.map(item => renderProduct(item.title, item.price, item.img));
    // убераем запятую через .join(' ')
    document.querySelector('.products').innerHTML = productList.join(' ');
};

renderProducts(products);
