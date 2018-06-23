/**
 * 定义菜单信息
 */
export const menus = [
    {
        title : '首页',
        url : '/app/index', 
        icon : 'home'
    },{
        title : '任务',
        url : '/app/task', 
        icon : 'sync',
        sub : [
            {
                title : '定时调度',
                url : '/app/task/quartz', 
                icon : 'clock-circle-o'
            }
        ]
    }
]