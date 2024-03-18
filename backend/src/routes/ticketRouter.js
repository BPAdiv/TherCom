const express = require("express");
const ticketsRouter = express.Router();
const ticketController = require("../controllers/ticketController");
// Route for creating a new ticket
ticketsRouter.post("/", ticketController.createTicket);

// Route for getting all tickets
ticketsRouter.get("/", ticketController.getAllTickets);

// Other routes for updating, deleting, searching tickets, etc.
ticketsRouter.delete("/:ticketId", ticketController.deleteTicket);
module.exports = ticketsRouter;
