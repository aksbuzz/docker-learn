- Used to establish communication between Docker containers and the outside world

- Docker handles communication between containers by creating a default **bridge network**

- Docker achieves network isolation using __namespaces__ and __iptables rules__

- Types

1. bridge - 
2. host
3. overlay
4. IPvLAN
5. macvlan

## Bridge

- Containers in the network can communicate with each other using their own IP addresses and DNS names.
- Have access to your host’s network, so they can reach the internet and your LAN.

``` docker network create <network_name> -d bridge```

To add a container to above bridge network

``` docker network connect <network_name> <container_name>```

## Host

- Bind ports directly to host's interface
- containerized apps will function similar to network services running on your host

Example: run nginx server on host's localhost:80 (default port of Nginx)
``` docker run -d --name nginx --network host nginx:latest```

# With Docker Compose

- Services in your stack are automatically added to a shared bridge network

- In below, only app and mysql service will be able to communicate

services:
  app:
    ...
    networks:
      - db
  helper:
    ...
  mysql:
    ...
    networks:
      - db
networks:
 db: