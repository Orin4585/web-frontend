const express = require("express");
const Data = require("../models/Data");

const router = express.Router();

// Create Data Record (POST)
router.post("/", async (req, res) => {
  const { title, description } = req.body;
  try {
    const newData = new Data({ title, description });
    await newData.save();
    res.status(201).json({
      status: "success",
      message: "Data created successfully",
      data: newData,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error creating data",
    });
  }
});

// Retrieve All Data (GET)
router.get("/", async (req, res) => {
  try {
    const data = await Data.find();
    res.json({
      status: "success",
      message: "Data retrieved successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error retrieving data",
    });
  }
});

// Retrieve Data by ID (GET)
router.get("/:id", async (req, res) => {
  try {
    const data = await Data.findById(req.params.id);
    if (!data) {
      return res.status(404).json({
        status: "error",
        message: "Data not found",
      });
    }
    res.json({
      status: "success",
      message: "Data retrieved successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error retrieving data",
    });
  }
});

// Update Data Record (PUT)
router.put("/:id", async (req, res) => {
  const { title, description } = req.body;
  try {
    const data = await Data.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true }
    );
    if (!data) {
      return res.status(404).json({
        status: "error",
        message: "Data not found",
      });
    }
    res.json({
      status: "success",
      message: "Data updated successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error updating data",
    });
  }
});

// Delete Data Record (DELETE)
router.delete("/:id", async (req, res) => {
  try {
    const data = await Data.findByIdAndDelete(req.params.id);
    if (!data) {
      return res.status(404).json({
        status: "error",
        message: "Data not found",
      });
    }
    res.json({
      status: "success",
      message: "Data deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error deleting data",
    });
  }
});

module.exports = router;
