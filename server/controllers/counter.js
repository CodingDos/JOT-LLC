import Counter from "../models/Counter.js";

export const getCounters = async (req, res) => {
  try {
    const { categoryId } = req.params;
    console.log("URL", categoryId);
    const counter = await Counter.find({ categoryId: categoryId });
    res.json(counter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createCounter = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const newCounter = new Counter({ ...req.body, categoryId: categoryId });
    await newCounter.save();
    res.status(201).json(newCounter);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const editCounter = async (req, res) => {
  try {
    const { counterId } = req.params;
    const counter = await Counter.findByIdAndUpdate(
      counterId, // Directly pass counterId here
      req.body,
      {
        new: true, // Return the updated object
      }
    );

    if (!counter) {
      return res.status(404).json({ message: "Counter not found" });
    }

    res.status(200).json(counter); // 200 OK for successful update
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};
//For testing
// export const editCounter = async (req, res) => {
//   try {
//     const { counterId } = req.params;
//     const { title, notes } = req.body;

//     // Fetch the counter once and make all necessary updates
//     const counter = await Counter.findById(counterId);
//     if (!counter) {
//       return res.status(404).json({ message: "Counter not found" });
//     }

//     // Update title if provided
//     if (title) {
//       counter.title = title;
//     }

//     // Append additional notes to the existing notes if provided
//     if (notes) {
//       counter.notes = counter.notes ? `${counter.notes}${notes}` : notes;
//     }

//     await counter.save(); // Save the counter with all updates
//     res.status(200).json(counter);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: error.message });
//   }
// };

export const addCount = async (req, res) => {
  try {
    const { id } = req.params;
    let counter = Counter.findById(id);
    let currentCount = counter.count;
    const updatedCount = await Counter.findByIdAndUpdate(id, {
      count: currentCount + 1,
    });
    res.status(201).json(updatedCount);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deleteCounter = async (req, res) => {
  try {
    const { id } = req.params;
    const counter = await Counter.findByIdAndDelete(id);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

// router.get("/:categoryId/counters", controllers.getCounters)// WILL GET ALL COUNTERS BASED ON CATEGORY
// router.post("/counters/create", controllers.createCounter)
// router.put("/:counterId/edit", controllers.editCounter)
// router.delete("/:counterId/delete", controllers.deleteCounter)
