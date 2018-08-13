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
	npx lerna bootstrap --scope=$(package)
	npx lerna exec --scope=$(package) npm start
	npx lerna exec --scope=$(package) sh make.sh $(package)

pkg-version:
	npx lerna version --skip-npm --skip-git

pkg-publish:
	docker-compose run --rm sublime-ui-packages npx s3p sync
