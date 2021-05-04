

set MONGO_URL in .env file based on .env.example (use container/mongo ip)
docker build . -t jabarca/wallmart-backend


docker run -p 8080:8080 jabarca/wallmart-backend 