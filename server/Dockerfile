FROM node:latest AS appbuild
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY * .
RUN npm run build

FROM node:latest
WORKDIR /app
COPY package.json ./
RUN npm install
COPY --from=appbuild /usr/src/app/dist ./dist
EXPOSE 2022
CMD npm start