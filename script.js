function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  const alt = document.documentElement

  if (html.classList.contains("light")) {
    img.setAttribute(
      "alt",
      "foto do mayke brito de oculos sorrindo com fundo rosa e azul"
    )
  } else {
    img.setAttribute(
      "alt",
      "foto do mayke brito sorrindo, com camisa preta e fundo laranja"
    )
  }
}
