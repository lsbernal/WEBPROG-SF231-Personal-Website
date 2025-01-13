
  const app2 = Vue.createApp({
   data() {
    return {
      manyFoods: [
        {name: 'My dog, Yogi', url: 'images/dog.jpg'},
        {name: 'Me and My Fam', url: 'images/fam.jpg'},
        {name: 'Me and my Jiu-jutsu Org', url: 'images/bjj.jpg'}
      ]
    }
   }
  })
  
  app2.mount('#app2')

