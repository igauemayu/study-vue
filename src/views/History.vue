<template>
  <div class="container" id="app">
    <HistoryTable
      :headerRecord="header"
      :bodyRecord="history"
    />
  </div>
</template>

<script>
import HistoryTable from '@/components/HistoryTable.vue'
import { provide } from 'vue'

export default {
  name: 'History',
  components: {
    HistoryTable
  },
  setup() {

    const header = [
      { title: "登録日時", key: "day"},
      { title: "登録者", key: "user"},
      { title: "id", key: "id"},
      { title: "氏名", key: "name"},
    ]
    
    const history = JSON.parse(localStorage.getItem('history'))
    provide('history', history)

    return { history, header }
  },
}
</script>
