class Categoria {

  dificultad = 1
  
  constructor() {
  }

  getDificultad() {
    return this.dificultad;
  }

  aumentarDificultad() {
    this.dificultad ++
  }

}

export { Categoria };