/**
 * @swagger
 * tags:
 *   - name: Clientes
 *   - name: Orçamentos
 *   - name: Seguro Automóvel
 *   - name: Seguro Empresarial
 *   - name: Seguro Frota
 *   - name: Seguro RETA
 *   - name: Seguro Residencial
 *   - name: Usuários
 */

/**
 * @swagger
 * /api/clientes:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Clientes]
 *     security: [ { bearerAuth: [] } ]
 *     responses:
 *       200:
 *         description: Lista de clientes
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clientes]
 *     security: [ { bearerAuth: [] } ]
 *     responses:
 *       201:
 *         description: Cliente criado
 *
 * /api/clientes/{id}:
 *   get:
 *     summary: Retorna um cliente pelo ID
 *     tags: [Clientes]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *   put:
 *     summary: Atualiza um cliente pelo ID
 *     tags: [Clientes]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Cliente atualizado
 *   delete:
 *     summary: Remove um cliente pelo ID
 *     tags: [Clientes]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       204:
 *         description: Cliente removido com sucesso
 */

/**
 * @swagger
 * /api/orcamentos:
 *   get:
 *     summary: Lista todos os orçamentos
 *     tags: [Orçamentos]
 *     security: [ { bearerAuth: [] } ]
 *     responses:
 *       200:
 *         description: Lista de orçamentos
 *   post:
 *     summary: Cria um novo orçamento
 *     tags: [Orçamentos]
 *     security: [ { bearerAuth: [] } ]
 *     responses:
 *       201:
 *         description: Orçamento criado
 *
 * /api/orcamentos/{id}:
 *   get:
 *     summary: Retorna um orçamento pelo ID
 *     tags: [Orçamentos]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Orçamento encontrado
 *   put:
 *     summary: Atualiza um orçamento pelo ID
 *     tags: [Orçamentos]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       200:
 *         description: Orçamento atualizado
 *   delete:
 *     summary: Remove um orçamento pelo ID
 *     tags: [Orçamentos]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: string }
 *     responses:
 *       204:
 *         description: Orçamento removido com sucesso
 */

/**
 * @swagger
 * /api/seguros/automovel:
 *   get:
 *     summary: Lista todos os seguros de automóvel
 *     tags: [Seguro Automóvel]
 *     security: [ { bearerAuth: [] } ]
 *     responses:
 *       200:
 *         description: Lista de seguros
 *   post:
 *     summary: Cria um novo seguro de automóvel
 *     tags: [Seguro Automóvel]
 *     security: [ { bearerAuth: [] } ]
 *     responses:
 *       201:
 *         description: Seguro criado
 *
 * /api/seguros/automovel/{id}:
 *   get:
 *     summary: Retorna um seguro de automóvel pelo ID
 *     tags: [Seguro Automóvel]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Seguro encontrado
 *   put:
 *     summary: Atualiza um seguro de automóvel pelo ID
 *     tags: [Seguro Automóvel]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Seguro atualizado
 *   delete:
 *     summary: Remove um seguro de automóvel pelo ID
 *     tags: [Seguro Automóvel]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Seguro removido com sucesso
 */

/**
 * @swagger
 * /api/seguros/frota:
 *   get:
 *     summary: Lista todos os seguros de frota
 *     tags: [Seguro Frota]
 *     security: [ { bearerAuth: [] } ]
 *     responses:
 *       200:
 *         description: Lista de seguros
 *   post:
 *     summary: Cria um novo seguro de frota
 *     tags: [Seguro Frota]
 *     security: [ { bearerAuth: [] } ]
 *     responses:
 *       201:
 *         description: Seguro criado
 *
 * /api/seguros/frota/{id}:
 *   get:
 *     summary: Retorna um seguro de frota pelo ID
 *     tags: [Seguro Frota]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Seguro encontrado
 *   put:
 *     summary: Atualiza um seguro de frota pelo ID
 *     tags: [Seguro Frota]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Seguro atualizado
 *   delete:
 *     summary: Remove um seguro de frota pelo ID
 *     tags: [Seguro Frota]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Seguro removido com sucesso
 */

/**
 * @swagger
 * /api/seguros/reta:
 *   get:
 *     summary: Lista todos os seguros RETA
 *     tags: [Seguro RETA]
 *     security: [ { bearerAuth: [] } ]
 *     responses:
 *       200:
 *         description: Lista de seguros
 *   post:
 *     summary: Cria um novo seguro RETA
 *     tags: [Seguro RETA]
 *     security: [ { bearerAuth: [] } ]
 *     responses:
 *       201:
 *         description: Seguro criado
 *
 * /api/seguros/reta/{id}:
 *   get:
 *     summary: Retorna um seguro RETA pelo ID
 *     tags: [Seguro RETA]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Seguro encontrado
 *   put:
 *     summary: Atualiza um seguro RETA pelo ID
 *     tags: [Seguro RETA]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Seguro atualizado
 *   delete:
 *     summary: Remove um seguro RETA pelo ID
 *     tags: [Seguro RETA]
 *     security: [ { bearerAuth: [] } ]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Seguro removido com sucesso
 */