 const prefix = `CounterContext`;

 // SINCRONAS
 export const INCREASE = `${prefix}/INCREASE`;
 export const DECREASE = `${prefix}/DECREASE`;
 export const RESET = `${prefix}/RESET`;
 export const SET_COUNTER = `${prefix}/SET_COUNTER`;
 
 //ASSINCRONAS
 export const ASYNC_INCREASE_START = `${prefix}/ASYNC_INCREASE_START`;
 export const ASYNC_INCREASE_END = `${prefix}/ASYNC_INCREASE_END`;
 export const ASYNC_INCREASE_ERROR = `${prefix}/ASYNC_INCREASE_ERROR`;
