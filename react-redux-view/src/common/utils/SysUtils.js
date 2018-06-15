/**
 * 把表格的排序对象转成查询对象
 * @param sorter
 */
const dataGridSorterToQueryParam = (sorter) => {
    if (sorter && sorter.order && sorter.field) {
        //dataGrid返回的排序的内容是：ascend，descend，需要转换
        let orderType = sorter.order === "ascend" ? "ASC" : "DESC";
        let orderBy = sorter.field;
        return {
            orderBy,
            orderType
        }
    } else {
        return {};
    }
}

/**
 * 把数组拆分成对象
 * @param datas 数组
 * @param paramsName 对象的Key
 * @returns {*}
 */
const arrayParamsToObject = (datas,paramsName) => {

    if (datas && datas.length > 0 && paramsName && paramsName.length > 0) {
        let paramsNameLen = paramsName.length-1;
        //ES6数组最新用法https://segmentfault.com/a/1190000005921341
        return datas.reduce(function (prev, cur, index) {
            if (index <= paramsNameLen) {
                prev[paramsName[index]] = cur;
            }
            return prev;
        },{})
    } else {
        return datas;
    }
}

module.exports = {
    dataGridSorterToQueryParam,
    arrayParamsToObject,
}