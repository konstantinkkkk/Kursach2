const tabBtns = document.querySelectorAll('.tabs__btns-item');
const tabContents = document.querySelectorAll('.tabs__content-item');

const openContent = (e) => {
    const target = e.currentTarget;
    const tabButton = target.dataset.button;
    tabBtns.forEach(btn => {
        btn.classList.remove('tabs__btns-item--active');
    });

    tabContents.forEach(tab => {
        tab.classList.remove('tabs__content-item--active');
    });

    target.classList.add('tabs__btns-item--active');
    document.querySelector(`#${tabButton}`).classList.add('tabs__content-item--active');
}

tabBtns.forEach(btn => {
    btn.addEventListener('click', openContent)
});