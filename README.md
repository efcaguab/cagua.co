# cagua.co

To run the website:

1. Install nginx `sudo apt-get install nginx`
2. Open firewall for ports 80 `sudo ufw allow 'Nginx HTTP'`
2. Run `bash configure-nginx.sh` to copy nginx configuration and make symbolic link to public html

## Considerations

* Public html should live in `~/github/cagua-website/cagua_com/public_html`
* Shiny server should be running on the port 3838
