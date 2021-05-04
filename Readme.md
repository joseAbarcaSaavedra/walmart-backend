
## SET environment

Set `MONGO_URL` in .env file based on .env.example (use container/mongo ip)

## RUN LOCAL

1. Install dependencies `npm install`

2. Run Start script `npm start`


## RUN IN DOCKER


docker build . -t jabarca/wallmart-backend


docker run -p 8080:8080 jabarca/wallmart-backend 