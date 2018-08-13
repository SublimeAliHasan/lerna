build:
	npx lerna bootstrap --scope=$(package)
	npx lerna exec --scope=$(package) npm start
	npx lerna exec --scope=$(package) sh make.sh $(package)

version:
	npx lerna version --skip-npm --skip-git

publish:
	npx s3p sync
