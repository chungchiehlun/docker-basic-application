FROM node:8-alpine

# https://superuser.com/a/1187246
RUN apk add --update nodejs nodejs-npm

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# For production
RUN npm install --only=production

# Bundle app source
COPY . .
 
EXPOSE 9967

# Defines runtime
CMD [ "npm", "run", "start:prod" ]