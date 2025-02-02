class IndexController {
    async getItems(req, res) {
        // Logic to retrieve items from the database
        res.send("Items retrieved successfully");
    }

    async createItem(req, res) {
        // Logic to create a new item in the database
        res.send("Item created successfully");
    }
}

module.exports = IndexController;