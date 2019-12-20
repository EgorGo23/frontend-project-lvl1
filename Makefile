install:
	npm install

start:
	npx babel-node src/bin/brain-even.js

publication:
	npm publish --dry-run

lint:
	npx eslint src/index.js
