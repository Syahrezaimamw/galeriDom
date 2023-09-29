const tampil =document.getElementsByClassName('imgTampil')[0]
const img = document.getElementsByTagName('img')
// console.log(tampil.className)
// let sa=img1.className
for(let i=0;i<img.length;i++){
    img[1].addEventListener('click',function(){
        tampil.setAttribute('src','satu.jpg')
    })
    img[2].addEventListener('click',function(){
        tampil.setAttribute('src','dua.jpg')
    })
    img[3].addEventListener('click',function(){
        tampil.setAttribute('src','tiga.jpg')
    })
    img[4].addEventListener('click',function(){
        tampil.setAttribute('src','empat.jpg')
    })
    img[5].addEventListener('click',function(){
        tampil.setAttribute('src','lima.jpg')
    })
    img[6].addEventListener('click',function(){
        tampil.setAttribute('src','enam.jpg')
    })
}

