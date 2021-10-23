const linksSocialMedia = {
  github: 'mpdevtech',
  instagram: 'marcospaulloaraujo',
  fabebook: 'marcospaullosouza',
  twitter: 'mpaulloaraujo'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(Response => Response.json())
    .then(data => {alert(data.bio)})

  //alert(url)
}

getGitHubProfileInfos()
