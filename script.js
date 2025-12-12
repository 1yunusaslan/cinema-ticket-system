const seats = document.getElementsByClassName('seat');
const counts = document.getElementById('count');
const p = document.getElementById('text');
const movieSelecet = document.getElementById('movie');
 
let number = 0;




for (let i = 0; i < seats.length; i++) {
    seats[i].addEventListener('click', function(e) {
        
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
        counts.textContent = `${number} adet koltuk seçildi. `;
        p.appendChild(counts);
    });
    
};

