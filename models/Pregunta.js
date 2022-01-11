class Pregunta {

  numPregunta = 0;
  respCorrecta;
  enunciado;

  constructor(categoria) {
    this.categoria = categoria;
    this.respCorrecta = this.categoria.ronda.preguntas[this.numPregunta].opcionCorrecta
    this.enunciado = this.categoria.ronda.preguntas[this.numPregunta].enunciado
  }


  validarOpcion(optionSelected) {
    console.log(this.respCorrecta)
    console.log(optionSelected)
    if (this.respCorrecta === optionSelected) {
      return true;
    } else {
      return false;
    }

    
  }

  aumentarNumPregunta() {
    this.numPregunta ++;
  }

  aumentarPropiedades() {
    this.respCorrecta = this.categoria.ronda.preguntas[this.numPregunta].opcionCorrecta
    localStorage.setItem("opcionCorrecta", this.respCorrecta)
    this.enunciado = this.categoria.ronda.preguntas[this.numPregunta].enunciado
  }

  getNumPregunta() {
    return this.numPregunta;
  }

  setNumPregunta(numPregunta) {
    this.numPregunta = numPregunta;
  }

  setCategoria(categoria) {
    this.categoria = categoria
  }

  
}
  
export { Pregunta };