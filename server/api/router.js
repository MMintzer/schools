const express = require('express')
const router = express.Router()
const { School } = require('../db')

// GET /api/schools
router.get('/schools', async (req, res, next) => {
  try {
    const schools = await School.findAll()
    res.json(schools)
  } catch (err) {
    next(err)
  }
})
// GET /api/schools/:schoolId
router.get('/schools/:schoolId', async (req, res, next) => {
  try {
    const schoolId = req.params.schoolId
    const school = await School.findById(schoolId)
    res.json(school)
  } catch (err) {
    next(err)
  }
})

// POST /api/schools
router.post('/schools', async (req, res, next) => {
  try {
    const school = await School.create(req.body)
    res.json(school)
  } catch (err) {
    next(err)
  }
})

// PUT /api/schools
router.put('/schools/:schoolId', async (req, res, next) => {
  try {
    const schoolId = req.params.schoolId
    const school = await School.findById(schoolId)
    await school.update(req.body)
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

// DELETE /api/schools
router.delete('/school/schoolId', async (req, res, next) => {
  try {
    const schoolId = req.params.schoolId
    await School.destroy({ where: schoolId })
    res.status(204).end()
  } catch (err) {
    next(err)
  }
})

module.exports = router
