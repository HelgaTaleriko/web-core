
//
// кнопки скрыть - показать
const screenWidth = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth;

const onOpen = () => {
    document.getElementById('brands1_1').style.display = 'none';
    document.getElementById('brands1_2').style.display = 'block';

    const elements = document.getElementsByClassName("brands-slide");

    for (let i = 0; i < elements.length; i++) {
        elements[i].style.display = 'flex'
    }
    console.log()
}

const onClose = () => {
    // document.getElementById('brands1').style.display='none';
    document.getElementById('brands1_2').style.display = ' none';
    document.getElementById('brands1_1').style.display = 'block';
    const elements = document.getElementsByClassName("brands-slide");
    // const numOfElementsInRow = screenWidth < 1120 ? 3 : 4
    const numOfElementsInRow = (width) => {
        if (width < 1016) {
            return 3
        } else {
            return 4
        }
    }
    for (let i = numOfElementsInRow(screenWidth) * 2; i < elements.length; i++) {
        elements[i].style.display = 'none'
    }
}