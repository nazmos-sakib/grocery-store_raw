const searchInputComponent =  {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  template: `
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
	  name="Product" 
	  onfocus="this.value = '';" 
	  onblur="if (this.value == '') {this.value = 'Search a product...';}" 
	  required=""
	  >
  `
}