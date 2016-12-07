$(document).ready(function() {
	new Vue({
		el: "body",
		data: function() {
			return {
				// 静态页面，整体数据层
				//导航栏第一级
				nav_top: [{
					title: "全部",
					id: 1457,
				}, {
					title: "职称23",
					id: 1457,
				}, ],
				//导航栏同级
				nav_same: [
					[{
						title: '全部fg',
						id: 1548
					}, {
						title: '问题解决',
						id: 1548
					}, {
						title: '项目管理s',
						id: 1548
					}, {
						title: '总结汇报',
						id: 1548
					}, {
						title: '全部fg',
						id: 1548
					}, {
						title: '问题解决',
						id: 1548
					}, {
						title: '项目管理s',
						id: 1548
					}, {
						title: '总结汇报',
						id: 1548
					}, {
						title: '全部fg',
						id: 1548
					}, {
						title: '问题解决',
						id: 1548
					}, {
						title: '项目管理s',
						id: 1548
					}, {
						title: '总结汇报',
						id: 1548
					}],
					[{
						title: '全部sdf',
						id: 1548
					}, {
						title: '职称23',
						id: 1548
					}, {
						title: '项目管理dsfa',
						id: 1548
					}, {
						title: '总结汇报',
						id: 1548
					}, {
						title: '全部sdf',
						id: 1548
					}, {
						title: '职称23',
						id: 1548
					}, {
						title: '项目管理dsfa',
						id: 1548
					}, {
						title: '总结汇报',
						id: 1548
					}, {
						title: '全部sdf',
						id: 1548
					}, {
						title: '职称23',
						id: 1548
					}, {
						title: '项目管理dsfa',
						id: 1548
					}, {
						title: '总结汇报',
						id: 1548
					}]
				],
				//导航栏子集
				nav_childrens: [{
					title: '全部',
					id: 1548
				}, {
					title: '问题解决',
					id: 1548
				}, {
					title: '项目管理',
					id: 1548
				}, {
					title: '总结汇报',
					id: 1548
				}],
				//题材
				nav_ticai:[
					{
						title:"全部",
						id:1547,
					},
					{
						title:"水墨",
						id:1547,
					},
					{
						title:"水墨",
						id:1547,
					},
					{
						title:"水墨",
						id:1547,
					},
					{
						title:"水墨",
						id:1547,
					},
					{
						title:"水墨",
						id:1547,
					},
					{
						title:"水墨",
						id:1547,
					},
					{
						title:"水墨",
						id:1547,
					},
					{
						title:"水墨",
						id:1547,
					},

				],
				//类型选择数据
				type_select: [{
					title: '全部课程',
					select: true
				}, {
					title: '即将开始',
					select: false
				}, {
					title: '正在进行',
					select: false
				}, {
					title: '已经结束',
					select: false
				}],
				//按时间热门排序
				type_sorting: {
					show: "排序",
					new: "按最新",
					hot: "按热门"
				},
				//课程数据列表
				courselist: [{
					imgsrc: "/img/coursecenter/course-lizi.png",
					title: '创造巅峰学习状态',
					studypeople: 2000,
					courseNumber: 12,
				}, {
					imgsrc: "/img/coursecenter/course-lizi.png",
					title: '创造巅峰学习状态',
					studypeople: 2000,
					courseNumber: 12,
				}, {
					imgsrc: "/img/coursecenter/course-lizi.png",
					title: '创造巅峰学习状态',
					studypeople: 2000,
					courseNumber: 12,
				}, {
					imgsrc: "/img/coursecenter/course-lizi.png",
					title: '创造巅峰学习状态',
					studypeople: 2000,
					courseNumber: 12,
				}, {
					imgsrc: "/img/coursecenter/course-lizi.png",
					title: '创造巅峰学习状态',
					studypeople: 2000,
					courseNumber: 12,
				}, ]
			}
		},
		//方法区域
		methods: {
			/***顶部导航筛选所有函数***/
			//一级目录点击切换函数
			nav_top: function(item) {

			},
			//同级目录点击切换
			nav_same: function(item) {

			},
			//子集目录点击切换
			nav_childrens: function(item) {

			},
			//课程属性切换函数
			type_change: function(item) {
				for(var i = 0; i < this.type_select.length; i++) {
					this.type_select[i].select = false;
				};
				item.select = true;
			},
			//顺序排序切换函数
			scrding: function(item) {
				this.type_sorting.show = item;
			}
		},
		//加载完成后的操作
		ready: function() {
			laypage({
				cont: $('#pagecontrol'), //容器。值支持id名、原生dom对象，jquery对象,
				pages: 100, //总页数
				skip: true, //是否开启跳页
				skin: '#0b60a2',
				groups: 3 //连续显示分页数
			});
		}
	});
})

//$.post("https://dotcounter.douyucdn.cn/deliver/fish2", {
//	multi:'[{"d":"DD196BDD6E7BBA6F010BD41D2ADC27B2","i":"24422519","rid":16101,"u":"https://www.douyu.com/weixiao","ru":"","ac":"click_msg_send","rpc":"page_studio_normal","pc":"page_studio_normal","pt":1474280610650,"oct":1474280631919,"dur":0,"pro":"host_site","ct":"web","e":{"type":2}}]',
//  v:1.5
//					},
//			function(result) {
//
//			});
