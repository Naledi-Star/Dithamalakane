let dithamalkn = [
    {
        thamalkn:`ka itaya mpipi, mpipi a thoka lebadi`,
        thaloso: `metsi`
    },
    {
        thamalkn:`ka itaya mpipi, mpipi a tswa lebadi`,
        thaloso: `seretse`
    },
    {
        thamalkn:`monna yo moleele, rahiho`,
        thaloso: `mosi`
    },
    {
        thamalkn:`O seka wa mpona ke le kana, ke monkane wa rrago`,
        thaloso: `sesana`
    },
    {
        thamalkn:`banna ba ditedu tse di tshweu ko tshimong`,
        thaloso: `mmidi`
    },
    {
        thamalkn:`Sa re nyedi, sa re tseke`,
        thaloso: `Legadima`
    },
    {
        thamalkn:`Monna yo moleele, o tshologa ditete`,
        thaloso: `Kerese`
    },
];

const quoteBtn = document.getElementById('quote-btn');
const quote = document.querySelector('.quote-area');
const thaloso = document.querySelector('.thaloso');
const thamalkn = document.querySelector('.thamalkn')
const description = document.getElementById('description'); 



quoteBtn.addEventListener('click', ()=>{
    let random =  Math.floor(Math.random() * dithamalkn.length);

    thamalkn.innerHTML = dithamalkn[random].thamalkn;
    thaloso.innerHTML = dithamalkn[random].thaloso;
    thaloso.style.display = 'none'

    
    
})

// description.addEventListener('click', ()=>{
//     btn.style.display = 'none';
   
// })

 

let display = 0;

description.addEventListener('click', ()=>{
    console.log('clicked')
    if (display==1){
        thaloso.style.display = 'block';
        display = 0;
    }
    else{
        thaloso.style.display = 'none';
        display = 1;
    }
    
})

// function hideShow(){
//     if (display==1){
//         thaloso.style.display = 'block';
//         display = 0;
//     }
//     else{
//         thaloso.style.display = 'none';
//         display = 1;
//     }
    

// }


