class Premio {

  acumulado = 0;

  constructor() {
    
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