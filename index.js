const msg_view = document.getElementById("message_view");


function feedDog(){
    msg_view.textContent = "Thank you";
    document.getElementById("source_img").src="assets/dog_pic.png";
}

function feedDogNo(){
    msg_view.textContent = "I hate you!";
    document.getElementById("source_img").src="assets/saddog_pic.png";
}
