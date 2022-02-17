// Pilihan Komputer Random
function getPilihanKomputer (){
    var comp = Math.random();
    if( comp < 0.34 ) return 'gajah';
    if( comp >= 0.34 && comp < 0.67 ) return 'orang';
    return 'semut';
}

// Aturan Main
function getHasil (comp, player){
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH' : 'MENANG!';
}

// // Pilihan Player, Gambar pilihan komputer, Info 
// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPemain = pGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPemain);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPemain = pOrang.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPemain);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPemain = pSemut.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPemain);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;    
// });


// Putar
function putar(){
    const imgKomputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0;
    const waktuMulai = new Date().getTime();
    setInterval(function(){
        if(new Date().getTime()-waktuMulai > 1000){
            clearInterval;
            return;
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] +'.png')
        if(i == gambar.length) i = 0;
    }, 100)
}


// Better Code Solution 
const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPemain = pil.className;
        const hasil = getHasil(pilihanKomputer, pilihanPemain);

        putar();

        setTimeout(function(){
            const imgKomputer = document.querySelector('.img-komputer');
            imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000)
    })
})