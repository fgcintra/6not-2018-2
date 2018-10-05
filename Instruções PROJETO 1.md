INSTRUÇÕES PARA FINALIZAÇÃO DO PROJETO 1
========================================

1. Criar nova aplicação no Firebase (https://firebase.google.com). **Ir para console** -> **Adicionar novo projeto** -> `chamadapp-<SEU RA>`.

2. No Firebase, adicionar a plataforma Android. *Nome do pacote Android*: `br.edu.fatecfranca.ra<SEU RA>`.

3. Baixe o arquivo `google-services.json` e o salve na pasta raiz do seu projeto.

4. Na página do projeto no Firebase, clique em **Autentication** e depois em **Método de login**.
   * Habilite o login via Google.
   * Siga as instruções de https://coderwall.com/p/r09hoq/android-generate-release-debug-keystores para gerar sua `debug.keystore`. Utize `android` como usuário e senha, quando solicitado. Pode ser necessário executar os comandos em um `cmd` aberto em modo Administrador.
   * Siga as instruções do link *Impressão digital SHA1* da página do Firebase e depois atualize as **configurações a nível de projeto**.
   * Acesse https://developers.facebook.com/apps. Clique sobre **Meus aplicativos** -> **Adicionar novo aplicativo**. *Nome de exibição*: ChamadApp.
   * Clique sobre **Login do Facebook** -> **Configurar**. No painel à esquerda, clique sobre **Configurações** abaixo de **Login do Facebook**.
   * Mantendo a aba do Facebook aberta, volte ao Firebase e habilite o login via Facebook. Copie e cole a URI de redirecionamento do Firebase no Facebook. No Firebase, complete os campos *App ID* e *App Secret* com os dados disponíveis no Facebook em **Configurações** -> **Básico**. O campo *Domínio do aplicativo* no Facebook deve ser preenchido com `chamadapp-<SEU RA>.firebaseapp.com`.
   * No Facebook, clique sobre o botão `Desativado` no canto superior direto. Será solicitada uma URL de política de privacidade (coloque qualquer uma) e escolha uma categoria para a aplicação (Educação) para ativar o aplicativo.
   
5. Voltando ao Visual Studio Code, execute `ionic serve` no terminal integrado e teste os logins com Google e Facebook.

6. O projeto será avaliado no dia **11/10 (quinta-feira)**, durante a aula.