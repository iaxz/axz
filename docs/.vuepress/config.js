const path = require('path')
const nav = require('./config/nav/')
const sidebar = require('./config/sidebar/')
const plugins = require('./config/plugins/')

module.exports = {
    // dest: 'pages',//打包目录
    base: '/axz/',
    port: '80',
    title: "axz",
    description: '相思若柳 飘满城 尽飞絮',
    head: [
        ['link', {
            rel: 'icon',
            href: '/vuepress/favicon.ico'
        }],
        ['meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,user-scalable=no'
        }],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {
            rel: 'apple-touch-icon',
            href: '/vuepress/favicon.ico'
        }],
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "/js/jquery.min.js"
        }],
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "/js/MouseClickEffect.js"
        }],
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "charset": "utf-8",
            "src": "/js/my_side.js"
        }],
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "charset": "utf-8",
            "src": "/js/tongji.js"
        }]
    ],

    //主题配置
    theme: 'reco',
    themeConfig: {
        // nav,
        //subSidebar: 'auto',//在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        //sidebar: "auto",//自动生成侧边栏
        sidebar,
        logo: '/vuepress/head-fish.jpg', //导航栏头像
        authorAvatar: '/vuepress/head-fish.jpg', //首页右侧头像
        // 搜索设置
        search: true,
        searchMaxSuggestions: 10,
        smoothScroll: true,
        sidebarDepth: 2,
        blogConfig: {
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: '分类' // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: '标签' // 默认文案 “标签”
            }
        },
        // 最后更新时间
        lastUpdated: true,
        lastUpdated: '上次更新', // string | boolean
        // 作者
        author: 'axz',
        // 备案号
        record: '湘ICP备2021003387号-1',
        recordLink: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=2021003387",
        smooth: "true", //平滑滚动
        // 项目开始时间
        startYear: '2018',
        //git地址
        repo: 'iaxz/axz',
        // 如果你的文档不在仓库的根部
        docsDir: 'docs',
        // 可选，默认为 master
        //docsBranch: 'vuepress',
        editLinks: false,
        editLinkText: '在 GitHub 上编辑此页！',
        //评论
        valineConfig: {
            appId: 'zJ2tOQk39V6BvSFQHtC9mpdH-gzGzoHsz',
            appKey: 'BJaphAjeyTtlQuT00Oe31SPm',
            placeholder: '填写邮箱可以收到回复哦!',
            notify: true, // 邮件提醒
            verify: true, // 验证码
            recordIP: true
        },
    },
    plugins,
    markdown: {
        lineNumbers: true,//代码显示行号
    },
    plugins: {
        // 阅读进度条: "vuepress-plugin-reading-progress": "^1.0.10",
        "reading-progress": true,
        // BGM播放器 "@vuepress-reco/vuepress-plugin-bgm-player": "^1.1.3",
        "@vuepress-reco/vuepress-plugin-bgm-player": {
            audios: [
                {
                    name: "Faster Than Light",
                    artist: "Andreas Waldetoft / Mia Stegmar",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/Andreas%20Waldetoft%2CMia%20Stegmar%20-%20Faster%20Than%20Light.mp3",
                    cover:
                        "https://p1.music.126.net/Gxv6d9W4Yd9q9WNHPpi8rw==/1379887104073348.jpg",
                },
                {
                    name: "Dawn",
                    artist: "DDRKirby(ISQ)",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/Dawn%20-%20DDRKirby%28ISQ%29.mp3",
                    cover:
                        "https://p2.music.126.net/IPnqMCk8YaN9inwYV2bdgQ==/18774161044446693.jpg",
                },
                {
                    name: "TRON Legacy (End Titles)",
                    artist: "Daft Punk",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/Daft%20Punk%20-%20TRON%20Legacy%20%28End%20Titles%29.mp3",
                    cover:
                        "https://p2.music.126.net/qOOTIykbSLw9RHB0vI83GA==/737772302281958.jpg",
                },
                {
                    name: "Reconfig",
                    artist: "Shortwire",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/Reconfig%20-%20Shortwire.mp3",
                    cover:
                        "https://p2.music.126.net/2oouVh_rHOv1nZXYapF41A==/109951163606358209.jpg",
                },
                {
                    name: "Broken Boy",
                    artist: "Tonspender",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/Tonspender%20-%20Broken%20Boy.flac",
                    cover:
                        "https://p2.music.126.net/4TnTRyHqa3-D2H1UnOa00w==/109951163666994621.jpg",
                },
                {
                    name: "Iron Princess",
                    artist: "Xomu,HYP3RLAPS3",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/Xomu%2CHYP3RLAPS3%20-%20Iron%20Princess.flac",
                    cover:
                        "https://p2.music.126.net/INOnlEePWnMVO3D4U95B9g==/109951165031046695.jpg",
                },
                {
                    name: "Rapid as Wildfires 疾如猛火",
                    artist: "陈致逸,HOYO-MiX",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/%E9%99%88%E8%87%B4%E9%80%B8%2CHOYO-MiX%20-%20Rapid%20as%20Wildfires%20%E7%96%BE%E5%A6%82%E7%8C%9B%E7%81%AB.flac",
                    cover:
                        "https://p2.music.126.net/yoRaxBY77koSqhjh52g-DA==/109951165434255510.jpg",
                },
                {
                    name: "清平乐",
                    artist: "张紫宁",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/%E7%81%AB%E7%AE%AD%E5%B0%91%E5%A5%B3101%E7%B4%AB%E5%AE%81%20-%20%E6%B8%85%E5%B9%B3%E4%B9%90.flac",
                    cover:
                        "https://p1.music.126.net/145FpHsLi2_RyjqCm9kEUQ==/109951164698991135.jpg",
                },
                {
                    name: "この世界の頂で",
                    artist: "森下弘生,金﨑猛,近藤嶺",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/%E6%A3%AE%E4%B8%8B%E5%BC%98%E7%94%9F%2C%E9%87%91%EF%A8%91%E7%8C%9B%2C%E8%BF%91%E8%97%A4%E5%B6%BA%20-%20%E3%81%93%E3%81%AE%E4%B8%96%E7%95%8C%E3%81%AE%E9%A0%82%E3%81%A7.mp3",
                    cover:
                        "https://p2.music.126.net/PFojr1j6pdEj3uWrhpdytA==/109951164925376075.jpg",
                },
                {
                    name: "終わりの世界から",
                    artist: "やなぎなぎ,麻枝准",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/%E7%B5%82%E3%82%8F%E3%82%8A%E3%81%AE%E4%B8%96%E7%95%8C%E3%81%8B%E3%82%89%20-%20%E3%82%84%E3%81%AA%E3%81%8E%E3%81%AA%E3%81%8E%2C%E9%BA%BB%E6%9E%9D%E5%87%86.mp3",
                    cover:
                        "https://p1.music.126.net/C7ruDdV5NhgfhhJ8_cQSzA==/2426622162519258.jpg",
                },
                {
                    name: "寂しい夜",
                    artist: "三輪学",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/%E4%B8%89%E8%BC%AA%E5%AD%A6%20-%20%E5%AF%82%E3%81%97%E3%81%84%E5%A4%9C.flac",
                    cover:
                        "https://p2.music.126.net/RIOvUtQejxeI5S2sP_nmiw==/3434874333355654.jpg",
                },
                {
                    name: "「軌跡」",
                    artist: "小野友樹,KENN",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/%E5%B0%8F%E9%87%8E%E5%8F%8B%E6%A8%B9%2CKENN%20-%20%E3%80%8C%E8%BB%8C%E8%B7%A1%E3%80%8D.flac",
                    cover:
                        "https://p2.music.126.net/xY8qFdscge6rmeaw9aCc6A==/109951163168710796.jpg",
                },
                {
                    name: "無人区-Vacuum Track#ADD8E6-",
                    artist: "米缐p.",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/%E7%B1%B3%E7%BC%90p.%20-%20%E7%84%A1%E4%BA%BA%E5%8C%BA-Vacuum%C2%A0Track%23ADD8E6-.mp3",
                    cover:
                        "https://p3.music.126.net/WXAAn_D-gfPB9iVcVZQwAw==/109951163037603327.jpg",
                },
                {
                    name: "DARK SOULS Ⅲ",
                    artist: "Yuka Kitamura",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/DARK%20SOULS%20%E2%85%A2%20-%20Yuka%20Kitamura.mp3",
                    cover:
                        "https://p1.music.126.net/XS-n1XX9g_OBLFudoQrc5w==/1396379770845098.jpg",
                },
                {
                    name: "Ezio's Family",
                    artist: "Jesper Kyd",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/Jesper%20Kyd%20-%20Ezio's%20Family.mp3",
                    cover:
                        "https://p1.music.126.net/BQ0oJHhx3bPdmYbg90WL1g==/2536573326661833.jpg",
                },
                {
                    name: "Sea Of Voices (RAC Mix)",
                    artist: "Porter Robinson",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/Porter%20Robinson%20-%20Sea%20Of%20Voices%20%28RAC%20Mix%29.mp3",
                    cover:
                        "https://p1.music.126.net/zjQROkEUokU7iS5eUvnVZQ==/3264450027161111.jpg",
                },
                {
                    name: "Superstar (feat. Linn)",
                    artist: "Said The Sky & Dabin",
                    url:
                        "https://cdn-image.tsanfer.xyz/music/Said%20The%20Sky%20%26%20Dabin%20-%20Superstar%20(feat.%20Linn)%20-%20Said%20The%20Sky.mp3",
                    cover:
                        "https://p2.music.126.net/G105trvU6R2_vqgZWvncuQ==/109951163506191548.jpg",
                },
            ],
        },
        // 看板娘插件 https://github.com/vuepress-reco/vuepress-plugin-kan-ban-niang
        "@vuepress-reco/vuepress-plugin-kan-ban-niang":
            {
                theme: ['haru2', 'z16', 'blackCat', 'whiteCat', 'haru1', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku'],
                clean: false,
                messages: {
                    welcome: '我是axz,欢迎你的关注 ',
                    home: '心里的花，我想要带你回家。',
                    theme: '点我更换其他小伙伴。',
                    close: '点我关闭'
                },
                width: 150,
                height: 219,
            },
    }
}
