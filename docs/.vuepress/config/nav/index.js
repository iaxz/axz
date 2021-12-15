//导航栏
module.exports = [
    {text: '本站指南', link: '/views/', icon: 'reco-home'},
    {
        text: '其它', icon: 'reco-document',
        items: [
            {
                text: 'Projects🎈',
                items: [{
                    text: '我的项目',
                    link: '/other/project',
                }]
            }, {
                text: 'Common sites🎈',
                items: [{
                    text: '✔ 友 链 →',
                    link: '/other/friends',
                }, {
                    text: 'Java8Api文档',
                    link: 'https://docs.oracle.com/javase/8/docs/api/index.html',
                }, {
                    text: 'Program Creek',
                    link: 'https://www.programcreek.com/',
                }, {
                    text: 'Spring',
                    link: 'https://spring.io/',
                }, {
                    text: 'Stackoverflow',
                    link: 'https://stackoverflow.com/',
                }, {
                    text: 'LeetCode',
                    link: 'https://leetcode-cn.com/',
                }, {
                    text: 'Vue.js',
                    link: 'https://cn.vuejs.org/v2/guide/',
                }, {
                    text: 'BootCDN',
                    link: 'https://www.bootcdn.cn/',
                }, {
                    text: 'Linux命令大全',
                    link: 'https://www.linuxcool.com/',
                }, {
                    text: '编程语言排行榜',
                    link: 'https://www.tiobe.com/tiobe-index/',
                }]
            },]
    },
    {text: '时间线', link: '/timeline/', icon: 'reco-date'},
    {text: '关于我', link: '/about/', icon: 'reco-message'}
]
