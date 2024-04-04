FROM httpd:latest

LABEL maintainer piero.quiroz@tecsup.edu.pe

RUN apt-get update && \
        apt-get install -y nodejs npm git && \
        ln -s /usr/bin/nodejs /usr/bin/node

RUN git clone -q https://github.com/PieroQuirel/dsn_lab04.git

WORKDIR dsn_lab04

RUN npm install > /dev/null

EXPOSE 1400

CMD ["npm","start"]