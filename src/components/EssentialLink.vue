<template>
  <div class="q-pa-md">
    <q-layout view="lHh lpr lFf" container style="height: 800px" class="shadow-2 rounded-borders">
      <q-header elevated class="bg-purple" style="height: 30px">
        <q-toolbar style="background: #31CCEC; ">
        </q-toolbar>
        <q-toolbar inset style="background: #31CCEC; ">
          <q-toolbar-title style="font-size: 20px">
            <strong>My</strong> Contacts
          </q-toolbar-title>
          <q-input v-model="search" filled type="search" hint="" style="width: 40%">
            <template v-slot:append>
              <q-icon name="search"/>
            </template>
          </q-input>
        </q-toolbar>
      </q-header>
      <q-page-container>
        <q-page class="q-pa-md">
          <div class="main">
            <div class="main_contact" v-for="contact in contacts" :key="contact.id">
              <block-contact v-if="defaultList" :contact="contact"/>
            </div>
            <div class="main_contact" v-for="contact in filterSearch" :key="contact.id">
              <block-contact v-if="searchCurrent" :contact="contact"/>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>

</template>

<script>

import { defineComponent } from 'vue'
import blockContact from "components/blockContact";
import {mapActions} from 'vuex'
import { ref } from 'vue'

export default defineComponent({
  name: 'EssentialLink',
  components: {
    blockContact
  },
  data() {
    return {
      search: '',
      defaultList: true,
      searchCurrent: false
    }
  },
  setup() {
    return {
      search: ref(''),
    }
  },
  created() {
    // when rendering the page, we call the actionContact function
    this.actionContact()
  },
  methods: {
    // calling a function in action.js?
    ...mapActions({
      actionContact: 'example/GET_CONTACT'
    })
  },
  computed: {
    // using a getter we get data from the state
    contacts() {
      return this.$store.getters['example/CONTACT_GETTER']
    },

    filterSearch() {
      if (this.search.length > 0) {
        this.defaultList = false;
        this.searchCurrent = true;
        return this.contacts.filter(contact => {
          return contact.name.toUpperCase().indexOf(this.search.toUpperCase()) !== -1
        })
      }  if (this.search.length === 0) {
        this.searchCurrent = false;
        this.defaultList = true;
      }
    }
  }
})
</script>
