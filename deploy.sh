#git pull

cd frontend

rm -rf node_modules

./build.sh

cd ..

docker-compose down

docker-compose up --build