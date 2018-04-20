var projects = [
  {
    "id": "pollination",
    "name": "Pollination ecology",
    "description": "Animal pollination is key for global crop producction and the maintenance of biodiversity. Pollination is supported by animal interactions of a special kind. One in which both plants and pollinators benefit from each other. of mutual benefitThe interactions that support pollination, those between animals and plants, are very special because pollination a very special thing we like and depend on. It's also special because species helping each other. However we don't understand this and that. Therefore I'm investigating the factors that affect the stability of pollination  ",
    "image":"bee"
  },
  {
    "id": "network",
    "name": "Network Science",
    "description": "asdasda",
    "image": "net"
  }, 
  {
    "id": "ws",
    "name": "Whale Sharks",
    "description": "asdas",
    "image": "fin"
  }
]

createCardHeaderProjects = function (item, targetID, headerID) {
  var linkDiv = document.createElement("a")
  linkDiv.setAttribute("data-toggle", "collapse")
  linkDiv.setAttribute("data-target", "#" + targetID)
  linkDiv.setAttribute("aria-expanded", "false")
  linkDiv.setAttribute("aria-controls", targetID)
  linkDiv.setAttribute("href", "#!")
  var linkTitle = document.createElement("h4")
  linkTitle.classList.add("project-element-title")
  linkTitle.innerHTML = item.name
  var badgeDiv = document.createElement("img")
  badgeDiv.setAttribute("src", "media/" + item.image + ".svg")
  badgeDiv.setAttribute("alt", item.image)
  linkDiv.appendChild(badgeDiv)
  linkDiv.appendChild(linkTitle)
  var cardHeaderDiv = document.createElement("div")
  cardHeaderDiv.classList.add("card-header")
  cardHeaderDiv.classList.add("card-header-resume")
  cardHeaderDiv.classList.add("py-2")
  cardHeaderDiv.id = headerID
  cardHeaderDiv.appendChild(linkDiv)
  return cardHeaderDiv
}

createCardCollapseProjects = function (item, targetID, headerID, parentID) {
  var cardBody = document.createElement("div")
  cardBody.classList.add("card-body")
  cardBody.classList.add("card-body-resume")
  cardBody.classList.add("pt-0")
  cardBody.innerHTML = item.description
  var collapseDiv = document.createElement("div")
  collapseDiv.id = targetID
  collapseDiv.classList.add("collapse")
  collapseDiv.setAttribute("aria-labelledby", headerID)
  collapseDiv.setAttribute("data-parent", "#" + parentID)
  collapseDiv.appendChild(cardBody)
  return (collapseDiv)
}

createCardProjects = function (item, parent, mobile) {
  var targetID = "collapse-proj-" + item.id
  var headerID = "header-proj-" + item.id

  var cardDiv = document.createElement("div")
  cardDiv.classList.add("card")
  cardDiv.classList.add("card-projects")
  cardDiv.appendChild(createCardHeaderProjects(item, targetID, headerID))
  if(mobile=="true"){
    cardDiv.appendChild(createCardCollapseProjects(item, targetID, headerID, parent))
  }

  return cardDiv
}



createAcordionProjects = function (items, acordionID, mobile) {
  var acordeonDiv = document.createElement("div")
  var parentID = "acordion-" + acordionID
  acordeonDiv.classList.add("acordion")
  acordeonDiv.id = parentID
  for (var i = 0; i < items.length; i++) {
    acordeonDiv.appendChild(createCardProjects(items[i], parentID, mobile))
  }
  return acordeonDiv
}

document.getElementById("acordion-projects-container").appendChild(createAcordionProjects(projects,"acordion-projects", "true"))