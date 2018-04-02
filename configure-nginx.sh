#!/bin/bash


cp ./nginx-full.conf /usr/local/etc/nginx/nginx.conf
cp ./nginx-full.conf /etc/nginx/nginx.conf
mv /etc/nginx/sites-enabled/default /etc/nginx/sites-enabled/default-copy 
cp ./nginx-full.conf /etc/nginx/sites-enabled/default

rm -r /var/www/html
mkdir /var/www
ln -s ~/github/cagua-website/cagua_com/public_html /var/www/html
