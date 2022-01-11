class Premio {

  acumulado = 1000;

  // constructor(jugador, historico) {
  //   this.jugador = jugador;
  //   this.historico = historico;
  // }

  guardarHistorico() {
    // Aquí se guarda el historico
  }

  aumentarAcumulado(dificultad) {
    this.acumulado = this.acumulado * dificultad
  }

  getAcumulado() {
    return this.acumulado;
  }
  
}
  
export { Premio };