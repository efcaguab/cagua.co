#!/bin/bash

cp ./nginx-full.conf /etc/nginx/sites-available/cagua
ln -s /etc/nginx/sites-available/cagua /etc/nginx/sites-enabled/cagua

rm -r /var/www/html
mkdir /var/www
ln -s ~/github/cagua-website/cagua_com/public_html /var/www/html
