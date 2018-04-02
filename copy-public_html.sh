#!/bin/bash

rm -r /var/www/html
cp -r ~/github/cagua-website/cagua_com/public_html /var/www/html
chown -R www-data /var/www/html
