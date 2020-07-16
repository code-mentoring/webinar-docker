# Use the base image with Alpine Linux, and Node.JS pre-installed
FROM node:10

# Copy across all the files needed
ADD package.json package.json
RUN npm i

ADD server.js server.js

EXPOSE 9999
CMD ["node", "server.js"]
