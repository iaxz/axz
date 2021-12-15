//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '工具 tool',
            collapsable: true,
            children: [
                'tool/tool',
            ]
        },
        {
            title: '后端开发 Back-end',
            collapsable: true,
            children: [
                'backend/work',
            ]
        },
        {
            title: '前端开发 Front-end',
            collapsable: true,
            children: [
                'frontend/web',
            ]
        },
        {
            title: '规范 Standard',
            collapsable: true,
            children: [
                'specification/gf',
            ]
        },
        {
            title: '记录 record',
            collapsable: true,
            children: [
                'record/20211214',
            ]
        }

    ]
}
