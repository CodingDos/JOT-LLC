import Counter from "../models/Counter.js"


export const getCounters = async (req, res) => {
  try {
    const counter = await Counter.find()
    res.json(counter)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const createCounter = async (req, res) => {
  try {
    const newCounter = new Counter(req.body)
    await newCounter.save()
    res.status(201).json(newCounter)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const editCounter = async (req, res) => {
  try {
    const { id } = req.params
    const counter = await Counter.findByIdAndUpdate( id, req.body, { new: true })
    res.status(201).json(counter)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const editCount = async (req, res) => {
  try {
    const { id } = req.params
    let counter = Counter.findById(id)
    let currentCount = counter.count
    const updatedCount = await Counter.findByIdAndUpdate( id, { count: currentCount +1})
    res.status(201).json(updatedCount)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

export const deleteCounter = async (req, res) => {
  try {
    const { id } = req.params
    const counter = await Counter.findByIdAndDelete( id )
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: error.message })
  }
}

// router.get("/counters", controllers.getCounters)// WILL GET ALL COUNTERS BASED ON CATEGORY
// router.post("/counters/create", controllers.createCounter)
// router.put("/:counterId/edit", controllers.editCounter)
// router.delete("/:counterId/delete", controllers.deleteCounter)