# NOSTERRA — Landing (Next.js)

Landing page de NOSTERRA Mezcal. Proyecto **autónomo y ligero**: no usa base de
datos, pagos ni panel de administración. Pensado para publicarse en **Railway**.

- Framework: **Next.js 16** (App Router) + **React 19**
- Estilos: **Tailwind CSS v4**
- Iconos: lucide-react
- Sin backend, sin variables de entorno, sin secretos.

## Correr en local

```bash
npm install
npm run dev      # http://localhost:3000
```

Build de producción:

```bash
npm run build
npm run start
```

## Desplegar en Railway

1. Sube este proyecto a un repositorio de GitHub.
2. En [railway.app](https://railway.app): **New Project → Deploy from GitHub repo**
   y elige este repositorio.
3. Railway detecta Next.js automáticamente (Nixpacks):
   - **Build:** `npm run build`
   - **Start:** `npm run start`
   - Next.js escucha en el puerto que Railway inyecta (`PORT`).
4. En **Settings → Networking → Generate Domain** para obtener la URL pública.

No se necesitan variables de entorno.

> Nota: la metadata está configurada con `robots: { index: false }` para que esta
> demo no compita en buscadores con el sitio real (www.nosterramezcal.com).
> Los botones "Comprar" enlazan a la tienda real.
# nosterra-landing
