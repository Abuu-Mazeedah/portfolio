window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 10)
});


// show/hide faq

const faqs = document.querySelectorAll('.faq');
faqs.forEach(element => {
    element.addEventListener('click', () => {
        element.classList.toggle('open');

        // change icon
        const icon = element.querySelector('.faq-icon i');
        if (icon.className === "uil uil-plus") {
            icon.className = 'uil uil-minus';
        }
        else
            icon.className = 'uil uil-plus';
    });
});

// show nav menu

const menu = document.querySelector('.nav-menu');
const menuBtn = document.querySelector('#open-menu-btn');
const menuBtn2 = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    menuBtn.style.display = "none";
    menuBtn2.style.display = "inline-block";
})
menuBtn2.addEventListener('click', () => {
    menu.style.display = "none";
    menuBtn.style.display = "inline-block";
    menuBtn2.style.display = "none";
})


// testing arrowFunction

// let book = {
//     title: "alawiye",
//     related: ["the yoruba text for every Children"],
//     showRelated: function(){
//         this.related.forEach(relatedBooks => {
//             console.log('title: ' + this.title);
//             console.log('Related books: '+ relatedBooks);
//         });
//     },
// }

// book.showRelated();