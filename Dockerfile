FROM node:20-alpine3.16 as apisat
WORKDIR /usr/src/app

RUN apk update
RUN apk upgrade
RUN apk add g++ make py3-pip
RUN apk add git
RUN apk add nano
RUN apk add tzdata
RUN apk add chromium
RUN cp /usr/share/zoneinfo/Asia/Jakarta /etc/localtime
RUN echo "Asia/Jakarta" >  /etc/timezone
RUN date

COPY package*.json ./
RUN yarn install

# COPY public ./public

COPY . .

EXPOSE 3312

CMD [ "npm", "start" ]  