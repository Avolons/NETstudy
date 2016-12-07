new Vue({
	el:"body",
	data:function  () {
		return {
			cerlist:[
			{
				name:"黄娇娇",
				idcode:130683199208117325,
				cer:"职业技能证书",
				way:"2016-02-06",
				type:"手动"
			},
			{
				name:"黄娇娇",
				idcode:130683199208117325,
				cer:"职业技能证书",
				way:"2016-02-06",
				type:"手动"
			},
			{
				name:"黄娇娇",
				idcode:130683199208117325,
				cer:"职业技能证书",
				way:"2016-02-06",
				type:"手动"
			},
			]
		}
	},
	ready:function  () {
		laypage({
				cont: $('#pagecontrol'), //容器。值支持id名、原生dom对象，jquery对象,
			    pages: 100, //总页数
			    skip: true, //是否开启跳页
			    skin: '#0b60a2',
			    groups: 3 //连续显示分页数
			});
	}
})
