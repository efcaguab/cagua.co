

extract_second <- function(x){
  str_split_fixed(x, "_", 2)[,2]
}

factors <- c("region", "zona", "estrato", "genero", "edad", "partido", "consulta")
candidatos <- c("duque", "petro", "fajardo", "vargas", "delacalle", "morales", "cordoba", "blanco")

encuesta <- read.csv("./data/encuesta_2018-03-18.csv") %>%
  mutate(candidato = as.character(candidato)) %>%
  filter(candidato %in% candidatos) %>%
  mutate_if(is.numeric, function(x) x + 1)

totals_2018_03_18 <- encuesta %>%
  select(candidato, X2018.03.18) %>%
  rename(total = X2018.03.18)

columnas <- factors %>%
  map(~ names(encuesta)[str_detect(names(encuesta), .)]) %>%
  unlist()
columnas <- c("candidato", columnas)

encuesta_2018_03_18 <- encuesta %>% 
  select(-starts_with("X")) %>%
  select(columnas)

encuesta_2018_03_18_p <- encuesta_2018_03_18 %>% mutate_if(is.numeric, function(x) x / sum(x))
totals_2018_03_18_p <- totals_2018_03_18 %>% mutate_if(is.numeric, function(x) x / sum(x))

e <- encuesta_2018_03_18_p
for (i in 1:length(factors)){
  e <- e %>%
    gather(UQ(paste0(factors[i], "_name")), UQ(paste0(factors[i], "_value")), contains(factors[i]))
}

e <- e %>% mutate_at(vars(contains("name")), extract_second)
filtering <- function(e, t, ...){
  filters <- c(...)
  if (length(filters) > 0){
    name_cols <- paste(names(filters), "name", sep = "_")
    value_cols <- paste(names(filters), "value", sep = "_")
    for(i in 1:length(filters)){
      filter_criteria <- lazyeval::interp(~y == x, .values=list(y = as.name(name_cols[i]), x = filters[i]))
      e <- e %>%
        filter_(filter_criteria)
    }
    keep_cols <- c("candidato", name_cols, value_cols)
    e <- e %>% select(!!!keep_cols)
    distinct(e)
  } else {
    t
  }
}

compile <- function(x){
  y <- x %>%
    select_if(is.numeric) %>%
    mutate(tot = Reduce(`*`, .)) %>%
    mutate(tot = tot / sum(tot), 
           rank = min_rank(tot))
  bind_cols(select_if(x, is.character), y)
}

a <- e %>%
  split(list(.$region_name, .$zona_name, .$estrato_name, .$genero_name, .$edad_name, .$partido_name, .$consulta_name)) %>%
 map_df(~compile(.))

a %>% 
  ggplot(aes(x = candidato, y = qlogis(tot))) + 
  geom_boxplot()

a %>% 
  ggplot(aes(x = candidato, y = rank)) + 
  geom_boxplot()
