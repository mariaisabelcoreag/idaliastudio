# Idalia’s Nail Studio

Página web de Idalia’s Nail Studio: servicios con tiempos, probador de colores con los esmaltes disponibles (línea Organic) y datos de contacto.

## Archivos

| Archivo | Para qué sirve |
|---|---|
| `index.html` | Estructura y textos de la página |
| `style.css` | Colores, tipografías y diseño |
| `script.js` | Probador de colores (esmaltes, tono de piel y acabado) |
| `hero.jpg` | Foto de la portada |

Los cuatro archivos deben estar en la misma carpeta.

## Cómo cambiar el contenido

- **Contacto:** en `index.html`, busca la sección `id="contacto"` y cambia el WhatsApp, horario, dirección e Instagram.
- **Servicios y tiempos:** en `index.html`, busca la tabla dentro de `id="servicios"`.
- **Esmaltes:** en `script.js`, edita la lista `shades`. Cada esmalte tiene el formato `["#código-de-color", "Nombre", "número"]`.
- **Colores de la marca:** en `style.css`, al inicio, en `:root` (`--brown` y `--sand`).
- **Tipografías:** la página usa Italiana y Jost (de Google Fonts) como alternativas a Alta y TT Drugs.

## Publicar en GitHub Pages

1. Crea un repositorio público en github.com.
2. Sube los cuatro archivos (`index.html`, `style.css`, `script.js`, `hero.jpg`) con **Add file → Upload files**.
3. Ve a **Settings → Pages**, en **Source** elige **Deploy from a branch**, rama `main` y carpeta `/ (root)`, y guarda.
4. En uno o dos minutos la página queda en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPOSITORIO/`.

## Pendiente de confirmar

- Datos de contacto reales (los actuales son de ejemplo).
- El esmalte "Rosa empolvado 040" lleva un nombre provisional.
