<template>
  <div class="container" id="app">
    <br />
    <br />
    <br />
    <br />
    <table class="table">
      <tbody>
        <tr>
          <td>氏名検索</td>
          <td><input type="text" v-model="filter.name" /></td>
          <td>ふりがな検索</td>
          <td><input type="text" v-model="filter.furi" /></td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />
    <br />
    <PersonsTable 
      v-model:searchName="filter.name"
      v-model:searchFuri="filter.furi"
    />
  </div>
</template>

<script>
import PersonsTable from '@/components/PersonsTable.vue'
import { provide, ref, onBeforeUnmount } from 'vue'

export default {
  name: 'PersonalInfo',
  components: {
    PersonsTable
  },
  setup() {

    const users = ref([
      { chk:false, id: 1, name: '井上', furi: 'いのうえ'},
      { chk:false, id: 2, name: '佐藤', furi: 'さとう'},
      { chk:false, id: 3, name: '村上', furi: 'むらかみ'},
      { chk:false, id: 4, name: '寺田', furi: 'てらだ'},
      { chk:false, id: 5, name: '上田', furi: 'うえだ'},
    ])

    provide('users', users)

    const filter = ref([
      { name:'', furi:'' }
    ])
    
    let selectedUser = JSON.parse(localStorage.getItem('selectedUser'))

    if (selectedUser.length > 0) {
      selectedUser.forEach(sUser => {
        users.value[sUser.id - 1].chk = true
      });
    }

    onBeforeUnmount(() => {
      let ulist = users.value
      let selectedUser = ulist.filter(u => u.chk)
      localStorage.setItem('selectedUser', JSON.stringify(selectedUser))
    })

    return {
      filter,
      users,
    }
  },
  methods: {
    addRow() {
      alert('searchName : ' + this.filter.name)
    },
  }
}
</script>
