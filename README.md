# Hello Microservice — Docker vs Serverless

## Objetivo

Implementar y comparar un endpoint simple utilizando dos arquitecturas distintas:

1. Microservicio contenedorizado con Docker
2. Función Serverless usando Serverless Framework (Lambda HTTP)

El objetivo es observar diferencias en despliegue, ejecución y complejidad.

---

## Endpoint implementado

Ambas versiones exponen el mismo endpoint:

GET /hello?name=Ana

Respuesta:

{ "message": "Hola Ana" }

---

## Parte 1 — Microservicio con Docker

### Estructura del proyecto

app.py  
Dockerfile  
requirements.txt  
README.md  

### Ejecución local

Construir la imagen:

docker build -t hello-docker-python .

Ejecutar el contenedor:

docker run -p 5000:5000 hello-docker-python

Probar en navegador:

http://localhost:5000/hello?name=Ana

### Imagen en Docker Hub

Se puede obtener vía:

docker pull 17javi/hello-docker-python

---

## Parte 2 — Función Serverless (Lambda / HTTP API)

### Estructura del proyecto

serverless-hello/  
 ├ handler.js  
 ├ serverless.yml  
 ├ package.json  
 └ package-lock.json  

### Ejecución local

cd serverless-hello  
npm install  
npm run offline

Probar en navegador:

http://localhost:3000/hello?name=Ana

---

## Comparación entre arquitecturas

| Aspecto | Docker | Serverless |
|---|---|---|
| Paradigma | Contenedores | Funciones |
| Infraestructura | App + runtime | Función + runtime |
| Escalado | Manual / Orquestador | Automático |
| Costos | Paga por servidor | Paga por ejecución |
| Cold start | No | Sí (a veces) |
| Latencia | Estable | Puede variar |
| Ideal para | Servicios persistentes | Eventos/http |

---

## Conclusiones

- Docker ofrece control total del entorno y es ideal para servicios persistentes y stateful.
- Serverless elimina la gestión de infraestructura y escala automáticamente bajo demanda.
- Para workloads HTTP cortos y orientados a eventos, Serverless puede ser más eficiente en costos.
- Para procesos largos o servicios de sesión, Docker resulta más apropiado.

---

## Referencias del proyecto

Repositorio GitHub:  
https://github.com/javierariassantillan/hello-docker-python

Imagen en Docker Hub:  
17javi/hello-docker-python

---

## Notas finales

Proyecto académico para demostrar diferencias entre modelos de despliegue modernos y sus compromisos técnicos.
