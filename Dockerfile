FROM nginx:latest

# Clean the default html folder
RUN rm -rf /usr/share/nginx/html/*

# Copy your custom site files
COPY . /usr/share/nginx/html

