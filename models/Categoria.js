class Categoria {

  dificultad = 0
  ronda = []
  
  constructor() {

  }

  getDificultad() {
    return this.dificultad;
  }

  setDificultad(dificultad) {
    this.dificultad = dificultad
  }

  resetDificultad() {
    this.dificultad = 0;
  }

  aleatorizarPeguntasDeRonda(ronda) {

    this.ronda = ronda;
    console.log(this.ronda);
  }

  aumentarDificultad() {
    this.dificultad ++
  }

}

export { Categoria };