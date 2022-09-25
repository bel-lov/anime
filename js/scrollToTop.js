const scrollToTop = () => {
    const scrollTop = document.querySelector('#scrollToTopButton');
    console.log(scrollTop);

    scrollTop.addEventListener('click', (event) => {
        event.preventDefault();

        seamless.scrollIntoView(document.querySelector(".header"), {
            behavior: "smooth",
            block: "center",
            inline: "center",
        });
    })
}

scrollToTop()