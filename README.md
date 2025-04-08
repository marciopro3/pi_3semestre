# 📌 Projeto Integrado - Intranet Boa Vista Seguros

## 📖 Sobre o Projeto
Este projeto faz parte do nosso **Projeto Integrado (PI)**, desenvolvido ao longo do curso e entregue a cada semestre. O objetivo é criar uma **intranet** para a **corretora de seguros Boa Vista Seguros**, localizada em **São João da Boa Vista**.

O sistema será utilizado para **gestão interna**, facilitando a comunicação entre os colaboradores e o gerenciamento de informações da corretora.

## 🏗️ Estrutura do Ambiente
O projeto está **hospedado em um servidor local** na minha casa, com IP público **[bvseguros.ddns.net/](http://bvseguros.ddns.net/)**. Para garantir alta disponibilidade e segurança, utilizamos a seguinte infraestrutura:

- **Hardware**: Blade da **Dell**
- **Virtualização**: **VMware**, rodando uma **VM com Ubuntu Server 24.04**
- **Backup**: **Veeam**, com opção de **restauração para qualquer nuvem**
- **VPN**: Utilizamos **roteadores Mikrotik** para estabelecer conexões seguras via **VPN**

## 🛠️ Tecnologias Utilizadas
Nosso sistema web utiliza as seguintes tecnologias:

### 🔹 Backend:
- **Node.js**
- **Express.js**
- **Knex.js** (ORM para conexão com banco de dados)
- **MySQL**
- **API REST** (testada com **Postman**)

### 🔹 Frontend:
- **HTML**
- **CSS**
- **JavaScript**

### 🔹 Servidor Web:
- **Apache**

## 🚀 Funcionalidades do Sistema
- 🔹 **Autenticação de usuários**
- 🔹 **Cadastro e gerenciamento de clientes e apólices**
- 🔹 **Controle de sinistros e solicitações**
- 🔹 **Comunicação interna entre colaboradores**
- 🔹 **Relatórios e painéis gerenciais**
- 🔹 **Conexão segura via VPN**

## 🔧 Como Rodar o Projeto Localmente
Se deseja testar o projeto em seu ambiente, siga os passos abaixo:

### 1️⃣ Clonar o Repositório
```sh
 git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2️⃣ Instalar Dependências
Acesse a pasta do projeto e instale as dependências do backend:
```sh
cd backend
npm install
```

### 3️⃣ Configurar o Banco de Dados
Crie um banco MySQL e configure as credenciais no arquivo **.env**:
```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=senha
DB_NAME=boavista_seguros
```
Execute as migrações:
```sh
npx knex migrate:latest
```

### 4️⃣ Iniciar o Servidor
```sh
npm start
```

O backend rodará na porta **3000** por padrão.

### 5️⃣ Configurar e Rodar o Frontend
O frontend está localizado na pasta **public** do Apache e pode ser acessado pelo navegador via:
```sh
http://bvseguros.ddns.net
```

## 🛡️ Backup e Segurança
- Backups automáticos utilizando **Veeam**
- Logs de acessos e auditoria
- Restrições de acesso via **firewall e regras específicas no Apache**
- Opção de restauração em **nuvem pública ou privada**
- Conexões seguras via **VPN com roteadores Mikrotik**

## 📚 Instituição de Ensino
Este projeto está sendo desenvolvido na **UNIFEOB - Centro Universitário Fundação de Ensino Octávio Bastos**.

### 🏫 Professores Orientadores:
- **Mariangela Martimbianco Santos** - Coordenadora
- **Max Streicher Vallim** - Banco de Dados / Data Warehouse
- **Nivaldo de Andrade** - Backend
- **Luís Gustavo Maschietto** - Frontend
- **Rodrigo Marudi de Oliveira** - Computação em Nuvem

## 📢 Equipe de Desenvolvimento
- **Calebe Matheus Moreira Moraes** - RA 24000974  
- **Gustavo de Moraes Donadello** - RA 24000419  
- **Leandro José de Carvalho Coelho** - RA 24001964  
- **Lucas Vigo Calió** - RA 24000092  
- **Marcio Augusto Garcia Soares** - RA 24000138  
- **Mateus Oliveira Milane** - RA 24000308  

## 📌 Status do Projeto
📅 **Entrega prevista para:** 02/06/2025  
⚠️ Em desenvolvimento 🚧

## 📬 Contato
Para dúvidas ou sugestões, entre em contato pelo email: **marcio.soares@sou.unifeob.edu.br**

---
**© 2024 Boa Vista Seguros - Projeto Integrado**