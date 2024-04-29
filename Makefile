.DEFAULT:
	help

help:
	@echo "I don't know what you want me to do."

build:
	docker build . -t jsyrovy/jekyll

run:
	docker run -v $(PWD):/srv/jekyll -p 4000:4000 --name bozp-po-syrovy.eu -it jsyrovy/jekyll

start:
	docker start -ai bozp-po-syrovy.eu
