#!/bin/bash

SO=$(uname -s)
echo "Running NGINX configuration for" $SO

if [ $SO == 'Darwin' ] ; then
  # change parts of the configuration script that require different folders
  sed 's/user www-data/# user www-data;/' nginx.conf | \
  sed 's?pid /run/nginx.pid;?#pid /run/nginx.pid;?' | \
  sed 's#include /etc/nginx/mime.types;#	include /usr/local/etc/nginx/mime.types;#' | \
  sed 's#access_log /var/log/nginx/access.log;#	access_log /usr/local/var/log/nginx/access.log;#' | \
  sed 's#error_log /var/log/nginx/error.log#error_log /usr/local/var/log/nginx/error.log#' | \
  sed 's#include /etc/nginx/conf.d/\*.conf;#include /usr/local/etc/nginx/conf.d/*.conf;#' | \
  sed 's#include /etc/nginx/sites-enabled/\*;#	include /usr/local/etc/nginx/sites-enabled/*;#' > nginx.conf.temp
  cp nginx.conf.temp /usr/local/etc/nginx/nginx.conf
  rm nginx.conf.temp
  # adopt sites-enabled configuration just like in linux
  mkdir -p /usr/local/etc/nginx/sites-enabled
  cp ./cagua-co.conf /usr/local/etc/nginx/sites-enabled/cagua-co
fi

if [ $SO == 'Linux' ] ; then
  cp ./cagua-co.conf /etc/nginx/sites-available/cagua-co
  ln -s /etc/nginx/sites-available/cagua-co /etc/nginx/sites-enabled/cagua-co
  cp ./iccb-datarich.conf /etc/nginx/sites-available/iccb-datarich-com
  ln -s /etc/nginx/sites-available/iccb-datarich-com /etc/nginx/sites-enabled/iccb-datarich-com
  rm /etc/nginx/sites-enabled/default
fi
