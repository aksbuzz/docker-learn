- Changes made to a container’s environment are lost when the container stops, crashes, or gets replaced.

# Bind Mounts

- Directly mount a host directory into your container
- good for development env
- volumes are better for permanent storage

# Docker Volumes

- mechanism for storing data outside containers
- use cases - db, app data, caches, backups

``` docker -v <volume_name>:<container_path>```
Ex

Volume _test-volume_ mounted to /data
``` docker run -it -v test_volume:/data busybox:lastest ```

Add a file to this volume
``` echo "foobar" > /data/foo ```
Check if exist
``` cat /data/foo ``` -> ``` foobar ```

Create another container and mount above volume to /app
``` docker run -it -v test_volume:/app alpine:lastest ```

Now, /foo should be available at /app/foo
``` cat /app/foo ``` -> ``` foobar ```

## Compose

services:
  app:
    image: app-image:latest
    volumes:
      - app_data:/data
volumes:
  app_data:



- Bind mount

services:
  web:
    image: nginx:latest
    ports:
      - 8080:80
    volumes:
      - ./target:/usr/share/nginx/html