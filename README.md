# docker-learn
Repo to learn docker

## Access containers from host system

Docker container will expose ports which can be used to access
the app.

- To expose, we have to publish these ports when creating contaienr
using --publish (-p) option

```-p <host_port>:<container_port>```

  Example
```docker run --publish 80:80 examplename/examplerepository-server:0.1.0```


## Volumes

Data that is stored inside a container is not persisted by default.
When you stop and remove a container, all data from this container is lost.

There are two different volume types:
1. named volumes - handled by docker
2. mounted volumes - handled by you

```--volume (shorthand -v)```

Named
```-v <volume_name>:/path/in/container```

Mounted
```-v /path/on/host:/path/in/container```

Example
```docker run -v server-volume:/app/build/data -p 80:80 app-server:0.1.0```
