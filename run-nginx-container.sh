#!/bin/bash

docker run --name nginx -p 80:80 -d \
    -v ~/github/cagua-website/cagua_com/public_html:/usr/share/nginx/html \
    -v ~/github/cagua-website/cagua_com/nginx.conf:/etc/nginx/nginx.conf:ro \
    nginx
