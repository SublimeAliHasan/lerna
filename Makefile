package=

build:
	docker-compose build sublime-ui-packages

build-without-cache:
	docker-compose build --no-cache sublime-ui-packages

shell:
	docker-compose run --rm sublime-ui-packages bash

clean:
	docker-compose kill
	docker-compose down -v --remove-orphans

pkg-build:
	docker-compose run --rm sublime-ui-packages make build package=$(package)

pkg-publish:
	docker-compose run --rm sublime-ui-packages make version
	docker-compose run --rm sublime-ui-packages make publish
