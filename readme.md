# Ratings API

Example of a simple implementation to build a ratings api on top of Redis

#### Related repositories

- [Favorites API](https://github.com/Eyevinn/favorites-api)
- [Continue Watching API](https://github.com/Eyevinn/continue-watching-api)
- [Stream Limit API](https://github.com/Eyevinn/stream-limit-api)
- [User Segmentation API](https://github.com/Eyevinn/user-segmentation-api)
- [Recommendation Engine](https://github.com/Eyevinn/eye-recommender)

## Requirements

- nodejs v10+
- redis

## Usage
- `git clone git@github.com:Eyevinn/ratings-api.git`
- `cd ratings-api`
- `npm install`
- Start Redis locally or insert the needed keys into the .env file
- `npm start` to run the server

## Endpoints

- POST `/ratings/:assetId/:rating` To rate an asset
- GET `/ratings/:assetId` to get the average rating for an asset

## Environment variables

- `NODE_ENV` if set to `development` there will be some logging made into the console
- `REDIS_URL` if not local
- `REDIS_PORT` if not default (6379)
- `REDIS_AUTH`

## Docker

A `docker-compose` config file is provided that takes care of building the image and running this container together with a Redis db container.

Start the service:

- `docker-compose up`

Stop the service:

- `docker-compose down`

The Redis container is using `/tmp` as persistant storage but this can be changed by modifying the `docker-compose.yml` file. Change:

```
    volumes:
      - /tmp:/bitnami/redis/data
```

to where you want the persistant storage to be located.

## About Eyevinn Technology

Eyevinn Technology is an independent consultant firm specialized in video and streaming. Independent in a way that we are not commercially tied to any platform or technology vendor.

At Eyevinn, every software developer consultant has a dedicated budget reserved for open source development and contribution to the open source community. This give us room for innovation, team building and personal competence development. And also gives us as a company a way to contribute back to the open source community.

Want to know more about Eyevinn and how it is to work here. Contact us at work@eyevinn.se!
