## transitions

Forma de cambiar los valores de una o mas propiedades de forma gradual

Se puede aplcar transiciones a cualquier propiedad qeu cepte valores numéricos o de color.

ej: width, height, padding, color, background-color, opacity

Prop numericas

- font-size
- margin
- border-width
- transform (scale, rote, traslate, ect...)

Prop de color

- background-color
- color
- border-color
- box-shadow

## Como se definen

Utilizamos la propiedad transition, y se puede personalizar de la siguiente manera.

- ´transition-property´ : nos indica la propiedad a animar
- transition-duration : tiendo de la transición
- transition-timing-fuction: la forma en la que se va a llevar a cabo la animacion. 
- transition-delay: demara antes de iniciar la transición

ej:

div {

transition-property: font-size;
transition-duration: 4s;
transition-timing-fuction: ease-in-out
transition-delay: 2s;

}

Podemos unicar la regla con: 

transition: font-size 4s ease-in-out 2s

prop    duration  timming-fuction    delay

### timin-fuction

- ease -> velocidad lenta, luego mas rapida y termina la animacion de forma lenta

-  linear

- aese-in

- ease-out

- ease-in-out

- cubic-bezier(): tiempo personalizado. 
