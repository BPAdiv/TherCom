const Ticket = require("../models/ticket");

const createTicket = async (req, res) => {
  try {
    const { ticketUser, title, content } = req.body;
    const ticket = await Ticket({ ticketUser, title, content });
    await ticket.save();
    res.status(201).json({ message: "Ticket created", data: ticket });
  } catch (error) {
    console.log(error.message);
    if (error.name === "ValidationError") {
      res.status(400).json({
        message: "Invalid input. Please check your data.",
        error: error.message,
      });
    } else {
      res.status(500).json({ message: "Internal server error." });
    }
  }
};
const getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.status(201).json({ message: "Ticket found", data: tickets });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};
const deleteTicket = async (req, res) => {
  try {
    const ticketId = req.params.ticketId;
    const deletedTicket = await Ticket.findByIdAndDelete(ticketId);
    if (!deletedTicket) {
      return res.status(404).json({ message: "Ticket not found." });
    }
    res.json({ message: "Ticket deleted successfully.", deletedTicket });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Internal server error." });
  }
};
const respondTicket = async (req, res) => {
  try {
  } catch (error) {}
};

// const deleteTicket

module.exports = { createTicket, deleteTicket, respondTicket, getAllTickets };
