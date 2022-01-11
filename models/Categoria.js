class Categoria {

  dificultad = 0
  ronda = []
  
  constructor() {

  }

  getDificultad() {
    return this.dificultad;
  }

  resetDificultad() {
    this.dificultad = 0;
  }

  aleatorizarPeguntasDeRonda(ronda) {
    this.ronda = ronda;
  }

  aumentarDificultad() {
    this.dificultad ++
  }

}

export { Categoria };