
  export default {
    data() {
      return {
        email: '',
        message: '',
        endpoint: 'https://formcarry.com/s/{Your Form ID}',
      }
    },
    methods: {
      async submitForm() {
        const data = {
          email: this.email,
          message: this.message,
        }
        const response = await this.$axios.post(this.endpoint, data)
      },
    },
  }
