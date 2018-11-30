// const round = number => Math.round(number * 100) / 100
const monitorReducerEnhancer = createStore => (
  reducer,
  initialState,
  enhancer
) => {
    const monitoredReducer = (state, action) => {
    const start = performance.now()
    const newState = reducer(state, action)
    const end = performance.now()
    const raw = end - start
    const diff = (end - start).toFixed(2)
    console.log(`%c reducer process time`,'background: cyan; color: blue', diff)
    return newState
  }
  return createStore(monitoredReducer, initialState, enhancer)
}
export default monitorReducerEnhancer