const slider = document.querySelector('.info-pic .slider');

const leftArrow = document.querySelector('.info-pic .left');
const rightArrow = document.querySelector('.info-pic .right');
const indicatorParent = document.querySelector('.info-pic .controls ul');

var sectionIndex = 0;

function setIndex(){
    document.querySelector('.info-pic .controls .selected').classList.remove('selected');
    slider.style.transform = 'translate('+ (sectionIndex) * - ((1/11)*100) +'%)';
}

document.querySelectorAll('.info-pic .controls li').forEach(function(indicator, ind){
    indicator.addEventListener('click', function(){
        sectionIndex = ind;
        setIndex();
        indicator.classList.add('selected');
    });
});

leftArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
    setIndex();
    indicatorParent.children[sectionIndex].classList.add('selected');
});
rightArrow.addEventListener('click', function(){
    sectionIndex = (sectionIndex < 10) ? sectionIndex + 1 : 10;
    setIndex();
    indicatorParent.children[sectionIndex].classList.add('selected');
});