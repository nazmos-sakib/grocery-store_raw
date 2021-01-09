const bannerTopComponent = {
	data(){
		return{
			categoryName : "",
		}
	},

	mounted(){
		this.getUrlParams();
	},
	
	methods:{
		getUrlParams(){
	    	const queryString = window.location.search;
	    	const urlParams = new URLSearchParams(queryString);

	    	if (urlParams.has('categoryName')) {
	    		this.categoryName = urlParams.get('categoryName');
	    	}
	    },

	},

	template: `
	<div class="products-breadcrumb">
		<div class="container">
			<ul>
				<li><i class="fa fa-home" aria-hidden="true"></i><a href="index.html">Home</a><span>|</span></li>
				<li>{{categoryName}}</li>
			</ul>
		</div>
	</div>
	`,
	
}

