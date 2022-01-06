install:
	rm -rf node_modules
	rm -rf yarn.lock
	pnpm install

build-release:
	rm -rf dist
	pnpm build:release

release:
	git checkout release
	git merge master
	git push origin release
	git checkout master
