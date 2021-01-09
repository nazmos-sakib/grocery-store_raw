const bannerLeftComponent = {
	data(){
		return{
			sendData : {
		        service_name: "",
		        param:{}
		    },
			fetchedData: [1],
			clickedCat: {},
			allCategories: {},
			_allCategories : [
				{CategoryID: "1", CategoryName: "Branded Foods"},
				{CategoryID: "2", CategoryName: "Households"},
				{CategoryID: "3", CategoryName: "Veggies & Fruits"},
				{CategoryID: "4", CategoryName: "Kitchen"},
				{CategoryID: "6", CategoryName: "Beverages"},
				{CategoryID: "7", CategoryName: "Pet Food"},
				{CategoryID: "8", CategoryName: "Frozen Foods"},
				{CategoryID: "9", CategoryName: "Bread & Bakery"}

			],
		}
	},	
	
	/*props: {
		allCategories:{
			type: Array,
			required: true,
		},
	},*/

	beforeMount() {
		//console.log("before mounted" + this.allCategories);
		//this.getAllCategory();
	},

	mounted() {
		this.getAllCategory();
		console.log("mounted. -- " + this.allCategories);
	},

	updated(){
		//console.log("on update");
		//this.getAllCategory();
	},

	created(){
		//this.getAllCategory();
	},

	methods:{
		getAllCategory(){
			console.log("inside getAllCategory");
			this.sendData.service_name = "getAllCategory";
			_this = this;
			axios.post("http://localhost/grocery-store/API/", 
				JSON.stringify(this.sendData),
				{
					headers: 
					{
						'Content-Type': 'application/json',
					}
				})
	        .then(res=>{
	          console.log(res);
	          if(res.data.error){

	          }
	          else{
	          	_this.allCategories = res.data.data.data;
	          	console.log(_this.allCategories);
	          }
	        })
		},
		buttonMethod(){
			this.getAllCategory();
			//this.allCategories = this.fetchedData;
			console.log(this.allCategories);
		}
	},


	template: `

		<div class="w3l_banner_nav_left">
			<nav class="navbar nav_bottom">
			 <!-- Brand and toggle get grouped for better mobile display -->
			  <div class="navbar-header nav_2">
				  <button type="button" class="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				  </button>
			   </div> 
			   <!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse" id="bs-megadropdown-tabs">
					<ul class="nav navbar-nav nav_1" v-cloak>
						<li><a :href="'./categoricalview.html?categoryId='+cat.CategoryID+'&categoryName='+cat.CategoryName" v-for="cat in allCategories" :key="cat.CategoryID">{{cat.CategoryName}}</a></li>
					</ul>
				 </div><!-- /.navbar-collapse -->
			</nav>
			<div><button @click="buttonMethod">asd</button> </div>
		</div>
	`,
}

