function confirmarDownload(url, nomeArquivo) {

  let confirmado;

  if (nomeArquivo === "EclipseApocalypse") {
    confirmado = confirm(
      `Deseja baixar o arquivo "${nomeArquivo}"? Este arquivo é um .capx de um jogo feito na plataforma Construct 2. Para jogar, você precisará abrir este arquivo na plataforma Construct 2 ou exportá-lo para um formato jogável.`
    );
  } else {
    confirmado = confirm(
      `Deseja baixar o arquivo "${nomeArquivo}"?`
    );
  }

  if (confirmado) {
    window.location.href = url;
  }
}
