document.addEventListener('DOMContentLoaded', () => {

const artistasData = [
    {name:'Henrique e Juliano',image:'<a href="https://imgbb.com/"><img src="https://i.ibb.co/wCpHtfQ/artista-henrique-juliano.jpg" alt="artista-henrique-juliano" border="0"></a>'},
    {name:'Jorge & Mateus',image:'<a href="https://imgbb.com/"><img src="https://i.ibb.co/2WfJ8tD/artista-jorge-mateus.jpg" alt="artista-jorge-mateus" border="0"></a>'},
    {name:'Zé Neto & Cristiano',image:'<a href="https://imgbb.com/"><img src="https://i.ibb.co/7z7CZ69/artista-ze-neto.jpg" alt="artista-ze-neto" border="0"></a>'},
    {name:'Ana Castela',image:'<a href="https://ibb.co/JzNX3xJ"><img src="https://i.ibb.co/tbSyLZr/CASTELA.jpg" alt="CASTELA" border="0"></a>'},
    {name:'Mc Ryan SP',image:'<a href="https://ibb.co/yBbFNLS"><img src="https://i.ibb.co/PzfGrBQ/ryan-1.jpg" alt="ryan-1" border="0"></a>'}
  ] 

const albunsData = [
    {name:'Nada como um dia após o outro', artist:'Racionais',image:'<a href="https://imgbb.com/"><img src="https://i.ibb.co/T8QJJ1W/album-vida-loka.jpg" alt="album-vida-loka" border="0"></a>'},
    {name:'Caju', artist:'Liniker',image:'<a href="https://imgbb.com/"><img src="https://i.ibb.co/B3b0N7H/album-caju.jpg" alt="album-caju" border="0"></a>'},
    {name:'White Noise', artist:'Sleepy John',image:'<a href="https://imgbb.com/"><img src="https://i.ibb.co/WBgGp5q/album-white-noise.jpg" alt="album-white-noise" border="0"></a>'},
    {name:'Hit Me Hard and Soft',artist:'Billie Eilish',image:'<a href="https://imgbb.com/"><img src="https://i.ibb.co/G3kXhXc/album-hit-me.jpg" alt="album-hit-me" border="0"></a>'},
    {name:'Convoque seu buda',artist:'Criolo',image:'<a href="https://ibb.co/DD110WM"><img src="https://i.ibb.co/RpggRb6/Convoque-seu-Buda-1.jpg" alt="Convoque-seu-Buda-1" border="0"></a>'}
  ]

const artistGrid = document.querySelector('.artists-grid');
const albunsGrid = document.querySelector('.albums-grid');

artistasData.forEach(artista => {
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-card')

    artistCard.innerHTML=`
    ${artista.image}
    
    <h3> ${artista.name}</h3>
    <p> artista </p>
    `
    artistGrid.appendChild(artistCard);
  } 
)

albunsData.forEach(album => {
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-card')

    albumCard.innerHTML=`
    ${album.image}
    <h3> ${album.name} </h3>
    <p> ${album.artist}<p/>
    `
    albunsGrid.appendChild(albumCard);
  } 
)

});