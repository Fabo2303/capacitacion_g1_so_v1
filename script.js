var textos = ["completar-1", "completar-2", "completar-3", "completar-4",
    "completar-5", "completar-6", "completar-7", "completar-8"];

var videos = ["https://youtube.com/embed/_IqRKlauMlE",
    "https://youtube.com/embed/21ACt0vtcfc",
    "https://youtube.com/embed/l6d_k-ET1rY",
    "https://youtube.com/embed/vsdVCCUBO3M",
    "https://youtube.com/embed/sephHEM2Vz4",
    "https://youtube.com/embed/aO3DhVyWaCY",
    "https://youtube.com/embed/JslDvt6adJQ",
    "https://youtube.com/embed/ja3frEx39Gg?"
]

function toggleContenidos2(id, box_id) {
    var elemento = document.getElementById(id);
    var box = document.getElementById(box_id);
    if (elemento.style.display === "none" || elemento.style.display === "") {
        box.style.borderBottomLeftRadius = "0px";
        box.style.borderBottomRightRadius = "0px";
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
        box.style.borderBottomLeftRadius = "14px";
        box.style.borderBottomRightRadius = "14px";
    }
}

function changeVideo(id) {
    var myTexto = document.getElementById(id).textContent;
    var myVideo = document.getElementById('video');
    for(var i = 0; i <textos.length; i++){
        var texto = document.getElementById(textos[i]).textContent;
        if(myTexto == texto){
            break;
        }
    }
    myVideo.src = videos[i];
}

function toggleComplete(id) {
    changeVideo(id);
    var myTexto = document.getElementById(id);
    myTexto.textContent = "1/1 completado";
    myTexto.style.color = "blue";
    var i = 0;
    for (const texto of textos) {
        var compl = document.getElementById(texto).textContent;
        if (compl == "1/1 completado") {
            i++;
        }
        console.log(i);
    }
    if (i == 8) {
        changeDisplay();
    }
}

function changeDisplay() {
    var boton = document.getElementById('certificado');
    boton.style.display = "block";
}

function toggleDatos(id) {
    var box = document.getElementById(id);
    box.style.display = "flex";
}

function firmar(id, id2, id3) {
    var textField1 = document.getElementById(id).value;
    var textField2 = document.getElementById(id2).value;
    var textField3 = document.getElementById(id3).value;
    if (textField1 != "" && textField2 != "" && textField3 != "") {
        Swal.fire({
            title: "¡Felicidades!",
            html: textField1 + " " + textField2 + ", felicidades por completar tu capacitación con éxito " +
                "y obtener tu merecido certificado. Te deseamos un futuro profesional lleno de éxitos." +
                "<br>Atentamente, SecureShop Peru",
            icon: "success",
            confirmButtonText: "Aceptar",
        });
    } else {
        Swal.fire({
            title: "¡ERROR!",
            html: "Llena los espacios en blanco",
            icon: "error",
            confirmButtonText: "Aceptar",
        });
    }
}