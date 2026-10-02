# React Hydration Demo con Next.js

Repositorio creado como prueba técnica para Platzi.

Su objetivo es demostrar, de forma práctica, cómo funciona la **hydration** en React utilizando Next.js. Next.js se usa porque permite reproducir en un entorno controlado el renderizado del lado del servidor (**SSR**) y la posterior hidratación en el navegador.

La demo muestra:

- Un caso típico que puede producir un error de hydration.
- Un caso reproducible con contenido no determinista, utilizando `Math.random()`.
- Por qué el HTML generado en el servidor puede diferir del primer render realizado en el cliente.
- Una solución basada en mantener determinista el HTML inicial y ejecutar la lógica exclusiva del navegador después del montaje.
- La relación entre el modelo cliente-servidor, SSR y hydration en React.

La idea central es que, para hidratar correctamente, React necesita que el HTML producido por el servidor y el primer render en el navegador sean equivalentes.
