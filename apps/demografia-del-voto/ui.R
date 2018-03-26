width_select_inputs <- "100%"

htmlTemplate(
  "demografia_template.html",
  input_region = 
    selectInput("i_region", 
                label = "",
                choices = list("En qué región vive?" = "",
                               Bogota = "bogota", 
                               Norte = "norte", 
                               Centrooriental = "centrooriental", 
                               Cafetera = "cafetera", 
                               Suroccidental = "suroccidental"), 
                width = width_select_inputs),
  input_zona = 
    selectInput("i_zona", 
                label = "", 
                choices = list("Zona urbana o rural" = "",
                               Rural = "rural", 
                               Urbana = "urbano"),
                width = width_select_inputs),
  candidate_rank = tableOutput("candidate_rank")
)