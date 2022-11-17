function handleButtonClick(event){
    Cookies.set(`Selection`, `Tea`);
} 


function handleButtonClick2(event){
    Cookies.set(`Selection`, `Hot_Chocolate`);
}


function handleButtonClick3(event){
    Cookies.set(`Selection`, `Coffee`);
}


document.getElementById(`tea`).addEventListener(`click`, handleButtonClick)
document.getElementById(`hotChocolate`).addEventListener(`click`, handleButtonClick2)
document.getElementById(`coffee`).addEventListener(`click`, handleButtonClick3)

