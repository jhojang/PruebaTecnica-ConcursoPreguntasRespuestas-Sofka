class Premio {

  acumulado = 0;

  // constructor(jugador, historico) {
  //   this.jugador = jugador;
  //   this.historico = historico;
  // }

  constructor() {
    //   this.jugador = jugador;
    //   this.historico = historico;
  }

  guardarHistorico() {
    // Aquí se guarda el historico
  }

  aumentarAcumulado(dificultad) {
    if (this.acumulado === 0) {
      this.acumulado = 1000
    }
    this.acumulado = this.acumulado * dificultad
  }

  getAcumulado() {
    return this.acumulado;
  }

  setAcumulado(acumulado) {
    this.acumulado = acumulado
  }

  resetAcumulado() {
    this.acumulado = 0;
  }
  
}
  
export { Premio };