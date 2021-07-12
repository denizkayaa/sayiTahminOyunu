let min=1 , 
    max=10, 
    kazananSayi=rastgeleKazanan(min,max), 
    tahminHakki=3;

const minSayi = document.getElementsByClassName('min')[0],
    maxSayi = document.getElementsByClassName('max')[0],
    tahminInput = document.getElementById('tahmin-input'),
    tahminBtn= document.getElementById('tahmin-btn'),
    oyun = document.getElementsByClassName('oyun'),
    mesaj = document.getElementsByClassName('mesaj')[0];



minSayi.textContent=min;
maxSayi.textContent=max;


function rastgeleKazanan(min, max){
    return Math.floor(Math.random()*(max-min +1) +min);

    
}


tahminBtn.addEventListener('click', function(){

    const tahminEdilenSayi = tahminInput.value;



    if(tahminEdilenSayi ==="" || tahminEdilenSayi< min || tahminEdilenSayi > max){
        mesajYazdir('Hata ! Boş alan bıraktın veya min - max sayı oranını gectin');
    }else if(tahminEdilenSayi==kazananSayi){
        
        OyunBitti(false,'Basarili !! Doğru Tahmin ...')
        
    } else{
        tahminHakki -= 1;
        if(tahminHakki==0){
            //oyun bitti
            OyunBitti(true, "Tahmin hakkınız kalmadı ... "+kazananSayi);
        } else{
            //oyun devam ediyor
            mesajYazdir(`Tahmin hakkiniz ${tahminHakki} kaldi...`,'red')
        }
    }
    
});


//Oyun bitti fonksiyonu
function OyunBitti(kontrol,msj){
    let color;
    
    kontrol == true ? (color = 'red') : (color = 'green');


    tahminInput.disabled = true;
    tahminInput.style.borderColor = color;
    mesajYazdir(msj,color);


    //Button dğeişikliği
    tahminBtn.textContent='Tekrar Oyna';
    tahminBtn.className ='tekrar-oyna';

}


//  oyun bittiğinde yeniden başlatma

tahminBtn.addEventListener('mousedown', function(e){
    if(e.target.className ===  'tekrar-oyna'){
        window.location.reload();
    };
});


//Mesaj yazdırma Fonksiyonu
function mesajYazdir(msj){
    mesaj.textContent= msj;
}











