const items = [
    {
        icon: 'Odometer',
        index: '/dashboard',
        title: '系统首页',
        permiss: '1',
    },
    {
        icon: 'Calendar',
        index: '1',
        title: '表格相关',
        permiss: '2',
        subs: [
            {
                index: '/table',
                title: '常用表格',
                permiss: '2',
            },
            {
                index: '/import',
                title: '导入Excel',
                permiss: '2',
            },
            {
                index: '/export',
                title: '导出Excel',
                permiss: '2',
            },
        ],
    },
    {
        icon: 'Edit',
        index: '3',
        title: '表单相关',
        permiss: '4',
        subs: [
            {
                index: '4',
                title: '三级菜单',
                permiss: '7',
                subs: [
                    {
                        index: '/editor',
                        title: '富文本编辑器',
                        permiss: '8',
                    }
                ],
            },
        ],
    },
];
