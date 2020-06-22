FROM node:10 as builder
WORKDIR /usr/app
COPY ["./package.json","./package-lock.json","/usr/app/"]
RUN npm install
COPY . /usr/app/
EXPOSE 3000
CMD npm run start