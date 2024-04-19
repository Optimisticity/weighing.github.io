function price(){
    mass = document.getElementById("chicken_data").value
    cash_due = (mass * 500).toFixed(0)
    mass == "" ? document.getElementById("final_price").innerHTML = `Please Input the correct weight!`:document.getElementById("final_price").innerHTML = `The Total amount payable is Rs. ${cash_due}`;
    
}
document.getElementById("chicken_data").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        event.preventDefault();
        price();
    }
})
document.querySelectorAll("h1[id='final_price']").forEach(function(h1){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    h1.style.color ='#'+randomColor;
    })