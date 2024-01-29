# Docker Images
 * Mongo DB
 * RabbitMQ
 * Redis

![docker](examples/docker_img.png)

* run
`docker-compose up`
* stop
`docker-compose down`

* run in background
`docker-compose up -d`

[Docker Docs](https://docs.docker.com/)


## Redis

Disable redis auth password 
```
sudo nano /etc/redis/redis.conf
# requirepass yourpassword
redis-cli
CONFIG SET requirepass "yourpassword"
AUTH yourpassword
docker run --name redis_cont -e ALLOW_EMPTY_PASSWORD=yes bitnami/redis:latest
```

### Redis Notes 
(docker-compose.yml)

- With password
```
version: '2'
services:
  redis-master:
    image: 'bitnami/redis:latest'
    ports:
      - '6379:6379'
    command: redis-server --requirepass a3a8d31fb4cf4d629ad09fa9f2f7eddb
```

- No password
```
version: '2'
services:
  redis-master:
    image: 'bitnami/redis:latest'
    ports:
      - '6379:6379'
    environment:
      ALLOW_EMPTY_PASSWORD: "yes"
```


```
version: '2'

services:
  redis-master:
    image: 'bitnami/redis:latest'
    ports:
      - '6379'
    environment:
      - REDIS_REPLICATION_MODE=master
      - REDIS_PASSWORD=my_master_password
  redis-replica:
    image: 'bitnami/redis:latest'
    ports:
      - '6379'
    depends_on:
      - redis-master
    environment:
      - REDIS_REPLICATION_MODE=slave
      - REDIS_MASTER_HOST=redis-master
      - REDIS_MASTER_PORT_NUMBER=6379
      - REDIS_MASTER_PASSWORD=my_master_password
      - REDIS_PASSWORD=my_replica_password
```


------------------------------------

Ferdi Özer
[Linkedin](https://www.linkedin.com/in/ferdiozer/)