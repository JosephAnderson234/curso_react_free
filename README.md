# Get Started

First you need to clone de repository and install the dependencies:

```bash
git clone git@github.com:JosephAnderson234/curso_react_free.
cd curso_react_free
npm install
```

Then you can run the development server:

```bash
npm run dev
```

Now you can open your browser and go to [http://localhost:5173](http://localhost:5173) to see the app running.

Si quieres mandar tu avance del proyecto desde esta misma carpeta, puedes hacer lo siguiente:

```bash
git remote -v
```

> [!NOTE]
> **Nota**: Si no tienes configurado tu repositorio remoto(sale por default el de la plantilla)puedes usar el siguiente comando para agregarlo:

```bash
git remote set-url origin https://github.com/tu-usuario/nuevo-repo.git
```

Luego chequea que se haya configurado correctamente con el comando:

```bash
git remote -v
```

Ahora puedes hacer un commit y un push de tu avance. (NO olvides de cambiar el nombre del proyecto en el `package.json` y obviamente el readme)

# Thanks

Holiwis espero que disfrutes de este curso, si tienes alguna duda o sugerencia puedes escribirme a mi correo joseph.cose@utec.edu.pe

Se ha usado una implementación de algunas estrcuturas de los e2e

revisa el formato que debe tener el archivo `.env` para que puedas correr el proyecto sin problemas, fijate en el archivo `.env.example` y crea tu propio archivo `.env` con las variables de entorno necesarias.

# Latest

Se han implementado modelos !!!!
Ahora puedes usar la carpeta models y ver su previsualización en el navegador:

```js
            {
                path: "react-hook-form",
                element: <ReactHookForm />
            },
            {
                path: "react-select",
                element: <ReactSelect />
            },
            {
                path: "ten-stack-table",
                element: <TenStackTable />
            },
```
Si no quieres usarlo, antes de hacer `npm install` elimina estas lineas del `package.json`:

```json
    "@tanstack/react-table": "^8.21.3",
    "react-hook-form": "^7.58.1",
    "react-select": "^5.10.1",
```

O si no ejecuta esto después del `npm install`:
```bash
    npm uninstall @tanstack/react-table react-hook-form react-select
```