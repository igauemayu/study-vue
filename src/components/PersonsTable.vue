<template>
  <table class="table">
    <thead>
      <tr>
        <th>選択</th>
        <th>No</th>
        <th>氏名</th>
        <th>ふりがな</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in result" :key="index">
        <td><input class="form-check-input" type="checkbox" v-model="item.chk"></td>
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.furi}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { inject } from 'vue'

export default {
  name: 'PersonsTable',
  props: {
    searchName: String,
    searchFuri: String,
  },
  setup() {

    const users = inject('users')

    return { users }
  },
  computed: {
    result() {

      let list = this.users

      if (this.searchName) {
        list = list.filter(item => item.name.indexOf(this.searchName) > -1)
      }
      if (this.searchFuri) {
        list = list.filter(item => item.furi.indexOf(this.searchFuri) > -1)
      }

      return list
    },
  },
}
</script>
