let checkBoxs = document.querySelectorAll('input[type="checkbox"]');
let selectedText = document.querySelector('.selected-text');
let submitBtn = document.querySelector('.submit-btn');
let result = document.querySelector('.result');
let closeBtn = document.querySelector('.close-btn');
let arr =[];

submitBtn.addEventListener('click',function(){
    if(!result.classList.contains('show')){
        console.log('Yes')
        result.classList.add('show');
        addToArr();
    }else{
        result.classList.remove('show')
    }
});

closeBtn.addEventListener('click',function(){
    result.classList.remove('show');
});

function addToArr(){
    checkBoxs.forEach(function(el){
        if(el.checked){
            if(!arr.includes(el)){
                arr.push(el);
            }
        }else{
            arr = arr.filter(function(val){
                return val != el;
            })
        }
        selectedText.innerHTML = arr.length;
    });
};


