import '../scss/main.scss';
import Glide from '@glidejs/glide'

// Variables
const menuCard = document.querySelectorAll(".menu__card");
const footerYear = document.querySelector(".currYear");

footerYear.innerHTML = new Date().getFullYear();


// ============ Modal JS ============ //

console.log(menuCard.length); // Returns total number of menu cards

for(let i = 0; i < menuCard.length; i++)
{
    const el = menuCard[i];

    menuCard[i].addEventListener("click", function(e) {  
        
        let modalHtml = 
        `
        <section class="modal">
            <figure class="modal__card">
                <div class="modal__info">
                    <div class="modal__hero">
                        <img src="${el.dataset.img}" class="modal__img"/>
                    </div>
                    <div class="modal__text">
                        <h6 class="modal__text-name">${el.dataset.name}</h6>
                        <p class="modal__text-price">${el.dataset.price}</p>
                        <p class="modal__text-desc">${el.dataset.description}</p>
    
                        <div class="modal__text-ins">
                            <h6 class="modal__text-msg">Special Instructions:</h6>
                            <textarea placeholder="Add a Note..." class="modal__text-area"></textarea>
                        </div>
    
                    </div>
                </div>
                <div class="modal__actions">
                    <div class="modal__purchase">
                        <form class="modal__form" method="POST">
                            <div class="modal__purchase-left">
                                <input type="button" value="-" class="modal__quantity modal__quantity-minus">
                                <input required type="number" step="1" min="1" max="" value="1" title="Qty" class="modal__quantity modal__quantity-num" size="4" pattern="" inputmode="">
                                <input type="button" value="+" class="modal__quantity modal__quantity-plus">
                            </div>
                            <div class="modal__purchase-right">
                                <p class="modal__total">${el.dataset.price}</p>
                                <a href="#" class="btn">Add To Cart</a>
                            </div>
                        </form>
                    </div>
                </div>
    
                <div class="modal__exit">
                    <a href="#" class="modal__close">
                        <svg class="modal__icon">
                            <use href="img/sprite.svg#icon-x"></use>
                        </svg>
                    </a>
                </div>
            </figure>
    
    
        </section>
    
        `
    
        document.body.insertAdjacentHTML('beforeend', modalHtml);

        const closeMenuCardModalBtn = document.querySelector(".modal__exit");

        closeMenuCardModalBtn.addEventListener("click", function() {  
            // Remove element
        });

    });
}


// ============ Modal JS ============ //


// GLIDE

const config = {
    type: "slider",
    perView: 1,
    autoplay: 4000,
    hoverpause: true
    
}

new Glide('.glide', config).mount()

// GLIDE