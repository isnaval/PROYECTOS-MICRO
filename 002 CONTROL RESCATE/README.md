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

T

### 🔍 Próximas Mejoras

Implementar notificaciones en tiempo real.
Añadir opciones de filtrado en el mapa.
Mejorar la interfaz de usuario para gestión de estados.
