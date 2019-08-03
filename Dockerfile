# note: run docker build in a directory that contains this Docker build file, the package.json file and all your application sources and static files 
# this directory should NOT contain the node-modules or any other resources that should not go into the Docker container - unless these are explicitly excluded in a .Dockerignore file!
FROM node:10.13.0-alpine
 
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Create app directory
WORKDIR /app
 
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /app/
 
RUN npm install 
 
# Bundle app source - copy Node application from the current directory
COPY ./ /app/

# run the application, using npm start (which runs the start script in package.json)
CMD ["npm","start"]

# the application will be exposed at port 8080 
# ENV PORT=3000
 
#so we should expose that port
EXPOSE 3000

