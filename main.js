function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio)

  if (elemento && elemento.localname === 'audio') {
    elemento.play()
  } else {
    alert('erro. elemento nao encontrado')
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

for (i = 0; i < listaDeTeclas.length; i++) {
  const tecla = listaDeTeclas[i]
  const instrumento = tecla.classList[1]

  //template string
  const idAudio = `#som_${instrumento}`

  tecla.onclick = function () {
    tocaSom(idAudio)
  }

  tecla.onkeydown = function (e) {
    if (e.code === 'Space' || e.code === 'Enter') {
      tecla.classList.add('ativa')
    }
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
  }
}
