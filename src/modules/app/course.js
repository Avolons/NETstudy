$(document).ready(function() {
	new Vue({
		el: "body",
		data: function() {
			return {
				// 静态页面，整体数据层
				//导航栏第一级
				nav_top: [],
				//导航栏同级
				nav_same: [
				],
				//导航栏子集
				nav_childrens: [],
				//题材
				nav_ticai:[

				],
				//是否展开更多
				more:{
					open:true,
					close:false,
				},
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
			};
		},
		//方法区域
		methods: {
			openmore:function(){
				if(this.more.open){
					this.more.open=false;
					this.more.close=true;
				}else{
					this.more.open=true;
					this.more.close=false;
				}
			},
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
				}
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
				skin: '#e50112',
				groups: 3 //连续显示分页数
			});
		}
	});
});
