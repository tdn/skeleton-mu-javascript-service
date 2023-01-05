# skeleton-mu-javascript-service
A starting point for javascript services in the [mu-semtech stack](https://github.com/mu-semtech/mu-project)

To add it to your stack, add this to `docker-compose.override.yml` in `mu-project`:

```
skeleton-service:
  #image: semtech/mu-javascript-template #only for linux users
  image: semtech/mu-javascript-template:windows #only for windows users
  ports:
    - 8882:80
  environment:
    NODE_ENV: "development"
    DEV_OS: "windows" #only for windows users
  links:
    - triplestore:database
  volumes:
    - /path/to/your/code/directory/:/app/
    - /path/to/your/data/directory/:/data/
```
