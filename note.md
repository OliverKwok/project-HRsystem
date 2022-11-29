
# network diagram

user <--> internet <--> aws (elastic-ip) <--> nginx <--> react <--> backend <--> postgres

user <--> internet <--> cloudflare <--> aws (elastic-ip) <--> nginx <--> react <--> backend <--> postgres

user <--> internet <--> route-53 <--> cloud-front <--> s3 <--> react (js)
                                   |
                                   \-> nginx <--> backend <--> postgres


# cidi

git checkout prod
git pull

docker-compose down
docker-compose up --build
