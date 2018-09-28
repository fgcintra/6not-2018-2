INSTRUÇÕES PARA FINALIZAÇÃO DO PROJETO 1
========================================

1. Criar nova aplicação no Firebase (https://firebase.google.com). **Ir para console** -> **Adicionar novo projeto** -> `chamadapp-<SEU RA>`.

2. No Firebase, adicionar a plataforma Android. *Nome do pacote Android*: `br.edu.fatecfranca.<SEU RA>`.

3. Baixe o arquivo `google-services.json` e o salve na pasta raiz do seu projeto.

4. Na página do projeto no Firebase, clique em **Autentication** e depois em **Método de login**.
   * Habilite o login via Google.
   * Siga as instruções de https://coderwall.com/p/r09hoq/android-generate-release-debug-keystores para gerar sua `debug.keystore`. Utize `android` como usuário e senha, quando solicitado. Pode ser necessário executar os comandos em um `cmd` aberto em modo Administrador.
   * Siga as instruções do link *Impressão digital SHA1* da página do Firebase e depois atualize as **configurações a nível de projeto**.