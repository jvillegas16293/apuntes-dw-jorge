

## PARALLAX

Uso de Parallax con CSS

```css
.parallax {

}


```

Uso de Parallax con JS

```JS
window.addEventListenner 


```

### Prefers-reduce-motion media query

Los usuarios pueden activar en sus dispositivos la preferencia que reduce motion.

- Win: Config->accesibilidad->mostrar animaciones en windows
- mac: Pref sistema -> Accesibilidad -> MOSTRAR -> Reducir movimientos
iOS:_ Conf

```css

@media (prefers-reduced-motion: reduce) {
    .parallax {
        background-attachment: scroll;
    }
} 

```
Para js usamos wondows.matchMedia

```js

