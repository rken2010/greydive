# Desafio GReyDive

Este es el diseño de una Web dinámica hecha con React JS

## Librerias

Para el diseño se utilizó Chakra UI, utilizando elementos para la maquetación ( Stack, Container, Text, Heading, entre otros)

### Comentarios

Para la manipulación de JSON se creo el archivo GetData.js para utilizar funciones que permitan sacar los datos necesarios. Para reparar el error  "Unexpected token u in JSON at position 0", se creo una función donde primero pasamos el JSON a String para corregir los errores y luego lo parseamos a un objeto que será el retorno de la función.

Para obtener el array de preguntas, cree una función que lo recorre y lo carga en un nuevo array para ser retornado. Antes de hacer el push al nuevo array se le carga un id para resolver el problema de la key del objeto al renderizar.

Puede visitar la web https://rken2010.github.io/greydive/ para ver el funcionamiento del sitio

Muchas Gracias!