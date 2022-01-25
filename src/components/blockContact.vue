<template>
  <div class="container">
    <div class="blockContact" @click="detailContact">
      <div>
<!--        Avatar links not working-->
        <div class="blockContact_avatar">
          <img src="../assets/avatar/22222.png" alt="">

          <!--          <img v-if="contact.avatar" class="blockImg" :src="contact.avatar" alt="">-->
          <!--          <img v-if="!contact.avatar" class="blockImg" src="../assets/avatar/22222.png" alt="">-->
        </div>
        <div class="blockContact_name">{{ contact.name }}
          <div class="blockContact_number">
            Tel: {{ contact.phone }}
          </div>
        </div>
      </div>
      <div class="blockContact_pic">
        <img v-if="!detail" src="../assets/descrip.svg" alt="" class="icon">
        <img v-if="detail" src="../assets/down_icon-icons.com_61209.svg" alt="" class="icon">
      </div>
    </div>
    <div v-if="detail" class="contactDescription">
      <div class="contactDescription_first">
        <div class="contactDescription_second"> Email:<span> {{ contact.email }}</span></div>
        <q-btn :ripple="{ color: 'yellow' }" color="secondary" style="width: 70px" label="Edit" no-caps/>
      </div>
      <div class="contactDescription_first">
        <div class="contactDescription_second">UserName: <span> {{ contact.username }}</span></div>
        <q-btn :ripple="{ color: 'yellow' }" color="secondary" style="width: 70px" label="Edit" no-caps/>
      </div>
      <div class="contactDescription_first">
        <div class="contactDescription_second">Company: <span> {{ contact.company.name }}</span></div>
        <q-btn :ripple="{ color: 'yellow' }" color="secondary" style="width: 70px" label="Edit" no-caps/>
      </div>
      <div class="contactDescription_first">
        <div class="contactDescription_second">Website: <span> www.{{ contact.website }}</span></div>
        <q-btn :ripple="{ color: 'yellow' }" color="secondary" style="width: 70px" label="Edit" no-caps/>
      </div>
      <div class="contactDescription_first">
        <div class="contactDescription_second">City: <span>   {{ contact.address.city }}</span></div>
        <q-btn :ripple="{ color: 'yellow' }" color="secondary" style="width: 70px" label="Edit" no-caps/>
      </div>
      <div class="contactDescription_first">
        <div class="contactDescription_second">Country: <span> {{ contact.address.country }}</span></div>
        <q-btn :ripple="{ color: 'yellow' }" color="secondary" style="width: 70px" label="Edit" no-caps/>
      </div>


    </div>
  </div>





</template>

<script>
export default {
  name: "blockContact",
  props: {
    contact: {
      type: Object
    }
  },
  data () {
    return {
      detail: false
    }
  },
  methods: {
    // Click here for contact details
    detailContact () {
      if(this.detail === false) {
        this.detail = true
      } else  {
        this.detail =false
      }

    }
  }
}
</script>

<style scoped>

</style>
