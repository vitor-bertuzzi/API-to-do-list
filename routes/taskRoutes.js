const taskController = require('../controllers/taskController');

module.exports = (req, res) => {

    const url = req.url;
    const method = req.method;

    //GET /tasks
    if (url === '/tasks' && method === 'GET') {
        return taskController.listTasks(req, res);
    }

    //POST /tasks
    if (url === '/tasks' && method === 'POST') {
        return taskController.createTasks(req, res);
    }

    //PUT /tasks/:id
    if (url.startsWith('/tasks/') && method === 'DELETE') {
        const id = url.split('/')[2];
        return taskController.deleteTask(req, res, id);
    }

    //Rota não encontrada
    res.statusCode = 404;
    res.end(JSON.stringify({ message: 'Rota não encontrada' }));
};
