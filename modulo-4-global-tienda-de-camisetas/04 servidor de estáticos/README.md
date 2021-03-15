# La tienda de camisetas

## Para arrancar la web:

```bash
cd web
npm install
```

```bash
cd web
npm start
```

Abrir http://localhost:3001

## Para arrancar el servidor:

```bash
cd server
npm install
```

```bash
cd server
npm start
```

## En esta versión del ejercicio hemos:

- Añadido la funcionalidad de incrementar, decrementar y borrar productos del carro de la compra en la web.
- Cada vez que la usuaria modifica el carro lo enviamos al API para que el servidor lo guarde.
- Cuando una usuaria refresca la página o hace login, la web pide el carro de dicha usuaria y si tiene productos los pinta.

## Otras consideraciones

- Todos los ids (de usuarias y productos) son strings.
- Las unidades del carro de la compra son números enteros.
- Para entender cómo funciona el servidor debes mirar Devtoos > Netword.
- Para entender cómo funcionan los datos en React debes mirar Devtools > Components.

Happy coding!!!