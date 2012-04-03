Cardápio RU UECE
===========

Sobre
========

Esta extensão alerta o usuário sobre o cardápio do Restaurante Universitário.

Aviso
========

Esta extensão está sob desenvolvimento e algumas outras funcionalidade serão adicionadas futuramente.  
Devido à página referente ao cardápio do *RU da Universidade Estadual do Ceará* não conter um padrão de html (estrutura no qual a página é feita), alguns erros podem ocorrer quando a extensão tentar obter o cardápio como não ter informações do dia, ou incertas. Com o desenvolvimento posterior novos casos de erros serão estudados para que a informação venha corretamente.

Informações técnicas
=========

Para que a notificação automática funcione, deve estar instalado no Linux o libnotify (já vem padrão em várias distros) e no Windows e OS X o [Growl](http://growl.info/).
Mesmo sem isso a extensão funciona normalmente, podendo-se acessar o painel com o cardápio completo.

Changelog
=========
V 0.2
========
* Adicionado request inteligente
** Só faz uma requisição ajax se o cardápio salvo no **storage** estiver defazado ou se não estiver salvo.

* Removido notificação ao clique no widget

* Adicionado notificação automática
** Após iniciar instância do firefox, verifica se é sábado, domingo ou se passaram das 13:00 horas, senão usuário é notificado.

* Adicionado painel com cardápio completo
** Disponível ao clicar no widget.

* Adicionado loader no widget
** Enquanto se obtém o cardápio, widget exibe barra de carregamento

V 0.1
========
* Request à página do cardápio do RU da UECE

* Notificação da opção de carne ao clicar no widget


Author
=========

Rubens Pinheiro Gonçalves Cavalcante  
email: [rubenspgcavalcante@gmail.com](mailto:rubenspgcavalcante@gmail.com)

Suporte
==========

Para relatar bugs ou pedir novas funcionalidades, basta abrir um pedido no [github](https://github.com/rubenspgcavalcante/Cardapio-RU-UECE/issues,"issues")

Licença e Direitos
===========

Utilizando GNU LESSER GENERAL PUBLIC LICENSE *Version 3, 29 June 2007*  
disponível [aqui](http://www.gnu.org/copyleft/gpl.html,"GPLv3")  
  
O logotipo (Brasão) e o nome Universidade Estadual do Ceará (UECE) são pertecentes ao Governo do Estado do Ceará ©. Todos os direitos reservados.