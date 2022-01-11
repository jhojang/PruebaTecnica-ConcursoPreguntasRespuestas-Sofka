class Categoria {

  dificultad = 0
  ronda = []
  
  constructor() {

  }

  getDificultad() {
    return this.dificultad;
  }

  aleatorizarPeguntasDeRonda(ronda) {
    this.ronda = ronda;
  }

  aumentarDificultad() {
    this.dificultad ++
  }

}

export { Categoria };