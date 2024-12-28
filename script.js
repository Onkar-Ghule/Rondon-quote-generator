var btn = document.querySelector('button');
var para = document.querySelector('.container p');
var heading = document.querySelector('.container h1');

btn.addEventListener('click', ()=> {
    var randomNumber = Math.floor(Math.random()*5);
    para.textContent = quote[randomNumber].quote;
    heading.textContent =  quote[randomNumber].writer;
});
var quote = [
    {
        quote: "The only way to do great work is to love what you do.",
        writer: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        writer: "Winston Churchill"
    },
    {
        quote: "Believe you can and you're halfway there.",
        writer: "Theodore Roosevelt"
    },
    {
        quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        writer: "Zig Ziglar"
    },
    {
        quote: "Happiness is not something ready-made. It comes from your own actions.",
        writer: "Dalai Lama"
    },
];

