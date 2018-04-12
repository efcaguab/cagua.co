function buildBreadcrumbL1(thispage){
  
  var LiParent = document.createElement("li")
  LiParent.classList.add("breadcrumb-item")
  var LinkParent = document.createElement("a")
  LinkParent.setAttribute("href", "index.html")
  LinkParent.innerText = "Home"
  LiParent.appendChild(LinkParent)
  
  var LiThis = document.createElement("li")
  LiThis.classList.add("breadcrumb-item")
  LiThis.classList.add("active")
  LiThis.setAttribute("aria-current", "page")
  LiThis.innerText = thispage

  var OlList = document.createElement("ol")
  OlList.classList.add("breadcrumb")
  OlList.classList.add("my-0")
  OlList.appendChild(LiParent)
  OlList.appendChild(LiThis)
  
  return(OlList)
}
