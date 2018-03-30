docker run --name mywebsite -d -p 80:3838 \
    -v ~/github/cagua-website/cagua_com/apps:/srv/shiny-server/ \
    -v ~/github/cagua-website/cagua_com/logs:/var/log/shiny-server/ \
    rocker/shiny

docker exec -it mywebsite apt-get update

# demografia del voto app
docker exec -it mywebsite Rscript -e "install.packages('packrat')"
docker exec -it mywebsite sudo apt-get install -y libxml2-dev libssl-dev
docker exec -it mywebsite sudo chown -R shiny:shiny /srv/shiny-server/demografia-del-voto
docker exec -it mywebsite Rscript -e "packrat::restore('/srv/shiny-server/demografia-del-voto')"
docker exec -it mywebsite make -C /srv/shiny-server/demografia-del-voto
