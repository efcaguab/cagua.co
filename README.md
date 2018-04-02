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

* Public html should live in `~/github/cagua-website/cagua_com/public_html`
* Shiny server should be running on the port 3838

## Works with

* nginx 1.10.3 (Ubuntu)
