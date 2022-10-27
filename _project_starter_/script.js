const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        panel.classList.add('active')
        removeActiveClasses
    })
})

function removeActiveClasses() {
    panels.forEach(() => {
        panel.classList.remove('active')
    })
}