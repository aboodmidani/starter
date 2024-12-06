<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" required />
    </div>

    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />
    </div>

    <div>
      <label>Options:</label>
      <div v-for="option in radioOptions" :key="option.value">
        <input type="radio" :value="option.value" v-model="formData.radio" />
        {{ option.text }}
      </div>
    </div>

    <div>
      <label for="file">File Upload:</label>
      <input type="file" id="file" @change="handleFileChange" />
    </div>

    <div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        radio: '',
        file: null
      },
      radioOptions: [
        { value: 'option1', text: 'Option 1' },
        { value: 'option2', text: 'Option 2' }
      ]
    };
  },
  methods: {
    handleFileChange(event) {
      this.formData.file = event.target.files[0];
    },
    handleSubmit() {
      console.log('Form submitted:', this.formData);
      // You can add your form submission logic here
    }
  }
};
</script>

<style scoped>
/* Add any custom styles here */
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
