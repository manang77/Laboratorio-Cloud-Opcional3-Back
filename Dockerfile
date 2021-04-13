FROM node:12-alpine AS stage_0
RUN mkdir -p /usr/app
WORKDIR /usr/app

FROM stage_0 AS stage_1
COPY ./ ./
RUN npm install
RUN npm run build


FROM stage_0 AS stage_2
COPY --from=stage_1 /usr/app/dist ./
COPY --from=stage_1 /usr/app/public ./
COPY ./package.json ./
RUN npm install --only=production

ENTRYPOINT [ "node", "index.js" ]
