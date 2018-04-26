var cv = {
  "education": [
    {
      "id": "phd",
      "summary": "PhD in Biological Sciences",
      "dates": "(2015-)",
      "details": '<a href="http://www.stoufferlab.org/">Stouffer Lab</a> at the <a href="http://www.biol.canterbury.ac.nz/">School of Biological Sciences</a> of the <a href="http://www.canterbury.ac.nz/">University of Canterbury</a>.',
      "extra": "With support from a New Zealand International Doctoral Research Scholarship and a Canterbury Doctoral Scholarship. Travel awards generously provided by the European Space Agency and the John Glover Award from the Australian Society of Fish Biology."
    },
    {
      "id": "masters",
      "dates": "(2010-2012)",
      "summary": "MSc in Marine Science &amp; Engineering",
      "details": '<a href="http://reefecology.kaust.edu.sa/Pages/Cagua.aspx">Marine Biology and Conservation</a> at the <a title="Red Sea Research Center" href="http://rsrc.kaust.edu.sa/Pages/Home.aspx">RSRC</a> at <a title="King Abdullah University of Science and Technology" href="http://www.kaust.edu.sa/">KAUST</a>.',
      "extra": "With support from a King Abdullah Discovery Fellowship and a grant from the Save our Seas Foundation."
    },
    {
      "id": "uw",
      "dates": "(2011)",
      "summary": "Marine Bioacoustics",
      "details": '<a title="Friday Harbor Laboratories" href="http://depts.washington.edu/fhl/" target="_blank">Friday Harbor Labs</a> at the <a title="University of Washington" href="http://www.washington.edu/" target="_blank">University of Washington</a>.',
      "extra": "With support from the Red Sea Research Center at KAUST."
    },
    {
      "id": "bachelor",
      "dates": "(2005-2010)",
      "summary": "Bachelor in Engineering",
      "details": '<a title="Definition of Mechatronics" href="http://en.wikipedia.org/wiki/Mechatronics" target="_blank">Mechatronics Engineering</a> at the <a href="http://www.unal.edu.co/english/">National University of Colombia</a> and the <a href="http://www.tum.de/en/homepage/" target="_blank">Technical University of Munich</a>.',
      "extra": "With support from the National University of Colombia 'Best GPA Program' and a scholarship from the German Academic Exchange Service, DAAD."
    }
  ],
  "work": [
    {
      "id": "abacus",
      "dates": "(2018)",
      "summary": "University of Canterbury",
      "details": "I ran a workshop to train biologists in the use of HPC to analyse genetic and environmental big data.",
      "extra": '<a href="http://cagua.co/sge-workshop/" target="_blank" title="HPC SGE workshop">Project website</a>.'
    },
    {
      "id": "data-rich",
      "dates": "(2017)",
      "summary": '<span title="Society for Conservation Biology">SCB</span>, <span title="New Zealand Ecological Society">NZES</span>, and <span title="Ecological Society of Australia">ESA</span>',
      "details": "I designed a series of seminars for environmental scientists to implement good data collection and management practices to speed up decision making in conservation. Seminars were presented at the International Congress of Conservation Biology and ECOTAZ, the Joint meeting of the Ecological Society of Australia and the New Zealand Ecological Society.",
      "extra": '<a href="http://cagua.co/data-rich-insight-poor/" target="_blank" title="HPC SGE workshop">Project website</a>'
    },
    {
      "id": "sif",
      "dates": "(2016)",
      "summary": "Seychelles Island Foundation",
      "details": "I improved species monitoring practices in Aldabra, a UNESCO World Heritage Site, by mining large datasets collected by the Seychelles Island Foundation.",
      "extra": ""
    },
    {
      "id": "mafia",
      "dates": "(2012-2014)",
      "summary": '<span title="King Abdullah University of Science and Technology">KAUST</span>',
      "details": "Working for the King Abdullah University for Science and Technology, I discovered that the largest fish in the world, which was previously thought to be a highly migratory species, can, in fact, be a year-round resident.",
      "extra": '<a href="https://doi.org/10.1098/rsbl.2015.0092" target="_blank">Research paper</a>, <a href="https://www.altmetric.com/details/3859498/news" target="_blank">media coverage</a>.'
    },
    {
      "id": "mwsrp",
      "dates": "(2013)",
      "summary": '<span title="Maldives Whale Shark Research Programme">MWSRP</span>',
      "details": "Working for the Maldives Whale Shark Research Programme, I found out how much is whale shark tourism worth in the Maldives. The results supported the creation of a management plan for the largest protected area in the country.",
      "extra": '<a href="https://doi.org/10.7717/peerj.515" target="_blank">Research paper</a>, <a href="https://www.altmetric.com/details/2588386" target="_blank">media coverage</a>'
    },
    {
      "id": "wwf",
      "dates": "(2013)",
      "summary": "World Wild Fund for Nature",
      "details": "I designed a system that uses artificial neural networks and underwater recording stations to detect illegal dynamite fishing in Tanzania.",
      "extra": '<a href="https://figshare.com/articles/Acoustic_Monitoring_of_Blast_Fishing_Pilot_Study/1003978" target="_blank">Technical Report</a>'
    }
  ]
}



createCardHeader = function (item, targetID, headerID) {
  var linkDiv = document.createElement("a")
  linkDiv.setAttribute("data-toggle", "collapse")
  linkDiv.setAttribute("data-target", "#" + targetID)
  linkDiv.setAttribute("aria-expanded", "true")
  linkDiv.setAttribute("aria-controls", targetID)
  linkDiv.setAttribute("href", "#!")
  var linkTitle = document.createElement("h4")
  linkTitle.classList.add("resume-element-title")
  linkTitle.innerHTML = item.summary + " " + item.dates
  linkDiv.appendChild(linkTitle)
  var cardHeaderDiv = document.createElement("div")
  cardHeaderDiv.classList.add("card-header")
  cardHeaderDiv.classList.add("card-header-resume")
  cardHeaderDiv.classList.add("py-2")
  cardHeaderDiv.id = headerID
  cardHeaderDiv.appendChild(linkDiv)
  return cardHeaderDiv
}

createCardCollapse = function (item, targetID, headerID, parentID) {
  var cardBody = document.createElement("div")
  cardBody.classList.add("card-body")
  cardBody.classList.add("card-body-resume")
  cardBody.classList.add("pt-0")
  cardBody.innerHTML = item.details + " " + item.extra
  var collapseDiv = document.createElement("div")
  collapseDiv.id = targetID
  collapseDiv.classList.add("collapse")
  collapseDiv.setAttribute("aria-labelledby", headerID)
  collapseDiv.setAttribute("data-parent", "#" + parentID)
  collapseDiv.appendChild(cardBody)
  return (collapseDiv)
}

createCard = function (item, parent) {
  var targetID = "collapse-" + item.id
  var headerID = "header-" + item.id

  var cardDiv = document.createElement("div")
  cardDiv.classList.add("card")
  cardDiv.classList.add("card-resume")
  cardDiv.appendChild(createCardHeader(item, targetID, headerID))
  cardDiv.appendChild(createCardCollapse(item, targetID, headerID, parent))
  return cardDiv
}

createAcordion = function (items, acordionID) {
  var acordeonDiv = document.createElement("div")
  var parentID = "acordion-" + acordionID
  acordeonDiv.classList.add("acordion")
  acordeonDiv.id = parentID
  for (var i = 0; i < items.length; i++) {
    acordeonDiv.appendChild(createCard(items[i], parentID))
  }
  return acordeonDiv
}