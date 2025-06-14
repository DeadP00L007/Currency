FROM nginx:1.28.0-perl

# Clean the default html folder
# RUN rm -rf /usr/share/nginx/html/*
# Copy your custom site files

COPY . /usr/share/nginx/html

