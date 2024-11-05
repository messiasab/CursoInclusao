const video = document.querySelectorAll('.card')
video.forEach(div=>{
    div.addEventListener('click', function(){
        const eden = this.getAttribute('id')
        const texto = document.getElementById(eden).children.item('1').children.item('0').innerHTML
        const video = document.getElementById('video')
        video.children.item('0').children.item('0').innerHTML = texto
        const ende = "https://www.youtube.com/embed/"+eden
        video.children.item('0').children.item('1').setAttribute("src",ende)
        const apresenta = document.getElementById('intro')
        const corpo = document.getElementById('cont')
        corpo.classList.remove('mostra')
        apresenta.classList.remove('mostra')
        
        corpo.classList.add('apaga')
        apresenta.classList.add('apaga')
        video.classList.remove('apaga')
        video.classList.add('mostra')
        console.log(
            
            )
    }

    )
}

)
function volta(){
    const video = document.getElementById('video')
    const apresenta = document.getElementById('intro')
    const corpo = document.getElementById('cont')
    corpo.classList.remove('apaga')
    apresenta.classList.remove('apaga')
    corpo.classList.add('mostra')
    apresenta.classList.add('mostra')
    video.classList.remove('mostra')
    video.classList.add('apaga')



}