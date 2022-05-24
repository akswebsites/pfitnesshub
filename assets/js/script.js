const app = {
  data(){
    return{
      bill_type: false,
      type: 'monthly',
      priceList:[
        {id:1,title:"starter",price:24},
        {id:2,title:"pro",price:74},
        {id:3,title:"enterprise",price:99},
      ]
    }
  },
  methods:{
    change(){
      if(this.bill_type){
        this.bill_type = true;
        this.type = 'yearly'
      } else {
        this.bill_type = false;
        this.type = 'monthly'
      }
    }
  }
}

Vue.createApp(app).mount('#root');