const zod = requre("zod");

const createTodo = zod.object({
    title : zod.string(),
    description : zod.string()
})

const updateTodo = zod.object({
    id : zod.string(),
})
    
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}
