FROM nginx:latest

ARG TZ=Europe/Warsaw
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

COPY nginx.conf /etc/nginx/nginx.conf