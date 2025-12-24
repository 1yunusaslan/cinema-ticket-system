const seats = document.getElementsByClassName('seat');
const counts = document.getElementById('count');
const p = document.getElementById('text');
const selectMovie = document.getElementById('movie');
const ticketButton = document.getElementById('ticket-button');


let number = 0;
let price = 0;

function selectSeat() {  
    for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener("click", function(e) {
        
        // reserved ise tıklanamasın
        if (e.target.classList.contains('reserved')){
            return;
        } 
        // selected ise tekrar seçilemesin
        if (e.target.classList.contains('selected')){
            return;
        }
        
        e.target.classList.add('selected');
        number++;
    });
};
}

function movieOption() {  
    selectMovie.addEventListener("change", function () {
    //film seçeneği değiştikçe price değeri değişicek      
    price = number*this.value;
    }); 
}

ticketButton.addEventListener("click", function () { 
    counts.textContent = `${number} adet koltuk seçildi. ${price} ücret ödenecek.`;
    p.appendChild(counts);
    if(price!==0 && number!==0){
        return price;
    }
    else{
        counts.textContent="Lütfen Film seçiniz.";    
    }

})

selectSeat();
movieOption();