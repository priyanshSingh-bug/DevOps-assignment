set -e

echo "Checking Docker..."
docker --version >/dev/null 2>&1 || { echo "Docker not installed"; exit 1; }

echo "Checking Docker Compose..."
docker compose version >/dev/null 2>&1 || { echo "Docker Compose not installed"; exit 1; }

echo "Stopping old containers..."
docker compose down -v
docker compose down # for persisting data as per assignment

echo "Building & starting containers..."
docker compose up --build -d

echo "Waiting for app to be healthy..."
APP_CONTAINER=$(docker compose ps -q app)

until [ "$(docker inspect -f '{{.State.Health.Status}}' $APP_CONTAINER)" = "healthy" ];
do
  echo "App not healthy yet... waiting"
  sleep 2
done

echo "[SUCCESS] Application is live at http://localhost"