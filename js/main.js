document.addEventListener('DOMContentLoaded', () => {
    
    const contentBtn = document.querySelectorAll('.pagination__link');
    const content = document.querySelectorAll('.content');

    for (let i = 0; i < contentBtn.length; i++) {

        contentBtn[i].addEventListener('click', function(e) {

            const activeBtnAttr = e.target.getAttribute('data-content-link');

            for (let k = 0; k < contentBtn.length; k++) {

                const contentAttr = content[k].getAttribute('data-content');
                
                if (activeBtnAttr === contentAttr) {
                    contentBtn[k].classList.add('active');
                    content[k].classList.add('active');
                } else {
                    contentBtn[k].classList.remove('active');
                    content[k].classList.remove('active');
                }
            };

            for (let i = 0; i < content.length; i++) {
                content[i].classList.remove('prev-slide');
                content[i].classList.remove('next-slide');
            }
            
            if (content[i].classList.contains('active') && i !== contentBtn.length - 1 && i !== 0) {
                content[i].previousElementSibling.classList.add('prev-slide');
                content[i].nextElementSibling.classList.add('next-slide');
            }
            else if (i === 0) {
                content[i].nextElementSibling.classList.add('next-slide');
                content[--content.length].classList.add('prev-slide');
            }
            else if (i === contentBtn.length - 1) {
                content[i].previousElementSibling.classList.add('prev-slide');
                content[0].classList.add('next-slide');
            }
        });
    };

    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true
    });

    // photo gallery

    const img = [
        'baikal-1.jpg',
        'baikal-2.jpg',
        'baikal-3.jpg',
        'baikal-4.jpg',
        'baikal-5.jpg',
        'baikal-6.jpg',
        'baikal-7.jpg',
        'baikal-8.jpg',
        'baikal-9.jpg'
    ];

    const photoWrapper = document.querySelector('.photo__wrapper');
    let count = img.length;

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    function randomInt(min, max) {
        let random = min + Math.random() * (max + 1 - min);
        return Math.floor(random);
    }

    function init() {
        shuffle(img);
        for(let i = 0; i < img.length; i++) {
            let card = document.createElement('div');
            card.classList.add('card');
            card.style.background = `url('../images/${img[i]}')`;
            card.style.backgroundSize = 'cover';
            card.style.transform = `rotate(${randomInt(-15, 15)}deg) translate(${randomInt(-40, 40)}px, ${randomInt(-40, 40)}px)`;
            photoWrapper.append(card);
        }
    }

    init();

    photoWrapper.addEventListener('click', event => {
        if(event.target.classList.contains('card')) {
            event.target.classList.add('hide');
            count--;
        }
        if(count === 0) {
            photoWrapper.innerHTML = '';
            init();
            count = img.length;
        }
    });
   
});