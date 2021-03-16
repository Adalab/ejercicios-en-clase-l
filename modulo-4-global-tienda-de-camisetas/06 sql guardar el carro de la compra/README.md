# Tienda de camisetas con React y Node JS

## Para desarrollar

La primera vez que arranques el proyecto entra en las carpetas **server** y **web** y ejecuta `npm install`.

Las siguientes veces, desde la carpeta raíz del proyecto, ejecuta `npm run dev`. Si quieres saber cómo funciona entra en este [package.json](./package.json) y sigue los comandos que hemos puesto en `scripts`.

## Para publicar en Heroku

Cuando Heroku detecte un cambio hará:

1. `git pull` para bajarse la última versión del código.
1. `npm start` para arrancar la aplicación:
   - En ese momento se instalarán los dos proyectos, se construirá automáticamente React y se levantará el servidor de Node JS.
   - Si quieres saber cómo funciona entra en este [package.json](./package.json) y sigue los comandos que hemos puesto en `scripts`.

¡¡¡Tienes curiosidad por saber cómo funciona eh!!!