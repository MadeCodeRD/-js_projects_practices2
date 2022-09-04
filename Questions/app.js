//using selectors inside the element
const questions=document.querySelectorAll('.question');

questions.forEach( article =>{
       const btn= article.querySelector('.question-btn');
       btn.addEventListener('click', ()=>{
        article.classList.toggle('show-text');
         questions.forEach(otherArticle =>{
            if(article !== otherArticle){
                otherArticle.classList.remove('show-text');
            }
         });   

       });
});






// traversing the dom
// const btns=document.querySelectorAll('.question-btn');

// btns.forEach(btn =>{
//     btn.addEventListener('click', e =>{
//        const question=e.currentTarget.parentElement.parentElement;
//        question.classList.toggle('show-text');
//     });
// });



