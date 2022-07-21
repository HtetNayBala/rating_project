let btn = document.querySelectorAll('.btn');
let selectedText = document.querySelector('.selected-text');
let submitBtn = document.querySelector('.submit-btn');
let result = document.querySelector('.result');
let closeBtn = document.querySelector('.close-btn');
let arr =[];

btn.forEach(function(btn){
    btn.addEventListener('click',function(el){

        let currentBtn = el.currentTarget;
        arr.push(currentBtn);

    })
})


submitBtn.addEventListener('click',function(){

    selectedText.innerHTML = arr.length;

    if(!result.classList.contains('show')){
        result.classList.add('show');
    }else{
        result.classList.remove('show');
    };
});

closeBtn.addEventListener('click',function(){
    if(result.classList.contains('show')){
        result.classList.remove('show');
    }
})

