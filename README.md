# TodoApp README

## Descripción

Esta es una aplicación simple de lista de tareas (Todo) construida con React. Permite a los usuarios agregar, actualizar y eliminar tareas mediante un formulario. La aplicación utiliza `useReducer` para la gestión del estado y `useState` para manejar estados locales como la entrada del formulario, los errores y el ID de la tarea que se está editando.

## Características

- **Agregar tarea**: Los usuarios pueden ingresar una tarea y hacer clic en "Agregar" para agregarla a la lista.
- **Editar tarea**: Los usuarios pueden editar cualquier tarea existente haciendo clic en "Editar", modificando el texto de la tarea y guardando los cambios.
- **Eliminar tarea**: Los usuarios pueden eliminar cualquier tarea haciendo clic en "Eliminar".
- **Validación de entrada**: La aplicación muestra un mensaje de error si el usuario intenta agregar una tarea vacía.
- **Gestión del estado**: La aplicación usa `useReducer` para gestionar la lista de tareas y `useState` para gestionar la entrada del formulario y los errores.

## Tecnologías

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Hooks de React**:
  - `useReducer`: Gestiona el estado de la lista de tareas.
  - `useState`: Gestiona la entrada del formulario, la tarea que se está editando y los errores.

## Archivos

### `App.js`

Este es el componente principal donde reside la lógica para agregar, actualizar, eliminar y mostrar las tareas. Incluye:

- **Tareas iniciales**: Una lista de tareas de ejemplo con la que comenzar.
- **Función reducer**: Gestiona las acciones (agregar, actualizar, eliminar) y devuelve el estado actualizado.
- **Manejadores de formularios**: Gestiona la entrada del usuario y la lógica de envío del formulario.
- **Gestión del estado**: Incluye hooks como `useReducer`, `useState` para gestionar las tareas, la entrada y los errores.

### Objeto `Types`

Define los tipos de acciones disponibles para el reducer:
- `add`: Agrega una nueva tarea a la lista.
- `update`: Actualiza una tarea existente en la lista.
- `delete`: Elimina una tarea de la lista.

## Cómo usar

1. **Iniciar la aplicación**:
   - Clona el repositorio y ejecuta los siguientes comandos:
     ```
     npm install
     npm start
     ```
   
2. **Agregar una tarea**:
   - Ingresa el nombre de una tarea en el campo de texto y haz clic en "Agregar" para agregarla a la lista.

3. **Editar una tarea**:
   - Haz clic en el botón "Editar" junto a una tarea, modifica el título y haz clic en "Actualizar" para guardar los cambios.

4. **Eliminar una tarea**:
   - Haz clic en el botón "Eliminar" junto a una tarea para eliminarla de la lista.

5. **Validación de entrada**:
   - Si intentas agregar una tarea vacía, aparecerá un mensaje de error pidiéndote que ingreses el nombre de una tarea.

## Ejemplo

### Estado inicial

todo #1
todo #2

### Después de agregar una nueva tarea
todo #1
todo #2
Nueva tarea


### Después de editar una tarea

todo #1
Tarea actualizada


### Después de eliminar una tarea
todo #1


## Contribución

Siéntete libre de hacer un fork de este proyecto y mejorarlo. Si tienes alguna pregunta o sugerencia, abre un issue o un pull request.

## Licencia

Este proyecto es de código abierto y está disponible bajo la [Licencia MIT](LICENSE).


