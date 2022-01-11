import { BancoPreguntas } from "./data/BancoPreguntas copy.js";
import { Categoria } from "./models/Categoria.js";
import { Jugador } from "./models/Jugador.js";
import { Pregunta } from "./models/Pregunta.js";
import { Premio } from "./models/Premio.js";
import { UserInterface } from "./models/UserInterface.js"


const renderPage = (jugador, pregunta, premio, userInterface) => {
    
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
            console.log(pregunta.categoria)
            const correctOption = pregunta.validarOpcion(optionSelected);
            
            if (correctOption) {
                pregunta.aumentarNumPregunta();
                if (pregunta.getNumPregunta() === 5) {

                    const dificultad = pregunta.categoria.getDificultad();
                    premio.aumentarAcumulado(dificultad + 1)
                    
                    userInterface.showPremio(
                        jugador, 
                        pregunta, 
                        premio, 
                        () => {
                            console.log("Dificultad: " + dificultad)
                            pregunta.setNumPregunta(0);
                            pregunta.categoria.aumentarDificultad();
                            console.log(pregunta.categoria.getDificultad())
                            if (pregunta.categoria.getDificultad() === 5) {
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
                                    ()=>{main()}, 
                                    ()=>{
                                        localStorage.clear(),
                                        main()
                                    }
                                );
                            } else {
                                pregunta.categoria.aleatorizarPeguntasDeRonda(BancoPreguntas[dificultad + 1]);
                                pregunta.aumentarPropiedades()
                                renderPage(jugador, pregunta, premio, userInterface)
                            }
                            
                        },
                        () => { // PENDIENTEEEEEEEEEEEE
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
                                ()=>{main()}, 
                                ()=>{
                                    localStorage.clear(),
                                    main()
                                }
                            );
                        }
                    )
                    

                } else {
                    pregunta.aumentarPropiedades();
                    renderPage(jugador, pregunta, premio, userInterface)
                }
                
            } else {
                console.log("ah perdistes") // PENDIENTEEEEEEEEEEEE
                premio.resetAcumulado()
                userInterface.showPerdida(() => {
                    const historial = JSON.parse(localStorage.getItem("historial")) === null ? [] : JSON.parse(localStorage.getItem("historial"));
                            historial.push({
                                nombre: jugador.getNombre(),
                                premioAcumulado: 0,
                                rondasGanadas: pregunta.categoria.getDificultad()
                            })
                            console.log(historial)
                            localStorage.setItem("historial", JSON.stringify(historial))
                            userInterface.showFinal(
                                historial, 
                                ()=>{main()}, 
                                ()=>{
                                    localStorage.clear(),
                                    main()
                                }
                            );
                })
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
    renderPage(jugador, pregunta, premio, userInterface)
}

main();