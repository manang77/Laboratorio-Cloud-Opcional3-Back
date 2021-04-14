FROM node:12-alpine AS stage_0
RUN mkdir -p /usr/app
WORKDIR /usr/app

#Build Front
FROM stage_0 AS stage_1
ARG BASE_SERVER_URL
ENV BASE_SERVER_URL=$BASE_SERVER_URL
COPY ./front ./
RUN npm install
RUN npm run build

#Build Back
FROM stage_0 AS stage_2
COPY ./ ./
RUN npm install
RUN npm run build

#Release
FROM stage_0 AS stage_3
ENV STATIC_FILES_PATH=./public
COPY --from=stage_1 /usr/app/dist $STATIC_FILES_PATH
COPY --from=stage_2 /usr/app/dist ./
COPY  ./public ./public
COPY ./package.json ./
RUN npm install --only=production

ENTRYPOINT [ "node", "index.js" ]
