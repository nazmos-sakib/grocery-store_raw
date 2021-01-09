const newsLetterCpmponent = {
	data(){
		return{
			subscribedEmail : "Email",
		}
	},
 	
	methods:{
		subscribe(){
			console.log(this.subscribedEmail);
		}
	},
	
	components: {
	},

	template: `
	<div class="newsletter">
		<div class="container">
			<div class="w3agile_newsletter_left">
				<h3>sign up for our newsletter</h3>
			</div>
			<div class="w3agile_newsletter_right">
				<form action="#" method="post" @submit.prevent="subscribe">
					<input v-model="subscribedEmail" type="email" name="Email" value="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required="">
					<input type="submit" value="subscribe now">
				</form>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
	`,
}
