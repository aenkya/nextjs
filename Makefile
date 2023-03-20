.PHONY: up down build clean help
SERVICE_NAME := enkya-web

# Run tests
test:
	npm test

# Run linting
lint:
	npm run lint

up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose -f docker-compose.yml build --no-cache

clean:
	-docker stop ${SERVICE_NAME}
	-docker-compose rm -f -s -v

help:
	@echo "Usage: make [TARGET]"
	@echo ""
	@echo "Targets:"
	@echo "  up      Start services"
	@echo "  down    Stop and remove services"
	@echo "  build   Build services"
	@echo "  clean   Remove built containers"
	@echo "  lint    Lint the project"
	@echo "  test		 Run tests"