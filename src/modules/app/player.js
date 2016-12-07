 var  a=0,
      times=null;

 function loadHandler(){
			console.log("loadHandler");
			myPlayer=CKobject.getObjectById('ckplayer_video_sg');
			myPlayer.addListener('play','playstartHandler');
			myPlayer.addListener('paused','pausedHandler');
  }
  function videojump () {
   		    myPlayer.videoSeek(90);
   		}
	    function playstartHandler(){
			a++;
			if (a==1) {
				//启用定时器
				times = setInterval(function() {
					console.log(2);

					//获取当前的播放进度并且使用四舍五入法磨平函数执行的时间差,这里填写发送时间
					if (myPlayer.getStatus().time) {

					} else {
						clearInterval(times);
					}
			}, 1000);
			    videojump ();
			    //函数置空
				videojump = function  () {
				};
			}
		}
		function pausedHandler(e){
			if (e) {
			a=0;
			//清除定时器
			clearInterval(times);
			}
		}

var app=new Vue({
	//数据渲染区
	el: 'body',
	data: function() {
		return {
			//视屏对象和pdf对象
			videoObj: null,
			pdfObj: null,
			//*****视屏播放数据对象
			videoData: [
			"http://videoqiniu.zjzx.cn/6dde0dcd-4f24-4e8b-8260-b36148758af0.m3u8",
			"http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8",
			"http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8"
			],
			//右侧功能栏是否显示
			rightShow: true,
			//*****顶部数据区域
			headerTitle: '80,90后员工职业技能素养提升', //标题
			headerAllTime: 54, //总时长
			headerHaveTime: 28, //已用时长
			headerMessage: 3, //消息数量
			charctar: {
				imgsrc: './img/videoplayer/video-content-charcter.png',
				name: '寂寞星球的玫瑰',
			},
      //初始化页码
      mynotepage:1,
      allnotepage:1,
      myquestionpage:1,
      allquestionpage:1,
			/****
			课程列表数据
			****/
			courseindex: ['课时一', '课时二', '课时三', '课时四', '课时五', '课时六', '课时七', '课时八', '课时九', '课时十',
				'课时十一', '课时十二', '课十三', '课时十四', '课时十五', '课时十六', '课时十七', '课时十八', '课时十九', '课时二十'
			],
			courseList: {
				type: false,
				"title": "海贼王课程学习",
				"childernone": [{
					"title": "目录",
					"childern": [{
						"id": 1092,
						"title": "礼仪01",
						"alltime": 20,
						"ResourceType": 3,
						"videodata": [
						"http://videoqiniu.zjzx.cn/6dde0dcd-4f24-4e8b-8260-b36148758af0.m3u8",
						"http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8",
						"http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8"
						],
						"select": false
					}, {
						"id": 1093,
						"title": "礼仪02",
						"alltime": 0,
						"ResourceType": 3,
						"videodata":[
						"http://videoqiniu.zjzx.cn/6dde0dcd-4f24-4e8b-8260-b36148758af0.m3u8",
						"http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8",
						"http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8"
						],
						"select": false
					}]
				}]
			},
			/*
			//					courseList: {
			//						type:true,
			//						title: '8090后员工管理方法',
			//						//一级目录
			//						childernone: [{
			//							title: '名字不知道是啥王总告之',
			//							childern: [{
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}, {
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								pdfdata: '/lib/js/pdfjs/web/text.pdf',
			//								select: false
			//							}, {
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}]
			//						}, {
			//							title: '名字不知道是啥王总告之',
			//							childern: [{
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}, {
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}, {
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}]
			//						}, {
			//							title: '名字不知道是啥王总告之',
			//							childern: [{
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}, {
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}, {
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}]
			//						}, {
			//							title: '名字不知道是啥王总告之',
			//							childern: [{
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}, {
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}, {
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}]
			//						}, {
			//							title: '名字不知道是啥王总告之',
			//							childern: [{
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}, {
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}, {
			//								title: '8090后员工的管理方法',
			//								alltime: 50.25,
			//								videodata: [{
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001.m3u8?SD',
			//									type: 'application/x-mpegURL',
			//									label: '标清',
			//									res: 360
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-2.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '高清',
			//									res: 720
			//								}, {
			//									src: 'http://o6opd2vt8.bkt.clouddn.com/test/0001-3.m3u8?HD',
			//									type: 'application/x-mpegURL',
			//									label: '超清',
			//									res: 1080
			//								}],
			//								select: false
			//							}]
			//						}, ]
			//					},
			//
			*/
			/****
								我的笔记部分
								****/
			//**********输入框
			noteInput: {
				text: '',
				//是否是私密状态
				secret: false
			},
			//*********数据部分
			noteData: {
				//所有笔记
				allnote:{
					number:31,
					list:[{
					img: '/img/videoplayer/video-content-charcter.png',
					title: '全部笔记',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '全部笔记',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}]
				} ,
				//我的笔记
				mynote:{
					number:31,
					list:[{
					img: '/img/videoplayer/video-content-charcter.png',
					title: '我的笔记',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}]
				}
			},
			/****
			我的问答部分
			****/
			//**********输入框
			answerInput: 'sdfas',
			//********数据部分
			answerData: {
				//所有问答
				allanswer:{
					number:31,
					list:[{
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				},{
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}]
				} ,
				//我的问答
				myanswer:{
					number:31,
					list:[{
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}, {
					img: '/img/videoplayer/video-content-charcter.png',
					title: '寂寞星球的玫瑰',
					text: '好记性不如烂笔头所以多记笔记我也是凑字符的、哈哈哈哈哈？',
					time: '2016-01-02 10:39'
				}]
				}
			},
			/***
			页面元素切换数据
			***/
			tabelcheck: {
				// 课程目录，笔记和问答的切换
				leftcheck: {
					course: {
						value: false
					},
					note: {
						value: true
					},
					answer: {
						value: false
					}
				},
				// 我的笔记
				notecheck: {
					mynote: {
						value: false
					},
					allnote: {
						value: true
					}
				},
				// 我的问答
				answercheck: {
					myanswer: {
						value: false
					},
					allanswer: {
						value: true
					}
				}
			},
		};
	},
	//方法区域
	methods: {
		/****
		  笔记和问答的切换
		  ****/
		noteCheck: function(item) {
			if(!item.value) {
				this.tabelcheck.notecheck.mynote.value = false;
				this.tabelcheck.notecheck.allnote.value = false;
				item.value = true;
			}
		},
		answerCheck: function(item) {
			if(!item.value) {
				this.tabelcheck.answercheck.myanswer.value = false;
				this.tabelcheck.answercheck.allanswer.value = false;
				item.value = true;
			}
		},
		/****
		    发表提问和发表笔记
		****/
		//笔记
		publishGet: function(text, type) {
			//清除空格
			text = text.trim();
			//当真是存在数据时
			if(text) {
				//发送后开始使用ajax
				var newdata = {
					img: this.charctar.imgsrc,
					title: this.charctar.name,
					text: this.noteInput.text,
					time: this.getDate()
				};
				//当当前状态处于私密性质，下面可以使用ajax进行数据获取
				if(type) {
					this.noteData.mynote.list.unshift(newdata);
				} else {
					this.noteData.allnote.list.unshift(newdata);
				}
				//清空输入框内容
				this.noteInput.text = '';
			}
		},
		//弹出层
		proask:function(){
			layer.open({
				  type: 2,
				  title: false,
				  area: ['750px', '450px'],
				  shift: 2,
				  content: ['wantask.html', 'no'], //iframe的url，no代表不显示滚动条
			 });
		},
		//提问
		publishanswer: function(text) {
			//清除空格
			text = text.trim();
			//当真是存在数据时
			if(text) {
				//发送后开始使用ajax
				var newdata = {
					img: this.charctar.imgsrc,
					title: this.charctar.name,
					text: this.answerInput,
					time: this.getDate()
				};
				this.answerData.allanswer.list.unshift(newdata);
				this.answerData.myanswer.list.unshift(newdata);
				this.answerInput = '';
			}
		},
		//此处添加最新的逻辑处理函数/ajax重置数据
		resetquest:function(){

		},
		//时间格式化函数
		getDate: function() {
			var date = new Date();
			var year = date.getFullYear();
			var month = date.getMonth() + 1;
			var day = date.getDate();
			var hours = date.getHours();
			var minutes = date.getMinutes();
			return year + '-' + month + '-' + day + '  ' + hours + ':' + minutes;
		},
		/****
		     右侧显示区域的切换
		  *****/
		rightCheck: function(item) {
			//假设处于显示状态，就清除他的显示，否则先去除其他的显示，再将其显示
			if(item.value === true) {
				item.value = false;
				//自定义事件，通知子组件改变状态
				this.rightShow === true ? this.rightShow = false : this.rightShow = true;
			} else {
				//所有的数据先设置为不显示
				var result = 0;
				//如果所有的按钮都处于未被点击状态，那么
				for(var i in this.tabelcheck.leftcheck) {
					if(this.tabelcheck.leftcheck[i].value === false) {
						result++;
					}
				}
				if(result == 3) {
					this.rightShow === true ? this.rightShow = false : this.rightShow = true;
					item.value = true;
				} else {
					for(var j in this.tabelcheck.leftcheck) {
						this.tabelcheck.leftcheck[j].value = false;
					}
					item.value = true;
				}
			}
		},
		//******视屏重载方法
		videoReload: function(videoObj, data, videoDom) {
			videoObj = videojs(videoDom, {
				controls: true,
				plugins: {
					videoJsResolutionSwitcher: {
						default: 'low',
						dynamicLabel: true
					}
				}
			}, function() {
				var player = this;
				window.player = player;
				/*此处放置视屏数据，格式为数组，下面有被注释的示例*/
				player.updateSrc(data);
				player.on('resolutionchange', function() {
					console.info('Source changed to %s', player.src());
				});
				//*此处放置计时器函数*
				var times = null;
				player.on("play", function() {
					times = setInterval(function() {
						console.log(1);
					}, 3000);
				});
				player.on("pause", function() {
					clearInterval(times);
				});
			});
		},
		//*******pdf载入方法
		pdfreload: function(pdfobj, src) {
			var options = {
				pdfOpenParams: {
					navpanes: 0,
					toolbar: 0,
					statusbar: 0,
					view: "FitV",
					pagemode: "thumbs",
					page: 1
				},
				forcePDFJS: true,
				PDFJS_URL: "./lib/js/pdfjs/web/viewer.html"
			};
			pdfobj = PDFObject.embed(src, "#pdfplayer", options);
		},
		/****
					  视屏切换功能
					  ****/
		videocheck: function(item) {
			//循环数组，清除所有的列表点击样式
			var num = this.courseList.childernone;
			for(var i = 0; i < num.length; i++) {
				for(var j = 0; j < num[i].childern.length; j++) {
					num[i].childern[j].select = false;
				}
			}
			//将当前列表的显示样式设置为被点击状态
			item.select = true;
			if(item.videodata) {
				//视屏区域
				var html5=item.videodata[0];
				var pc=item.videodata[0]+"|"+item.videodata[1]+"|"+item.videodata[2];
				myPlayer.newAddress('{defa->'+pc+'}{a->'+html5+'}');
				//锚点切换
				var maodian=window.location.href.split("#")[0];
				window.location.href=maodian+"#"+item.id;
				$('#pdfplayer').hide();
				$('#videoplayer').show();
			} else {
				this.pdfreload(this.pdfObj, item.pdfdata);
				$('#videoplayer').hide();
				$('#pdfplayer').show();
			}
		},

	},
	ready: function() {
		var flashvars={
			f:'/static/lib/ckplayer/ckplayer/m3u8.swf',
			a:this.videoData[0],
			s:4,
			//自动播放
			p:1,
	        defa:this.videoData[0]+"|"+this.videoData[1]+"|"+this.videoData[2],
			c:0,
			loaded:'loadHandler'
		};
		var params={bgcolor:'#FFF',allowFullScreen:true,allowScriptAccess:'always',wmode:'transparent'};

		var video=['http://videoqiniu.zjzx.cn/6dde0dcd-4f24-4e8b-8260-b36148758af0.m3u8'];
		//初始化播放器
		CKobject.embed('/static/lib/ckplayer/ckplayer/ckplayer.swf','videoplayer','ckplayer_video_sg','100%','100%',false,flashvars,video,params);


		//笔记和问答分页插件初始化
		laypage({
	      cont: 'notepage', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
	      pages: 10, //通过后台拿到的总页数
	      curr:  1, //当前页
	      skin: '#AF0000',
          groups: 3 ,//连续显示分页数
	      jump: function(obj, first){ //触发分页后的回调
	        if(!first){ //点击跳页触发函数自身，并传递当前页：obj.curr
//	          demo(obj.curr);
	        }
	      }
	    });
	    laypage({
	      cont: 'questionpage', //容器。值支持id名、原生dom对象，jquery对象。【如该容器为】：<div id="page1"></div>
	      pages: 10, //通过后台拿到的总页数
	      curr:  1, //当前页
	      skin: '#AF0000',
          groups: 3 ,//连续显示分页数
	      jump: function(obj, first){ //触发分页后的回调
	        if(!first){ //点击跳页触发函数自身，并传递当前页：obj.curr
//	          demo(obj.curr);
	        }
	      }
	    });
	}

});
