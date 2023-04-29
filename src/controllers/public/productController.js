const express = require('express');

const router = express.Router();
const NotFound = require('../../exceptions/NotFound');

const logger = require('../../config/loggers/winston')('ProductController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       required:
 *         - name
 *         - originalPrice
 *         - promotionalPrice
 *         - expiryDate
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the product
 *         name:
 *           type: string
 *           description: The name of the product
 *         originalPrice:
 *           type: double
 *           description: The original price
 *         promotionalPrice:
 *           type: double
 *           description: Price with promotion
 *         expiryDate:
 *           type: date
 *           description: The date that the product expiry
 *       example:
 *         id: d5fE_asz
 *         name: Mamão
 *         originalPrice: 60.22
 *         promotionalPrice: 12.1
 *         expiryDate: 2020-01-01
 */

/**
* @swagger
* tags:
*   name: Products
*   description: The products managing API
*/

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all the products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: The list of the products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */

router.get('/', (req, res) => {
  res.status(200).send({
    mensagem: 'OK',
  });
});

module.exports = router;
