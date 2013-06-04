Cardápio RU UECE
===========

##Sobre

Esta extensão alerta o usuário sobre o cardápio do Restaurante Universitário.
Contém painel com o cardápio do dia.

##Aviso

Esta extensão está sob desenvolvimento e algumas outras funcionalidade serão adicionadas futuramente.  
Devido à página referente ao cardápio do *RU da Universidade Estadual do Ceará* não conter um padrão de html (estrutura no qual a página é feita), alguns erros podem ocorrer quando a extensão tentar obter o cardápio como não ter informações do dia, ou incertas. Com o desenvolvimento posterior novos casos de erros serão estudados para que a informação venha corretamente.

Para que a notificação automática funcione, deve estar instalado no Linux o libnotify (já vem padrão em várias distros) e no Windows e OS X o [Growl](http://growl.info/).
Mesmo sem isso a extensão funciona normalmente, podendo-se acessar o painel com o cardápio completo.

##Informações técnicas

Utilizando o firefox add-on SDK 1.6.  
Mais informações de como utilizá-lo em [Mozzila add-on 1.14](https://addons.mozilla.org/en-US/developers/docs/sdk/latest/).


##Changelog
V 0.53
-------
* Adicionado suporte ao Firefox 22

V 0.5
-------
* Updates de segurança
    * 'Escapando' HTML que vem do request de acordo com as medidas de segurança da Mozzila:
        *[DOM Building and HTML Insertion](https://developer.mozilla.org/en/XUL_School/DOM_Building_and_HTML_Insertion)

* Melhoria na interface
    * Modificações nas cores e fontes do painel
    * Alterações de fundo do widget

V 0.4
-------
* Melhoria na interface
    * Exibição do painel completo
    * Painel mais compacto
    * Widget mais bonito

* Bugfix
    * **Novo algoritmo de busca**. Cardápio de quinta puxava o de sexta e sexta permanecia em branco.
    * Dia sem cardápio não atualizava o painel.
    * Requisição de sábado e domingo removidas
    * Smart-request, mudava o mês e a semana atual tornava-se menor que no storage, no qual fazia-se requisições extras


V 0.3
-------
* Melhoria na interface
    * Interface em tons de cinza (Ambiance style).
    * Removido labels e deixado apenas ícones
    * Aplicado alguns atributos CSS3
    * Botão de fechar

* Busca por vários dias
    * Select adicionado para seleção de dia.

* Iniciar seleção por dia atual

Problemas conhecidos
-------
* Cardápio de quinta-feira puxa o de sexta.
    * Devido a um problema no HTML da página (erros de validação e falta de padrão), o script pega essa informação de forma errada.

V 0.2
-------
* Adicionado request inteligente
    * Só faz uma requisição ajax se o cardápio salvo no **storage** estiver defazado ou se não estiver salvo.

* Removido notificação ao clique no widget

* Adicionado notificação automática
    * Após iniciar instância do firefox, verifica se é sábado, domingo ou se passaram das 13:00 horas, senão usuário é notificado.

* Adicionado painel com cardápio completo
    * Disponível ao clicar no widget.

* Adicionado loader no widget
    * Enquanto se obtém o cardápio, widget exibe barra de carregamento

V 0.1
-------
* Request à página do cardápio do RU da UECE

* Notificação da opção de carne ao clicar no widget


##Autor

Rubens Pinheiro Gonçalves Cavalcante  
email: [rubenspgcavalcante@gmail.com](mailto:rubenspgcavalcante@gmail.com)

##Suporte

Para relatar bugs ou pedir novas funcionalidades, basta abrir um pedido no [github](https://github.com/rubenspgcavalcante/Cardapio-RU-UECE/issues "issues")

##Licença e Direitos

Utilizando GNU LESSER GENERAL PUBLIC LICENSE *Version 3, 29 June 2007*  
disponível em [gnu.org](http://www.gnu.org/copyleft/gpl.html,"GPLv3")  
  
O logotipo (Brasão) e o nome Universidade Estadual do Ceará (UECE) são pertecentes ao Governo do Estado do Ceará ©. Todos os direitos reservados.