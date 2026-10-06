# Doctor Nicolás - Sitio Web de Panadería

Sitio web para el emprendimiento de panadería artesanal del Doctor Nicolás y su esposa María Dulfay.

## Características

- Sección Hero con imagen de presentación
- Historia del emprendimiento
- Galería del equipo (perfiles de Nicolás y María)
- Catálogo de productos con carrusel
- Llamada a la acción (CTA)
- Diseño responsivo con Tailwind CSS

## Instalación Local

```bash
# Clonar el repositorio
git clone <tu-repo-url>
cd Doctornicolas-main

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000/Doctornicolas-main/`

## Build para Producción

```bash
npm run build
```

Esto genera la carpeta `build/` lista para desplegar en GitHub Pages.

## Despliegue en GitHub Pages

1. Sube el proyecto a GitHub
2. Ve a **Settings → Pages**
3. En "Source", selecciona:
   - Branch: `main`
   - Folder: `/root` (si usas el workflow automático)
4. El sitio estará disponible en: `https://tu-usuario.github.io/Doctornicolas-main/`

El workflow automático `.github/workflows/deploy.yml` compilará y desplegará automáticamente cada vez que hagas push a la rama `main`.

## Tecnologías

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Radix UI
- Lucide React Icons

## Estructura del Proyecto

```
src/
├── components/        # Componentes React
├── assets/           # Imágenes y recursos
├── styles/           # Estilos globales
├── App.tsx           # Componente principal
└── main.tsx          # Punto de entrada
```

## Contacto

Para más información sobre el emprendimiento, visita el sitio web.
