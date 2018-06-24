import * as appIndexType from './appIndex-action-type';

const appIndexDataState = {
    totalMemoryUsed : 0,
    heapMemoryUsed : 0,
    noHeapMemoryUsed : 0,
    threadCount : 0,
    deamonThreadCount : 0,
    deadlockThreadCount : 0,
    deadlocksThread : ['暂无内容'],
    classLoadCount : 0,
    classUnloadCount : 0
}

/**
 * AppIndex Reducer
 */
export const appIndexData = (state = appIndexDataState, action = {}) => {
    switch(action.type){
        case appIndexType.SYS_VM_INFO: {
            let data = action.appIndexData;
            let dataState = {
                totalMemoryUsed : Number((data.memoryUsed/data.memoryTotal*100).toFixed(2)),
                heapMemoryUsed : Number((data.memoryHeapUsed/data.memoryHeapTotal*100).toFixed(2)),
                noHeapMemoryUsed : Number((data.memoryNoHeapUsed/data.memoryNoHeapTotal*100).toFixed(2)),
                threadCount : data.threadCount,
                deamonThreadCount : data.threadDeamonCount,
                deadlockThreadCount : data.deadlockCount,
                deadlocksThread : data.deadlocks && data.deadlocks.length > 0 ? data.deadlocks : state.deadlocksThread,
                classLoadCount : data.classloaded,
                classUnloadCount : data.classUnloaded
            }
            return {...state, ...dataState};
        }
        default:
          return state;
      }
}