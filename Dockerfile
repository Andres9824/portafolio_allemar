# ETAPA 1: Construcción (Build)
# Usamos una imagen ligera de Node
FROM node:18-alpine AS build

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero los archivos de dependencias (para aprovechar la caché de Docker)
COPY package.json package-lock.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto del código fuente
COPY . .

# Construimos la aplicación (generará la carpeta /dist)
RUN npm run build

# ETAPA 2: Servidor Web (Nginx)
# Usamos Nginx para servir los archivos estáticos (es mucho más rápido que Node para esto)
FROM nginx:alpine

# Copiamos los archivos compilados de la Etapa 1 a la carpeta pública de Nginx
COPY --from=build /app/dist /usr/share/nginx/html

# Copiamos nuestra configuración personalizada de Nginx (ver Paso 2)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponemos el puerto 80
EXPOSE 80

# Iniciamos Nginx
CMD ["nginx", "-g", "daemon off;"]