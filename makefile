# Variables
NPM = npm
SRC_PROJECT = ./app

# Targets
.PHONY: all

install: 
	cd $(SRC_PROJECT) && $(NPM) install

dev:
	cd $(SRC_PROJECT) && $(NPM) run dev