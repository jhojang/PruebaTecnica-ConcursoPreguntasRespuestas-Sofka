export class UserInterface {

    constructor() {
      this.main = document.querySelector(".main");
      // this.mainChildrenList = this.main.children
    }

    // emptyMainChildrenList (mainChildrenList) {
    //   // console.log(mainChildrenList)
    //   for (var mc in mainChildrenList) {
    //     while (mainChildrenList[mc].firstChild) {
    //       mainChildrenList[mc].removeChild(mainChildrenList[mc].firstChild);
    //       console.log("lala")
    //     }
    //   }

      
    // }
  
    getName(callback) {

      // this.emptyMainChildrenList(this.mainChildrenList);

      const formulario = `
        <div class="h-100 formularioNombre p-5 mt-5 form-group bg-white border rounded">
          <input id="inputNombre" class="form-control btn-lg" placeholder="Nombre">
          <button id="sendNombreBtn" value="Enviar" class="btn btn-primary btn-lg btn-block mt-3" placeholder="Nombre">Enviar</button>
        </div>
      `;
      this.main.innerHTML = formulario;

      const inputNombre = document.querySelector("#inputNombre");
      const sendNombreBtn = document.querySelector("#sendNombreBtn");

      sendNombreBtn.addEventListener("click", () => callback(inputNombre.value));
    }

    showQuestions(jugador, pregunta, premio, callback) {


      const container = `
        <div class="container rounded bg-white col-8">
          <div class="row modal-header d-flex flex-nowrap  justify-content-start">
            <div  class="num-pregunta bg-primary align-self-center"><b>1</b></div>
            <div class="enunciado ml-3 align-self-center"><h5>${pregunta.enunciado}</h5></div>
          </div>
          <div class=" row modal-body">
            <div class="choicesContainer container rounded bg-danger">
              
            </div>
          </div>
          <div class="footer row d-flex pt-3">
            <div class="col-4"><h6>${jugador.getNombre()}</6></div>
            <div class="col-4 text-center"><h4>Ronda ${pregunta.categoria.dificultad + 1}</h4></div>
            <div class="col-4"><p class="text-right">${premio.getAcumulado()}</p></div>
          </div>
        </div> -->
      `
      this.main.innerHTML = container;


      const opciones = pregunta.categoria.ronda.preguntas[pregunta.numPregunta].opciones;

      const numPregunta = document.querySelector(".num-pregunta");
      numPregunta.innerHTML = pregunta.numPregunta + 1;
      const choicesContainer = document.querySelector(".choicesContainer");
      choicesContainer.innerHTML = "";

      for (let i = 0; i < opciones.length; i++) {
        const button = document.createElement("button");
        button.addEventListener("click", () => callback(opciones[i]));
        console.log(opciones[i])
        button.className = "button";
        button.setAttribute("class", "btn-pregunta rounded shadow")
        button.innerText = opciones[i];
  
        choicesContainer.append(button);
      }
      
    }


    showPremio(jugador, premio, pregunta, Callback) {
      const container = `
        <div class="container rounded bg-white col-8">
          <div class=" row modal-body">
            <div class="choicesContainer container rounded pt-4">
              <h3>Felicidades! ${jugador.getNombre()}, Has ganado la ronda número ${pregunta.categoria.dificultad + 1}</h3>
              <h4>Tienes una bonificación de ${premio.getAcumulado()} como premio por haber completado la ronda número ${pregunta.categoria.dificultad + 1} sin equivocarte</h4>
            </div>
          </div>
          <div class="footer row d-flex pt-3">
            <div class="col-4"><h6>Yogador</6></div>
            <div class="col-4 text-center"><h4>Ronda La que va</h4></div>
            <div class="col-4"><p class="text-right">Aqui van las preguntas</p></div>
          </div>
        </div> -->
      `
      this.main.innerHTML = container;
    }
  
}
