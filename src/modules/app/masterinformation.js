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
		};
	},
	ready:function  () {
		 $(window).scroll(function  () {
		 	if ($(window).scrollTop()>95) {
		 		$('.fix-img').addClass('fixedheader');
		 	}else{
		 		$('.fix-img').removeClass('fixedheader');
		 	}
		});
	}
});
