const loggerMiddleware = (store) => (next) => (action) => {
    console.log('Dispatching',action)
    console.log('Current store is ',store.getState())
// Before the next action
    const result = next(action);
    console.log('State after action ',store.getState())
    return result
}

export default loggerMiddleware;