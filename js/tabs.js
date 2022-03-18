const tabButtons = document.querySelectorAll('.design-list__item')
const tabDescriptions = document.querySelectorAll('.design__descr')
const tabImages = document.querySelectorAll('.design-images')
const featureImages = document.querySelectorAll('.feature__img')
const titlePage = document.querySelector('title')
const tabsTitle = document.querySelectorAll('.design__title')

const changeContent = (array, value) => {
    array.forEach((elem) => {
        if (elem.dataset.tabsField === value) {
            elem.classList.remove('hidden')
        } else {
            elem.classList.add('hidden')
        }
    })
}

tabButtons.forEach((tabButton) => {
    tabButton.addEventListener('click', (event) => {
        const dataValue = tabButton.dataset.tabsHandler

        changeContent(tabDescriptions, dataValue)
        changeContent(tabImages, dataValue)
        changeContent(featureImages, dataValue)
        changeContent(tabsTitle, dataValue)

        tabButtons.forEach((btn) => {
            if (btn === event.target) {
                titlePage.innerHTML = btn.textContent
                btn.classList.add('design-list__item_active')
            } else {
                btn.classList.remove('design-list__item_active')
            }
        })
    })
})