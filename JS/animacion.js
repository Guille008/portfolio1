
const container = document.querySelector('.contDeco1');

container.addEventListener('mousemove', function (e) {
    const circle = document.createElement('span');

    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    circle.style.left = x + 'px';
    circle.style.top = y + 'px';

    const size = Math.random() * 100;
    circle.style.width = 20 + size + 'px';
    circle.style.height = 20 + size + 'px';

    circle.classList.add('bubble');
    container.appendChild(circle);

    setTimeout(() => {
        circle.remove();
    }, 1800);
});
