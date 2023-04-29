const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    mensagem: 'OK',
    ...req.user
  });
});

module.exports = router;