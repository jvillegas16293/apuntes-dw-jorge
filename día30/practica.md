# Ejercicio

Hacer una web que me permita lanzar una moneda y me muestre al azar el resultado.

Cada lanzamiento cuente la cantidad de caras y de cruces.

Tambien que calcule el porcentaje de caras que han salido.

Numero al azar math.ramdon


## Ejercicio 2

Crear un juego de piedra papel tijaera para jugar contra el ordenador.Mostrar en pantallla el resultado, y cuentas veces el j1 ha gando, perdido o empetado.

```js
function juego (j1, j2) {
    // caso empate
  if(j1 == j2){ return "empataron"; } 
    // caso gana jugadro 2
  if((j1 === "tijeras" && j2 === "papek")
    (j1 === "piedra" && j2 === "tijeras")
    (j1 === "pepel" && j2 === "piedra")
    ){
        return "gano el jugador 1";
  } else {

    return "gani jugador 2"
  }}
```

