var sidebarInfo = {
  "sidebar": [
    {
      "title": "Home",
      "link": "#header-box"
    },
    {
      "title": "About",
      "link": "#about"
    },
    {
      "title": "Publications",
      "link": "#papers"
    },
    {
      "title": "Resume",
      "link": "#cv"
    },
    {
      "title": "Contact",
      "link": "#contact"
    },
  ]
}

function sidebarItem(item, pointsTo){
  var itemLi = document.createElement("li")
  itemLi.classList.add("sidebar-nav-item")
  var itemLink = document.createElement("a")
  itemLink.classList.add("js-scroll-trigger")
  if (pointsTo == "main") {
    var link = "index.html" + item.link
  } else {
    var link = item.link
  }
  itemLink.setAttribute("href", link)
  itemLink.innerText = item.title
  itemLi.appendChild(itemLink)
  return(itemLi)
}

function sidebarList(items, pointsTo){
  var sidebarUl = document.createElement("ul")
  sidebarUl.classList.add("sidebar-nav")
  sidebarUl.classList.add("mx-2")
  for(i = 0; i < items.sidebar.length; i++){
    sidebarUl.appendChild(sidebarItem(items.sidebar[i], pointsTo))
  }
  return sidebarUl
}
