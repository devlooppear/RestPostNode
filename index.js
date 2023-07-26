const { PrismaClient } = require('@prisma/client')
const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3737
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

// Listar todos os carros
app.get('/carros', async (req, res) => {
  try {
    const carros = await prisma.carro.findMany()
    res.json(carros)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao buscar a tabela no banco de dados.' })
  }
})

// Criar um novo carro
app.post('/carros', async (req, res) => {
  const { marca, modelo, ano } = req.body

  if (!marca || !modelo || !ano) {
    return res.status(400).json({ error: 'Por favor, forneça marca, modelo e ano do carro.' })
  }

  try {
    const carro = await prisma.carro.create({
      data: {
        marca,
        modelo,
        ano,
      },
    })
    res.status(201).json(carro)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao inserir o carro no banco de dados' })
  }
})

// Buscar um carro por ID
app.get('/carros/:id', async (req, res) => {
  const { id } = req.params

  try {
    const carro = await prisma.carro.findUnique({
      where: {
        id: parseInt(id),
      },
    })

    if (!carro) {
      return res.status(404).json({ error: 'Carro não encontrado' })
    }

    res.json(carro)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao buscar o carro no banco de dados' })
  }
})

// Atualizar um carro por ID
app.put('/carros/:id', async (req, res) => {
  const { id } = req.params
  const { marca, modelo, ano } = req.body

  if (!marca || !modelo || !ano) {
    return res.status(400).json({ error: 'Por favor, forneça marca, modelo e ano do carro.' })
  }

  try {
    const carro = await prisma.carro.update({
      where: {
        id: parseInt(id),
      },
      data: {
        marca,
        modelo,
        ano,
      },
    })

    res.json(carro)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao atualizar o carro no banco de dados' })
  }
})

// Excluir um carro por ID
app.delete('/carros/:id', async (req, res) => {
  const { id } = req.params

  try {
    const carro = await prisma.carro.delete({
      where: {
        id: parseInt(id),
      },
    })

    res.json(carro)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Erro ao excluir o carro do banco de dados' })
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta http://localhost:${port}`)
})
