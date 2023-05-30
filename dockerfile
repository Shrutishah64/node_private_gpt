FROM nikolaik/python-nodejs

RUN python3 --version

USER root

# Install Python 3.8 dependencies
RUN apt-get update \
    && apt-get install -y build-essential libssl-dev zlib1g-dev libncurses5-dev libncursesw5-dev \
    && apt-get clean

# Download and install Python 3.8
RUN wget https://www.python.org/ftp/python/3.8.12/Python-3.8.12.tgz \
    && tar -xf Python-3.8.12.tgz \
    && cd Python-3.8.12 \
    && ./configure --enable-optimizations \
    && make install \
    && cd .. \
    && rm -rf Python-3.8.12 Python-3.8.12.tgz

RUN python3 --version

RUN mkdir -p /app
WORKDIR /app

# Copy the Node.js project files to the container
COPY package.json ./
RUN npm install

RUN npm install -g nodemon

# Copy the Python project files to the container
COPY ./privateGPT/requirements.txt ./privateGPT/
RUN pip3 install -r ./privateGPT/requirements.txt

# Copy the rest of the project files to the container
COPY . .

# this will build the browser and server files:
EXPOSE 3003
CMD ["npm","start"]