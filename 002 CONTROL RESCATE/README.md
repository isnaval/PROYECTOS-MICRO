# 🚨 SOS Rescate - Aplicación Beta de Control

## 📱 Plataforma de Gestión para Conductores

![Project Banner](https://via.placeholder.com/1200x400.png?text=SOS+Rescate)

### 📌 Descripción del Proyecto

La aplicación **SOS Rescate** es una solución beta diseñada para el control y la gestión de conductores en situaciones normales y de emergencia. Esta herramienta intuitiva permite a los usuarios registrar información clave, como datos personales, número de bastidor y estado del seguro, mientras se visualizan en un mapa interactivo con opciones de colaboración y solicitud de ayuda.

---

### 🛠 Tecnologías Principales

| Tecnología           | Función         | Descripción                                             |
| -------------------- | --------------- | ------------------------------------------------------- |
| 🌐 **Frontend**      | HTML5 + CSS3    | Interfaz adaptable a dispositivos móviles y tablets     |
| 🐍 **Backend**       | Python (Flask)  | Gestión de usuarios, lógica de negocio y API REST       |
| 🗄️ **Base de Datos** | Redis           | Almacenamiento temporal para información del usuario    |
| 🌍 **API**           | Google Maps API | Integración con mapas para visualización de conductores |

---

### ✨ Características Principales

1. **Gestión de Conductores**

   - Registro de datos personales, número de bastidor y estado del seguro.
   - Visualización en tiempo real en Google Maps.

2. **Estados del Vehículo**

   - **🔲 Escucha:** Disponible pero sin actividad.
   - **🟢 Colaboración:** Dispuesto a asistir a otros vehículos.
   - **🔴 Emergencia:** Necesita asistencia inmediata.

3. **Interfaz Adaptativa**
   - Uso optimizado para dispositivos móviles y tablets.

---

### 🏗️ Estructura del Proyecto

```plaintext
project-root/
│
├── 📱 frontend/ # Interfaz de usuario
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   ├── scripts/
│   │   └── app.js
│   └── assets/
│       └── images/
│
├── 🐍 backend/ # API y lógica de negocio
│   ├── app.py
│   ├── routes/
│   ├── controllers/
│   └── templates/
│
└── 💾 redis/ # Configuración de la base de datos temporal
    └── redis.conf
```

### 🔧 Instalación y Configuración

#### Requisitos Previos

        - Python 3.8+
        - Redis
        - Flask
        - Google Maps API Key

#### Pasos de Instalación

1.  ##### Clonar el Repositorio
                git clone https://github.com/tu-usuario/sos-rescate.git
                cd sos-rescate
2.  ##### Configurar Backend
                cd backend
                python3 -m venv venv
                source venv/bin/activate  # En Windows: venv\Scripts\activate
                pip install -r requirements.txt
3.  ##### Configurar Redis

                Instalar y ejecutar Redis: redis-server

4.  ##### Configurar Variables de Entorno

                Crear un archivo .env en la carpeta backend:
                FLASK_APP=app.py
                FLASK_ENV=development
                REDIS_URL=redis://localhost:6379/0
                GOOGLE_MAPS_API_KEY=TU_API_KEY

5.  ##### Iniciar Backend

                flask run

6.  ##### Configurar Frontend
            Abrir el archivo frontend/index.html en tu navegador.

### 🎯 Objetivos del Proyecto

            1. Crear un sistema básico para la gestión de conductores.
            2. Implementar visualización en tiempo real en Google Maps.
            3. Probar y optimizar la usabilidad en dispositivos móviles.

### 📄 Licencia

Este proyecto está bajo la Licencia MIT.

### 🔗 Contacto

            SOS Rescate

### 🔍 Próximas Mejoras

Implementar notificaciones en tiempo real.
Añadir opciones de filtrado en el mapa.
Mejorar la interfaz de usuario para gestión de estados.

---

---

ALTERNATIVAS:

1. OpenStreetMap (OSM)
   Descripción: Una base de datos de mapas abierta y gratuita, mantenida por una comunidad global.
   Características:
   Completamente gratuita y sin restricciones de uso comercial.
   No requiere clave de API.
   Excelente para personalización y proyectos de código abierto.
   Integración: Usa librerías como Leaflet.js para trabajar con OpenStreetMap.
   Ejemplo con Leaflet.js:
   html
   Copiar código
   <!DOCTYPE html>
   <html>
   <head>
       <title>Mapa con Leaflet</title>
       <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
       <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
       <style>
           #map { height: 500px; width: 100%; }
       </style>
   </head>
   <body>
       <h1>Mapa con OpenStreetMap</h1>
       <div id="map"></div>
       <script>
           var map = L.map('map').setView([51.505, -0.09], 13);
           L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
               maxZoom: 19,
               attribution: '© OpenStreetMap contributors'
           }).addTo(map);
       </script>
   </body>
   </html>
2. Mapbox
   Descripción: Un servicio comercial basado en OpenStreetMap con herramientas avanzadas y opciones de personalización.
   Características:
   Plan gratuito con límite de uso mensual.
   Soporta mapas 3D, animaciones y gráficos.
   API robusta para aplicaciones web y móviles.
   Requiere clave de API:
   html
   Copiar código
   <script src='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js'></script>
   <link href='https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css' rel='stylesheet' />
   <div id="map" style="width: 100%; height: 500px;"></div>
   <script>
       mapboxgl.accessToken = 'TU_CLAVE_API';
       const map = new mapboxgl.Map({
           container: 'map',
           style: 'mapbox://styles/mapbox/streets-v12',
           center: [-74.5, 40],
           zoom: 9
       });
   </script>
3. HERE Maps
   Descripción: Una solución robusta para mapas y navegación, ideal para aplicaciones empresariales.
   Características:
   Ofrece una capa gratuita para proyectos pequeños.
   Mapas de alta calidad, navegación y tráfico en tiempo real.
   Requiere clave de API:
   html
   Copiar código
   <script src="https://js.api.here.com/v3/3.1/mapsjs-core.js"></script>
   <script src="https://js.api.here.com/v3/3.1/mapsjs-service.js"></script>
   <script>
       var platform = new H.service.Platform({
           apikey: 'TU_CLAVE_API'
       });
       var defaultLayers = platform.createDefaultLayers();
       var map = new H.Map(document.getElementById('map'), defaultLayers.vector.normal.map, {
           center: { lat: 50, lng: 5 },
           zoom: 4
       });
   </script>
4. Bing Maps
   Descripción: Solución de mapas de Microsoft.
   Características:
   Plan gratuito con límite de uso.
   Incluye tráfico en tiempo real y visualización en 3D.
   Requiere clave de API:
   html
   Copiar código
   <script type='text/javascript' src='https://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=TU_CLAVE_API' async defer></script>
   <script>
       function GetMap() {
           var map = new Microsoft.Maps.Map('#myMap', {
               center: new Microsoft.Maps.Location(47.6062, -122.3321),
               zoom: 10
           });
       }
   </script>
   <div id="myMap" style="width: 100%; height: 500px;"></div>
5. Esri ArcGIS
   Descripción: Una solución profesional para mapas avanzados y análisis geoespacial.
   Características:
   Ideal para proyectos que requieren análisis de datos geográficos.
   Plan gratuito con uso limitado.
   Requiere clave de API.
