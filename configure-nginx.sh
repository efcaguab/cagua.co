#!/bin/bash

cp ./nginx-full.conf /usr/local/etc/nginx/nginx.conf
rm -r /var/www/html
mkdir /var/www
ln -s ~/github/cagua-website/cagua_com/public_html /var/www/html