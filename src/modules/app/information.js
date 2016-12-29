var app = new Vue({
    el: 'body',
    data: function() {
        return {
            //table切换
            table: {
                itr: {
                    show: true
                },
                list: {
                    show: false
                },
                talk: {
                    show: false,
                    all: {
                        show: true
                    },
                    mine: {
                        show: false
                    }
                }
            },
            //文章列表数据
            //章节目录自定义
            chinaword: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一',
             '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十'],
            courselist: [{
                    title: '指尖上的传承之玉雕',
                    children: [{
                        title: '中国玉文化概述',
                        time: '00:20:35'
                    }, {
                        title: '中国玉文化概述',
                        time: '00:20:35'
                    }, {
                        title: '中国玉文化概述',
                        time: '00:20:35'
                    }, ]
                }, {
                    title: '指尖上的传承之玉雕',
                    children: [{
                        title: '中国玉文化概述',
                        time: '00:20:35'
                    }, {
                        title: '中国玉文化概述',
                        time: '00:20:35'
                    }, {
                        title: '中国玉文化概述',
                        time: '00:20:35'
                    }, ]
                }, {
                    title: '指尖上的传承之玉雕',
                    children: [{
                        title: '中国玉文化概述',
                        time: '00:20:35'
                    }, {
                        title: '中国玉文化概述',
                        time: '00:20:35'
                    }, {
                        title: '中国玉文化概述',
                        time: '00:20:35'
                    }, ]
                },

            ],
            questionList: {
                all: [{
                    ask: {
                        imgsrc: "/img/common/header-arcter.png",
                        name: "寂寞星球的玫瑰",
                        title: "FPGA异用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在",
                        time: "2016-04-22",
                        number: 5
                    },
                    question: {
                        imgsrc: "/img/common/header-arcter.png",
                        name: "张老师",
                        title: "FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在",
                        time: "2016-04-22"
                    }
                }, {
                    ask: {
                        imgsrc: "/img/common/header-arcter.png",
                        name: "寂寞星球的玫瑰",
                        title: "FPGA异用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在",
                        time: "2016-04-22",
                        number: 5
                    },
                }, ],
                mine: [{
                    ask: {
                        imgsrc: "/img/common/header-arcter.png",
                        name: "寂寞星球的玫瑰",
                        title: "FPGA异用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在",
                        time: "2016-04-22",
                        number: 5
                    },
                    question: {
                        imgsrc: "/img/common/header-arcter.png",
                        name: "张老师",
                        title: "FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在",
                        time: "2016-04-22"
                    }
                }, {
                    ask: {
                        imgsrc: "/img/common/header-arcter.png",
                        name: "寂寞星球的玫瑰",
                        title: "FPGA异用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在",
                        time: "2016-04-22",
                        number: 5
                    },
                    question: {
                        imgsrc: "/img/common/header-arcter.png",
                        name: "张老师",
                        title: "FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在",
                        time: "2016-04-22"
                    }
                }, ]
            }
        };
    },
    //方法区
    methods: {
        tablecheck: function(item) {
            if (item.show) {
                return false;
            } else {
                this.table.itr.show = false;
                this.table.list.show = false;
                this.table.talk.show = false;
                item.show = true;
            }
        },
        tablechecklist: function(item) {
            if (item.show) {
                return false;
            } else {
                this.table.talk.all.show = false;
                this.table.talk.mine.show = false;
                item.show = true;
            }
        },
        //弹出层
        proask: function() {
            layer.open({
                type: 2,
                title: false,
                area: ['750px', '450px'],
                shift: 2,
                content: ['wantask.html', 'no'], //iframe的url，no代表不显示滚动条
            });
        },
        //提问问题渲染
        resetquest: function() {
            this.questionList = [{
                    ask: {
                        imgsrc: "/img/common/header-arcter.png",
                        name: "寂寞星球的玫瑰",
                        title: "FPGA异用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在",
                        time: "2016-04-22",
                        number: 5
                    },
                    question: {
                        imgsrc: "/img/common/header-arcter.png",
                        name: "张老师",
                        title: "FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在那些领域？异构计算能够给这些领域带来那些新变化？FPGA异构计算目前在中国主要应用在",
                        time: "2016-04-22"
                    }
                },

            ];
        }
    },
    ready: function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 530) {
                $(".fixed").show();
            } else {
                $(".fixed").hide();
            }
        });
        laypage({
            cont: 'talkpage', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
            pages: 10, //通过后台拿到的总页数
            curr: 1, //当前页
            skin: '#e50112',
            groups: 3, //连续显示分页数
            jump: function(obj, first) { //触发分页后的回调
                if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                    //	          demo(obj.curr);
                }
            }
        });
        laypage({
            cont: 'mypage', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
            pages: 10, //通过后台拿到的总页数
            curr: 1, //当前页
            skin: '#e50112',
            groups: 3, //连续显示分页数
            jump: function(obj, first) { //触发分页后的回调
                if (!first) { //点击跳页触发函数自身，并传递当前页：obj.curr
                    //	          demo(obj.curr);
                }
            }
        });
    }
});
