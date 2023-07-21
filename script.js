const dropDownBoxes = document.querySelectorAll('.accordion-title');

dropDownBoxes.forEach(box => {
    box.addEventListener('click', (e) => {
        dropDownBoxes.forEach(box => {
            if (e.target != box) {
                box.parentElement.open = false;
            }
        })

    })
})

