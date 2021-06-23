const body = document.querySelector('body');

for (let i = 1; i <= 100; i++) {
    const d = document.createTextNode(i);
    const span = document.createElement('span');
    span.appendChild(d);
    body.appendChild(span);
}
