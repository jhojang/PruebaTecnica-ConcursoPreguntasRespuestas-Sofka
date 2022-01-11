import { BancoPreguntas } from "./data/BancoPreguntas copy.js";
import { Categoria } from "./models/Categoria.js";
import { Jugador } from "./models/Jugador.js";
import { Pregunta } from "./models/Pregunta.js";
import { Premio } from "./models/Premio.js";
import { UserInterface } from "./models/UserInterface.js"
import { borrarRondaPuntajePregunta, getFromLocalStorage } from "./helper/localStorageHelper.js";


const renderPage = (jugador, pregunta, premio, userInterface) => {

    getFromLocalStorage(pregunta, premio); 
    console.log("Numbpregunta: " + pregunta.getNumPregunta())
    
    if (localStorage.getItem("Jugador") === null) {
        userInterface.getName((inputNombre) => {
            jugador.setNombre(inputNombre)
            localStorage.setItem("Jugador", jugador.getNombre())
            console.log("Se actualiza")
            location.reload();
        });
    } else {
        // Este es un helper, una función externa que permite no repetir mucho código

        console.log("Hay un usuario activo")
        jugador.setNombre(localStorage.getItem("Jugador"))
        userInterface.showQuestions(jugador, pregunta, premio, (optionSelected) => {
                console.log(pregunta.categoria)
                const correctOption = pregunta.validarOpcion(optionSelected);
                
                if (correctOption && pregunta.getNumPregunta() <= 5) {
                    pregunta.aumentarNumPregunta();
                    localStorage.setItem("preguntaActual", pregunta.getNumPregunta())
                    if (pregunta.getNumPregunta() === 5) {
                        localStorage.setItem("preguntaActual", 0)
                        pregunta.setNumPregunta(0);
                        // borrarRondaPuntajePregunta();
                        const dificultad = pregunta.categoria.getDificultad();
                        premio.aumentarAcumulado(dificultad + 1)
                        pregunta.categoria.aumentarDificultad();
                        localStorage.setItem("rondaActual", pregunta.categoria.getDificultad())
                        
                        userInterface.showPremio(
                            jugador, 
                            pregunta, 
                            premio, 
                            () => { // callbackContinue
                                
                                
                                console.log(pregunta.categoria.getDificultad())
                                if (pregunta.categoria.getDificultad() === 5) {
                                    guardarHistorial(jugador, pregunta);
                                } else {
                                    pregunta.categoria.aleatorizarPeguntasDeRonda(BancoPreguntas[dificultad + 1]);
                                    pregunta.aumentarPropiedades()
                                    localStorage.setItem("acumulado", premio.getAcumulado())
                                    renderPage(jugador, pregunta, premio, userInterface)
                                }
                                
                            },
                            () => { // callbackSalir
                                guardarHistorial(jugador, pregunta);
                            }
                        )
                        

                    } else {
                        pregunta.aumentarPropiedades();
                        renderPage(jugador, pregunta, premio, userInterface)
                    }
                    
                } else {
                    borrarRondaPuntajePregunta();
                    premio.resetAcumulado()
                    userInterface.showPerdida(() => {// callback
                        guardarHistorial(jugador, pregunta);
                    })
                }
            },
            () => { // callbackSalir
                borrarRondaPuntajePregunta();
                
                guardarHistorial(jugador, pregunta);
            }
        );
    }





    // Este función guarda el historial cuando se termina el juego, sea porque pierde o porque da click en salir
    // Encapsulé este bloque de coódigo en esta función, porque se usa la misma lógica varias veces y habría 
    // quedado muy repetitivo, así que sólo se llama la función cada vez que se necesite la lógica de este bloque.
    const guardarHistorial = (jugador, pregunta) => {
        const historial = JSON.parse(localStorage.getItem("historial")) === null ? [] : JSON.parse(localStorage.getItem("historial"));
        historial.push({
            nombre: jugador.getNombre(),
            premioAcumulado: premio.getAcumulado(),
            rondasGanadas: pregunta.categoria.getDificultad()
        })
        console.log(historial)
        localStorage.setItem("historial", JSON.stringify(historial))
        userInterface.showFinal(
            historial, 
            ()=>{// callbackJuegoNuevo
                borrarRondaPuntajePregunta();
                main()
            }, 
            ()=>{// callbackTerminarSesion
                localStorage.clear(),
                main()
            }
        );
    }


}




const main = () => {
    const categoria = new Categoria();
    let dificultad = categoria.getDificultad();
    if (localStorage.getItem("rondaActual") !== 0 && localStorage.getItem("rondaActual") !== null) {
        dificultad = localStorage.getItem("rondaActual")
        console.log(dificultad)
    }
    categoria.aleatorizarPeguntasDeRonda(BancoPreguntas[dificultad]);
    const jugador = new Jugador();
    const pregunta = new Pregunta(categoria);
    console.log(pregunta.getNumPregunta())
    const premio = new Premio();
    const userInterface = new UserInterface();
    getFromLocalStorage(pregunta, premio); 
    console.log(pregunta.getNumPregunta())
    renderPage(jugador, pregunta, premio, userInterface)
}

main();