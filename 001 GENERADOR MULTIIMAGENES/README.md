# 🖼️ Image Variation Generator

## 🚀 Proyecto de Generación Creativa de Variaciones de Imagen

![Project Banner](https://via.placeholder.com/1200x400.png?text=Image+Variation+Generator)

### 📌 Descripción del Proyecto

El **Image Variation Generator** es una aplicación innovadora que permite transformar y explorar imágenes de manera creativa, utilizando tecnologías de vanguardia para la generación de variaciones visuales.

### 🛠 Tecnologías Principales

| Tecnología           | Función    | Descripción                                                           |
| -------------------- | ---------- | --------------------------------------------------------------------- |
| 🌐 **Frontend**      | Vanilla JS | Construcción de interfaces ligeras y dinámicas sin frameworks pesados |
| 💻 **Backend**       | Node.js    | Procesamiento de imágenes y lógica de negocio                         |
| 🗄️ **Base de Datos** | MongoDB    | Almacenamiento flexible de imágenes y metadatos                       |

### ✨ Características Principales

#### 1. Generación de Variaciones

- 🎨 Transformaciones creativas de imágenes
- 🔄 Múltiples estilos y efectos
- 📊 Control preciso de variaciones

#### 2. Tipos de Transformaciones

- **Variaciones Estéticas**

  - Cambios de paleta de color
  - Efectos artísticos
  - Modificaciones de textura

- **Variaciones Estructurales**

  - Recortes personalizados
  - Rotaciones y giros
  - Redimensionamiento inteligente

- **Variaciones Experimentales**
  - Fusión de imágenes
  - Efectos de superposición
  - Transformaciones geométricas

### 🏗️ Estructura del Proyecto

```plaintext
project-root/
│
├── 🖥️ frontend/ # Interfaz construida con HTML, CSS y Vanilla JS
│ ├── index.html
│ ├── styles/
│ ├── scripts/
│ └── assets/
│
├── 🔧 backend/ # Servidor Node.js
│ ├── routes/
│ ├── controllers/
│ └── models/
│
└── 💾 database/ # Configuración MongoDB
└── schemas/
```

### 🎯 Objetivos del Proyecto

1. Crear un repositorio dinámico de variaciones de imagen
2. Explorar límites creativos en transformación visual
3. Desarrollar una herramienta intuitiva y potente

### 🔧 Instalación y Configuración

#### Requisitos Previos

- Node.js (v16+)
- MongoDB
- Material UI
- Vanilla JavaScript

### Pasos de Instalación

#### 1. Clonar repositorio

    - git clone https://github.com/tu-usuario/image-variation-generator.git

#### 2. Instalar dependencias backend

    - cd backend
    - npm install

#### 3. Configurar el backend

    - Crea un archivo .env en la carpeta backend con el siguiente contenido:
          MONGO_URI=mongodb://localhost:27017/image-variation-generator
          PORT=3000
    - Asegúrate de que MongoDB esté instalado y en ejecución. Para verificarlo, usa:
          mongod
    - Para confirmar que el backend esta levantado basta con usar node server.js

#### 4. Instalar dependencias frontend

    - cd ../frontend
    - npm init -y
    - npm install @mui/material @emotion/react @emotion/styled

#### 5. Instalar dependencias frontend

    - cd ..
    - npm install concurrently --save-dev

#### 6. Configurar el inicio del proyecto

    - En el directorio raíz del proyecto (donde están las carpetas backend y frontend), edita el archivo package.json para incluir un script start que inicie tanto el backend como el frontend:

            "scripts": {
                "start": "concurrently \"npm run start-backend\" \"npm run start-frontend\"",
                "start-backend": "cd backend && npm start","start-frontend": "cd frontend && live-server"

            }

    - Asegúrate de tener concurrently instalado globalmente: npm install -g concurrently

#### 6. Iniciar el proyecto

Desde el directorio raíz del proyecto, ejecuta: npm start

#### 7. Acceder a la aplicación

    - Accede al frontend desde tu navegador en: http://127.0.0.1:8080
    - El backend estará disponible en: http://localhost:3000

### 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Por favor lee nuestras Guías de Contribución
📄 Licencia
Este proyecto está bajo Licencia MIT
🔗 Contacto
Ismael

Email: tu-email@ejemplo.com
LinkedIn: Tu Perfil

🔍 Próximas Mejoras

Implementar más filtros de imagen
Añadir interfaz de usuario más intuitiva
Optimizar rendimiento de procesamiento


HISTOGRAMA
FILTROS DE IMAGENES
EROSIONAR
