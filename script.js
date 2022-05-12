const fulImgBox = document.getElementById("fulImgbox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference) {
    fulImgBox.style.display = "flex"
    fulImg.src = reference
}

function closeImg() {
    fulImgBox.style.display = "none";
    
}


function Blur(reference) {
    fulImgBox.style.display = "none";
    imgInput.src = reference;

}


    let chasis = document.getElementById("fulImg")

    //todos los deslizadores
    let deslizadores = document.querySelectorAll(".filtros .input");
    console.log(deslizadores)
    //para cada uno de los deslizadones
    deslizadores.forEach(deslizador => {
    //un event listener que llama la función hueLig
      deslizador.addEventListener("input",hueLig)
    })
    
    
    function hueLig(){
            var setAs = hue.value;   
            var Ilumina = lig.value
            chasis.setAttribute("style", `filter:brightness(${Ilumina}) hue-rotate(${setAs}deg)`)
          }
          async function downloadImage(imageSrc) {
            const image = await fetch(imageSrc)
            const imageBlog = await image.blob()
            const imageURL = URL.createObjectURL(imageBlog)
          
            const link = document.createElement('a')
            link.href = imageURL
            link.download = 'image file name here'
            document.body.appendChild(link)
            link.click()
            document.body.removeChild(link)
          }
          $("<a>")
    .attr("href", "img1.jpg")
    .attr("download", "img1.jpg")
    .appendTo("body")
    .click()
    .remove();

   

