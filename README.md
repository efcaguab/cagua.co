# cagua.co

To run the website:

1. Install nginx `sudo apt-get install nginx`
2. Open firewall for ports 80 `sudo ufw allow 'Nginx HTTP'`
3. Pull website contents
4. Make sure that submodules are updated `git submodule update --recursive --remote` or (`git submodule update --init --recursive` if it's the first time checking out a repo.
5. Go to folder with website scripts `cd ~/github/cagua-website/cagua_com`
6. Run `sudo bash configure-nginx.sh` to copy nginx configuration
7. Run `sudo bash copy-public_html.sh` to copy website contents and fix permisions

## Considerations

* Public html to be copied should live in `~/github/cagua-website/cagua_com/public_html`
* Shiny server should be running on the port 3838
* Content lives in default location `/var/www/html`

## Managing the server

Status can be checked with `systemctl status nginx`

To stop, start and restart

```
sudo systemctl stop nginx
sudo systemctl start nginx
sudo systemctl restart nginx
```

For simple configuration changes `sudo systemctl reload nginx` would be enough.

If anything goes wrong and the process needs to be killed `sudo fuser -k 80/tcp` will do the trick.

Request logs are stored in `/var/log/nginx/access.log`. Error logs live in `/var/log/nginx/error.log`

## Works with

* nginx 1.10.3 (Ubuntu)

## Uninstalling

### MacOS

```
brew uninstall nginx
sudo rm -f -R /usr/local/var/run/nginx/
rm -f -R /usr/local/etc/nginx  
```
