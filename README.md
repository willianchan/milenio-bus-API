# API Milenio Bus

API responsável pelo processamento de dados de embarcados e fornecimento de dados para frontend

---
## Requisitos

Para desenvolvimento você precisará do **Node.js** e do **SQL Server Express**

### Node
- #### Instalação do Node no Windows

  Vá até o [site oficial Node.js](https://nodejs.org/) e baixe o instalador.

### SQL Server Express
- #### Instalação do SQL Server no Windows

   Vá até o [site oficial SQL Server](https://www.microsoft.com/pt-br/sql-server/sql-server-downloads) e baixe o instalador Express.


## Instalação das dependências do Node.js

Rode os comandos abaixo para clonar o repositório e instalar dependências do Node.js

    $ git clone https://github.com/willianchan/milenio-bus-API.git
    $ cd milenio-bus-API
    $ npm install

## Configuração do SQL Server

- Após instalação conecte-se ao servidor padrão com autenticação do Windows
- Realize uma nova consulta a partir do arquivo `script.sql` para realizar a criação do banco de dados
- Crie um novo usuário de logon no caminho **Pesquisador de Objetos** -> **Segurança** -> **Logons** -> Clique com botão direito e adicione **Novo Logon**, selecione Autenticação do SQL Server e configure o logon: **admin** e senha: **admin**
![erro](https://raw.githubusercontent.com/willianchan/milenio-bus-API/master/imgs/logon.PNG)
- Certifique-se que o SQL Server Browser está ativo e o protocolo TCP/IP está habilitado acessando o **SQL Server Configuration Manager**
![erro](https://raw.githubusercontent.com/willianchan/milenio-bus-API/master/imgs/browser.PNG)
![erro](https://raw.githubusercontent.com/willianchan/milenio-bus-API/master/imgs/tcp-ip.PNG)


## Configuração do Node

Na pasta raiz abra o arquivo `mssqlConfig.js` e edite o parâmetro **server** para o nome do servidor local SQL Server, talvez seja necessário alterar as configurações de **usuário** e **senha** para estarem equivalentes ao usuário do SQL Server

```
const configDev = {
    user: 'admin',
    password: 'admin',
    server: 'DESKTOP-BT3P5OH\\SQLEXPRESS',
    database: 'milenio-bus',
    pool: {
        max: 20,
        min: 0,
        idleTimeoutMillis: 30000
    }
}
```
## Executando o projeto
Digite o seguinte comando em um terminal dentro da pasta raiz

    $ node index.js