# Docker Images, Mongo DB | RabbitMQ | Redis

![](https://www.docker.com/wp-content/uploads/2022/05/Docker_Temporary_Image_Google_Blue_1080x1080_v1.png)

* run
`docker-compose up`
* stop
`docker-compose down`

run in background
`docker-compose up -d`

[Docker Docs](https://docs.docker.com/)


## Redis

* Disable redis auth password 
```
sudo nano /etc/redis/redis.conf
# requirepass yourpassword
```
### Redis Notes
```
redis-cli
CONFIG SET requirepass "yourpassword"
AUTH yourpassword
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
