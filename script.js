const btnRightSlide = document.querySelector('.btnSlideRight');
const btnLefttSlide = document.querySelector('.btnSlideLeft');
const imgSlide = document.querySelectorAll('.imgCarou');
let index = 0;
let onTransit = false;
let maxIndex = imgSlide.length-1;

btnRightSlide.addEventListener('click', () => {
    if (!onTransit && index < maxIndex) {
        onTransit = true;
        imgSlide[index].classList.remove('active');
        index++;
        
        imgSlide[index].classList.remove('left');
        imgSlide[index].classList.add('active');
        imgSlide[index-1].classList.add('right');
        
       
    setTimeout(() => {
        onTransit = false;
    }, 1000);
   }
})

btnLefttSlide.addEventListener('click', () => {
    if(!onTransit && index > 0) {
        onTransit = true;
        imgSlide[index].classList.remove('active')
        index--;

        imgSlide[index].classList.remove('right');
        imgSlide[index].classList.add('active');
        imgSlide[index+1].classList.add('left');

        setTimeout(() => {
            onTransit = false;
        }, 1000);
    }
})
  
async function callApi() {
    const url = "datas.json"
    const fetcher = await fetch(url)
    const data = await fetcher.json()
    return data;
}


window.onload = async function() {
    const data = await callApi();

    document.querySelector(".title").innerHTML = data.titre1;
    document.querySelector(".title2").innerHTML = data.titre2;
    document.querySelector(".title3").innerHTML = data.titre3;
    document.querySelector(".title4").innerHTML = data.titre4;
}


