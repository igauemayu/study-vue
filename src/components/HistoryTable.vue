<template>
  <table class="table">
    <thead>
      <tr>
        <th>登録日時</th>
        <th>登録者</th>
        <th>id</th>
        <th>氏名</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in record" :key="index">
        <td>{{item.day}}</td>
        <td>{{item.user}}</td>
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
td {
  text-align: center;
  vertical-align: 0px;
}
</style>

<script>
import { inject } from 'vue'

export default {
  name: 'HistoryTable',
  props: {
    headerRecord: {
      title: { type: String, required: true },
      key: { type: String, required: true }
    },
    bodyRecord: [Object],
  },
  setup() {
    const record = inject('history')
    return { record }
  },
}
</script>
