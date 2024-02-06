# get latest nginx image
FROM nginx:latest
# Remove default nginx config file
RUN rm /etc/nginx/conf.d/default.conf
# Copy config file from host to container
COPY nginx.conf /etc/nginx/conf.d/default.conf