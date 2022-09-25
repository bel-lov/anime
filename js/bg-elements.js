const bgElements = () => {
    const elements = document.querySelectorAll('.set-bg');

    for (elem in elements) {
        console.log(elem.value);
    }

    for (let i = 0; i < elements.length; i++) {
        const src = elements[i].dataset.setbg;
        elements[i].style.backgroundImage = `url(${src})`;
    }
}

bgElements()