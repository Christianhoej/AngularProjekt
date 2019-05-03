FROM node:8.11.2-alpine as node

#Make directory inside docker container
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

#copy project settings into docker
COPY package*.json ./



#install angular cli
#RUN nmp install -g @angular/cli@7.3.8 DONT DO THIS AS WE DONT NEED TO EDIT THE PROECT
RUN npm install


#copy current DIR into /app
COPY . .

RUN npm run build

#starting multi stage images
# Stage 2
FROM nginx:1.13.12-alpine

#copying from our first image to our second
COPY --from=node /usr/src/app/dist/test-app/. /usr/share/nginx/html
#EXPOSE 80

#copying Nginx config into our image
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

#docker build -t angular .
#docker run -p 9992:80 --name angular-container -d angular

#docker login --username username --password password

#docker tag my-image username/my-repo

#docker push username/my-repo

#docker pull username/my-repo

#vores repo er airoo/dist40:tag
