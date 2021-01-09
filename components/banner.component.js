const bannerComponent = {
	data(){
		return{
			sendData : {
		        service_name: "",
		        param:{}
		    },
			fetchedData: [],
			clickedCat: {},
		}
	},
	
  	beforeMount(){

  	},

  	mounted() {

	},
	
	methods:{
		
	},
	
	components: {
		'banner-left-component': bannerLeftComponent,
		'banner-right-component': bannerRgihtComponent,
	},

	template: `
	<!-- banner -->
	<div class="banner">
		<banner-left-component ></banner-left-component>
		<banner-right-component></banner-right-component>
		<div class="clearfix"></div>
	</div>
	<!-- banner -->
	`,
}