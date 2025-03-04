var quotes = [{qt:"The only way to do great work is to love what you do.",author:"Steve Jobs"}, 
    {qt:"The mind is everything. What you think you become.",author: "Buddha"}, 
    {qt:"The best way to predict the future is to create it." ,author:"Abraham Lincoln"},
    {qt:"A journey of a thousand miles begins with a single step." , author:"Lao Tzu" },
    {qt:"The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela"}];

function getQuotes(){
    var rndmqt= Math.floor(Math.random()*quotes.length);
    document.querySelector(".text").innerHTML= quotes[rndmqt].qt; 
    document.querySelector(".author").innerHTML = "- " + quotes[rndmqt].author;
}
document.querySelector(".btn").addEventListener("click",getQuotes);