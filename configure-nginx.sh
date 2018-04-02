#!/bin/bash

cp ./nginx.conf /etc/nginx/sites-available/cagua
ln -s /etc/nginx/sites-available/cagua /etc/nginx/sites-enabled/cagua
rm /etc/nginx/sites-enabled/default
