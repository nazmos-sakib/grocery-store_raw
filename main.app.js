



const app = Vue.createApp({
	data() {
		return {
			message: 'Hello Vue!!',
			sendData : {
				service_name: "",
				param:{}
			},
			fetchedData: [],
			clickedCat: {},
			//categoryId : 10,
		}
	},
	mounted() {
		
	},

	methods: {
		searchText($event) {
    	//console.log("this happen");
    	console.log("this happen - " + $event);
    },
},

components: {
	'logo-component' : logoComponent,
	'banner-top-component' : bannerTopComponent,
	'banner-component' : bannerComponent,
	'banner-bottom-component' : bannerBottomComponent,
	'hot-offer-component' : hotOfferComponent,
	'top-products-component' : topProductsComponent,
	'news-letter-component' : newsLetterCpmponent,
	'footer-component' : footerComponent,
	'products-by-category-component' : productsByCategoryComponent,
},
})

// Define a new global component called button-counter
app.component('header-component', headerComponent)
//app.component('custom-input', searchInputComponent)
//app._component.components["banner-component"].components["banner-left-component"].data().allCategories.__proto__ = {'a':{CategoryID: "1", CategoryName: "Branded Foods"},'b':{CategoryID: "2", CategoryName: "Households"}}
const vm = app.mount('#app')



