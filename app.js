import { Jugador } from "./models/Jugador.js";
import { UserInterface } from "./models/UserInterface.js"

const renderPage = (jugador, userInterface) => {

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
        userInterface.showQuestions(jugador);
    }

}

const main = () => {
    const jugador = new Jugador();
    const userInterface = new UserInterface();
    renderPage(jugador, userInterface)
}

main();