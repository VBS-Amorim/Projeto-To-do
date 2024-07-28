### Projeto To-Do List ###

Este é um projeto de uma aplicação de lista de tarefas (To-Do List) desenvolvido utilizando React. O objetivo é gerenciar tarefas, permitindo criar, editar, excluir e marcar tarefas como concluídas.
____________________________________________________________________________________________________________________________________________________________

=> Requisitos

Antes de iniciar o projeto é necessário algumas tecnologias e softwares instalados, são eles:

- [Node.js](https://nodejs.org/en/download/) (v12 ou superior)
- [npm](https://www.npmjs.com/get-npm) (normalmente instalado com o Node.js)
- [Git](https://git-scm.com/downloads)

____________________________________________________________________________________________________________________________________________________________
=> Passos para Clonar e Rodar o Projeto

1. Clonar o Repositório

   Abra seu terminal e execute o comando:
  
   => git clone https://github.com/VBS-Amorim/Projeto-To-do.git
   

2. Entre no Diretório do Projeto

   Após clonar o repositório, navegue até o diretório do projeto:

   => cd Projeto-To-do
 

3. Instalar Dependências

   Execute o seguinte comando para instalar todas as dependências necessárias para o projeto rodar sem problemas:

    => npm install


4. Executar o Projeto

   Depois de instalação, inicie o projeto com o comando:

   => npm run dev

   O projeto será iniciado, e você poderá acessá-lo em `http://localhost:3000` no seu navegador.

____________________________________________________________________________________________________________________________________________________________
=> Funcionalidades


- Adicionar Tarefa: Adicione novas tarefas com título e descrição.
- Editar Tarefa: Edite o título e a descrição de uma tarefa existente.
- Excluir Tarefa: Exclua tarefas indesejadas.
- Marcar como Concluído: Marque tarefas como concluídas ou não concluídas.
- Filtrar e Ordenar Tarefas: Filtre tarefas por status (todas, concluídas, não concluídas) e ordene por título.

____________________________________________________________________________________________________________________________________________________________

=> Estrutura do Projeto

- ./src/App.jsx: Componente principal que contém a lógica, além disso, renderiza os componentes da aplicação.
- ./src/components/Todo.jsx: Componente para exibir cada tarefa.
- ./src/components/TodoForm.jsx: Formulário para adicionar novas tarefas.
- ./src/components/EditTodoForm.jsx: Formulário para editar tarefas existentes.
- ./src/components/Searching.jsx: Componente de busca para filtrar e buscar as tarefas.
- ./src/components/Filter.jsx: Componente para filtrar e ordenar tarefas.

____________________________________________________________________________________________________________________________________________________________
=> Para contribuições

Se você quiser contribuir com o projeto, siga os passos abaixo:

1. Faça um fork do repositório.

2. Crie uma nova branch para sua feature ou correção de bug:

   git checkout -b feature/nova-feature

3. Commit suas alterações:

   git commit -m 'Adiciona nova feature'

4. Faça o push para sua branch:
 
   git push origin feature/nova-feature

5. Abra um Pull Request.
____________________________________________________________________________________________________________________________________________________________

=> Para problemas e sugestões

Se encontrar algum problema ou tiver sugestões, por favor, abra uma issue no repositório ou me contacto por outros meios encontrados no meu perfil!
