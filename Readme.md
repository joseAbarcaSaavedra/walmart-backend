
# Hi

Simple backend 

## SET environment

Set `MONGO_URL` in .env file based on .env.example (use container/mongo ip)

## RUN LOCAL

1. Install dependencies `npm install`

2. Run start script `npm start`

## RUN TESTS

1. Install mocha  `npm install -g mocha`

2. Build App  `npm run build`

3. Run test `npm run test`

## RUN IN DOCKER

1. Build docker image `docker build . -t jabarca/wallmart-backend`

2. Run docker image `docker run -p 8080:8080 jabarca/wallmart-backend`