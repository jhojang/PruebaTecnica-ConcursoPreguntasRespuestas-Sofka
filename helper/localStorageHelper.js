
const borrarRondaPuntajePregunta = () => {
    localStorage.removeItem("preguntaActual")
    localStorage.removeItem("opcionCorrecta")
    localStorage.removeItem("acumulado")
    localStorage.removeItem("rondaActual")
}

const getFromLocalStorage = (pregunta, premio) => {
    // if (localStorage.getItem("numPregunta") !== 0 && localStorage.getItem("numPregunta") !== null) {
    //     pregunta.setNumPregunta(parseInt(localStorage.getItem("numPregunta")))
    // }
    if (localStorage.getItem("preguntaActual") !== 0 && localStorage.getItem("preguntaActual") !== null) {
        pregunta.setNumPregunta(parseInt(localStorage.getItem("preguntaActual")))
    }
    console.log("lalala:   " + pregunta.getNumPregunta())
    if (localStorage.getItem("rondaActual") !== 0 && localStorage.getItem("rondaActual") !== null) {
        pregunta.categoria.setDificultad(parseInt(localStorage.getItem("rondaActual")))
    }
    if (localStorage.getItem("opcionCorrecta") !== null) {
        pregunta.respCorrecta = localStorage.getItem("opcionCorrecta")
    }
    if (localStorage.getItem("acumulado") !== 0 && localStorage.getItem("acumulado") !== null) {
        premio.setAcumulado(parseInt(localStorage.getItem("acumulado")))
    }
}

export {
    borrarRondaPuntajePregunta,
    getFromLocalStorage
}