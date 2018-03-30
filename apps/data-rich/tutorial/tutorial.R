libraries <- c("httr", "jsonlite", "scatterplot3d")
for(x in libraries){
  if(!(x %in% rownames(installed.packages()))){
    stop(paste("You are missing the R library", x, sep=" "))
  }
}

download_data <- function(username, password, id, field){

  link <- paste("https://kc.kobotoolbox.org/api/v1/data",
                as.character(id), sep="/")
  
  data <- httr::GET(link,
                    httr::authenticate(username, password))
  data <- httr::content(data)
  data <- jsonlite::toJSON(data)
  data <- jsonlite::fromJSON(data)
  data <- strsplit(unlist(data[,field]), split=" ")
  data <- sapply(data, function(x) as.numeric(x))
  
  return(data)
}

simple_plot <- function(username, password, id, field = "Location"){
  data <- download_data(username, password, id, field)
  scatterplot3d::scatterplot3d(data[1,], data[2,], data[3,], "red", xlab="Latitude", ylab="Longitude", zlab="Altitude")
}

