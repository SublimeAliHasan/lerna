build:
	node_modules/lerna/cli.js bootstrap --scope=$(package)
	node_modules/lerna/cli.js exec --scope=$(package) npm start
	node_modules/lerna/cli.js exec --scope=$(package) sh make.sh $(package)

version:
	sh make.sh

publish:
	node_modules/s3-publish/cli.js sync
