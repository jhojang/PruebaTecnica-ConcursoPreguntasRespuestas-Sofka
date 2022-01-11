### Notas importantes

-Cuando el usuario abra el juego, lo primero que verá es un formulario para ingresar su nombre. Cuando ingrese su nombre, quedará logueado (Su nombre se almacena en el local Storage) y permanecerá así hasta que le dé click al botón "Terminar la sesión"

-Como base de datos sólo usé una lista de preguntas de un archivo json que yo hice. Las categorías son: Colores, Caricaturas, Capitales, Física y Estrellas.

-Cada ronda es más dificil que la anterior

-La persistencia de datos se hizo con el local storage del navegador

-Mientras el jugador esté logueado, no se perderá la pregunta actual en la que está si actualiza la página, como tampoco perderá la ronda en la que está ni el premio que tiene acumulado. Si se cierra la pestaña cuando está en una pregunta, al volverla abrir, aparecerá en la preguna que estaba con el puntaje que llevaba y en la ronda en la que iba.

-Al darle al botón "salir" (del quiz, no de la sesión) o caundo se equivoca de respuesta, se guardan los datos y se genera un historial que persiste mientras esté en la sesión.

-Si se equivoca en una pregunta en cualquier ronda, pierde lo que llvaba acumulado y se termina el juego. El historial mostrará cauntas rondas logró ganar, pero tendrá 0 de premio.

-Los premios funcionan así: La primera ronda gana 1000, las siguientes se calculan multiplicando lo que tiene acumulado por el número de la ronda en la que está.

-El jugador sólo pierde lo que lleva acumulado si se equivoca. Pero si decide retirarse por voluntad propia, se lleva lo que ha acumulado hasta la ronda anterior.

-El juego finaliza si el usuario se equivoca (Perdiendo todo), o si decide salirse o si gana el juego hasta el final.

-Cuando finaliza el juego, puede optar por volver a jugar (Manteniendo el historico en la persistencia de datos) o terminar la sesión.

-Cuando le da click en el botón "Terminar la Sesión", se borra el nombre del local storage y todos los datos del jugador.

