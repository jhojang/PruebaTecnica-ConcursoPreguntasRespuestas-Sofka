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

    showQuestions(jugador) {
      const container = `
        <div class="container rounded bg-white col-8">
          <div class="row modal-header d-flex flex-nowrap  justify-content-start">
            <div  class="num-pregunta bg-primary align-self-center"><b>1</b></div>
            <div class="enunciado ml-3 align-self-center"><h5>Esta es una pregunta</h5></div>
          </div>
          <div class="row modal-body">
            <div class="container rounded">
              <div class="p-0 d-flex justify-content-center">
                <button class="btn-pregunta rounded">Enviar</button>
                <button class="btn-pregunta rounded">Enviar</button>
              </div>
              <div class="p-0 d-flex justify-content-center">
                <button class="btn-pregunta rounded shadow">Enviar</button>
                <button class="btn-pregunta rounded shadow">Enviar</button>
              </div>
            </div>
          </div>
          <div class="footer row d-flex pt-3">
            <div class="col-4"><h6>${jugador.getNombre()}</6></div>
            <div class="col-4 text-center"><h4>Ronda 1</h4></div>
            <div class="col-4"><p class="text-right">Aqui van las preguntas</p></div>
          </div>
        </div> -->
      `

      this.main.innerHTML = container;
      
    }
  
}
