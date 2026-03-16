document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector('.nav-item.active')?.classList.remove('active');
        item.classList.add('active');
    });
});
