# Hello Docker Python 🐍🐳

Aplicación minimalista en **Python + Flask** ejecutándose dentro de un contenedor **Docker**.
Sirve como ejemplo de cómo contenerizar una API sencilla y publicarla en Docker Hub.

---

## 🧱 Estructura del proyecto

.
├── app.py           # Aplicación Flask (lógica de la API)
├── Dockerfile       # Instrucciones para construir la imagen Docker
├── requirements.txt # Dependencias de Python
└── README.md        # Documentación del proyecto

---

## ✅ Requisitos

- Docker instalado en el equipo.
- (Opcional) Git instalado para clonar o contribuir.

---

## 🔨 Construcción de la imagen Docker (local)

docker build -t hello-docker-python .

---

## ▶️ Ejecución del contenedor

### Usando la imagen local

docker run -p 5000:5000 hello-docker-python

### Usando la imagen desde Docker Hub

docker pull 17javi/hello-docker-python:latest
docker run -p 5000:5000 17javi/hello-docker-python:latest

---

## 🌐 Probar la aplicación

Abrir en el navegador:

http://localhost:5000/hello?name=Ana

Respuesta esperada:

{"message": "Hola Ana desde Docker!"}

---

## 🐳 Imagen en Docker Hub

Repositorio público:

17javi/hello-docker-python:latest

---

## 🧠 Notas técnicas

- Framework: Flask
- Puerto expuesto: 5000
- Endpoint: /hello?name=<nombre>

---

## 👤 Autor

Proyecto desarrollado por **Javier Arias** como demostración de despliegue de aplicaciones Python con Docker.
