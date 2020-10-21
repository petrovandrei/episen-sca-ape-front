FROM nginx:alpine
COPY dist/episen-sca-ape-front /usr/share/nginx/html
EXPOSE 80
