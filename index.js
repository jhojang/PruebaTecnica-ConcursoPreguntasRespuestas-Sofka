import { BancoPreguntas } from "./data/BancoPreguntas copy.js";
import { Categoria } from "./models/Categoria.js";
import { Jugador } from "./models/Jugador.js";
import { Pregunta } from "./models/Pregunta.js";
import { Premio } from "./models/Premio.js";
import { UserInterface } from "./models/UserInterface.js"


const renderPage = (jugador, pregunta, userInterface, premio) => {
    
    if (localStorage.getItem("Jugador") === null) {
        userInterface.getName((inputNombre) => {
            jugador.setNombre(inputNombre)
            localStorage.setItem("Jugador", jugador.getNombre())
            console.log("Se actualiza")
            location.reload();
        });
    } else {
        console.log("Hay un usuario activo")
        jugador.setNombre(localStorage.getItem("Jugador"))
        userInterface.showQuestions(jugador, pregunta, premio, (optionSelected) => {
            
            const correctOption = pregunta.validarOpcion(optionSelected);
            
            if (correctOption) {
                pregunta.aumentarNumPregunta();
                if (pregunta.getNumPregunta() === 5) {
                    // userInterface.showPremio(jugador, pregunta, (callback) => {
                    //     console.log("Dale pues")
                    // })
                    console.log(premio)
                    pregunta.setNumPregunta(0);
                    pregunta.categoria.aumentarDificultad();

                    const dificultad = pregunta.categoria.getDificultad();
                    console.log("Dificultad: " + dificultad)
                    pregunta.categoria.aleatorizarPeguntasDeRonda(BancoPreguntas[dificultad]);
                    pregunta.aumentarPropiedades()
                    

                } else {
                    pregunta.aumentarPropiedades();
                    renderPage(jugador, pregunta, userInterface, premio)
                }
                
            } else {
                console.log("ah perdistes")
            }
        });
    }

}

const main = () => {
    const categoria = new Categoria();
    const dificultad = categoria.getDificultad();
    categoria.aleatorizarPeguntasDeRonda(BancoPreguntas[dificultad]);
    const jugador = new Jugador();
    const pregunta = new Pregunta(categoria);
    const premio = new Premio();
    const userInterface = new UserInterface();
    renderPage(jugador, pregunta, userInterface, premio)
}

main();