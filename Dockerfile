FROM nginx:1.19.0-alpine
WORKDIR /app
ARG CONTEXT_PATH
ENV SHELL=/bin/sh
ENV CONTEXT_PATH=$CONTEXT_PATH
ENV BASIC_AUTH="restricted area"
#RUN npm config set stric-ssl false --global
#RUN apk update && apk upgrade && apk --no-cache --update python3 jq
#RUN pip3 install --upgrade pip && pip3 install awscli
RUN rm -rf /usr/share/nginx/html*
RUN rm /etc/nginx/conf.d/default.conf
COPY environments environments
COPY public /usr/share/nginx/templates
COPY ["docker-entrypoint.sh", "./"]
RUN chmod 755 docker-entrypoint.sh
EXPOSE 80
ENTRYPOINT [ "sh", "./docker-entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off;" ]