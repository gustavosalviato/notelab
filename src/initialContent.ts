export const initialContent = `
<h1> What's the furture of the earth?</h1>
<ol>
  <li><strong>Verifique as Dependências do Projeto:</strong> Certifique-se de que todas as dependências do seu projeto estejam corretamente instaladas e configuradas. Isso inclui as dependências do Next.js e quaisquer outras dependências necessárias para o seu projeto.</li>
  <li><strong>Verifique a Configuração do Turbo Build:</strong> Revise sua configuração do Turbo Build em <code>turbo.json</code> para garantir que todos os comandos e scripts estejam configurados corretamente. Certifique-se de que os comandos utilizados no pipeline de build possam ser encontrados no ambiente de build. Se você estiver usando comandos específicos que não fazem parte das dependências do projeto, certifique-se de que esses comandos estejam disponíveis no ambiente de build ou sejam instalados antes de serem executados.</li>
  <li><strong>Verifique a Configuração do Ambiente:</strong> Certifique-se de que o ambiente de build configurado para o Turbo Build inclua todas as dependências necessárias e que os binários necessários estejam acessíveis. Se você estiver usando ferramentas ou pacotes específicos, verifique se eles estão instalados e configurados corretamente no ambiente de build.</li>
  <li><strong>Logs de Erro:</strong> Verifique se há logs de erro mais detalhados que possam fornecer informações adicionais sobre qual comando ou binário está causando o erro. Isso pode ajudar a identificar a origem do problema.</li>
  <li><strong>Atualize o Turbo Build:</strong> Verifique se você está usando a versão mais recente do Turbo Build. Às vezes, atualizações podem resolver problemas conhecidos.</li>
  <li><strong>Verifique a Disponibilidade do Binário:</strong> Se o erro se refere a um binário específico que não pode ser encontrado, verifique se esse binário está disponível no ambiente de build e se o caminho para ele está configurado corretamente.</li>
  <li><strong>Compartilhe o Erro:</strong> Se você não conseguir resolver o problema, pode ser útil compartilhar mais detalhes sobre o erro, incluindo os comandos exatos que estão sendo executados e qualquer mensagem de erro completa. Isso pode ajudar a obter assistência mais específica.</li>
</ol>
`
