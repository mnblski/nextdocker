.PHONY: build-staging
build-staging: ## Build the staging docker image.
	MODE=staging docker compose -f docker-compose.yml build

.PHONY: start-staging
start-staging: ## Start the staging docker container.
	MODE=staging docker compose -f docker-compose.yml up -d

.PHONY: build-production
build-production: ## Build the staging docker image.
	MODE=prod docker compose -f docker-compose.yml build

.PHONY: start-production
start-production: ## Start the staging docker container.
	MODE=prod docker compose -f docker-compose.yml up -d

# .PHONY: stop-staging
# stop-staging: ## Stop the staging docker container.
#  	docker compose -f docker-compose.yml down

# .PHONY: clear-staging
# clear-staging: ## Clear the staging docker resources.
# 	docker compose -f docker-compose.prod.yml down --rmi all --volumes --remove-orphans
# 	docker system prune -f --volumes

