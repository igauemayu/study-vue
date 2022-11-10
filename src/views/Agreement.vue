<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="card text-dark bg-light mb-3">
            <div class="card-header">仮決定リストアップ</div>
            <div class="card-body">
              <PersonsTable/>
            </div>
          </div>
          <div class="card text-dark bg-light mb-3">
            <div class="flex-container">
              <table class="entry-type">
                <tbody>
                  <tr v-for="item in products" :key="item">
                    <td>{{item.title}}</td>
                    <td v-if="item.title == '一括登録'">
                      <button
                        type="button"
                        @click="addEntryUser(selectedUser)"
                        class="btn btn-outline-secondary"
                      >
                      予約
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="cart">
                <div class="summary">
                  <div>登録予約者</div>
                  <ReservationTable 
                    :entryUser="entryUser"
                    @addUser="addEntry"
                    @remove="remove"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.flex-container {
  display: flex;
}
.cart {
  flex-grow: 1;
  margin: 20px;
  position: relative;
}
.summary {
  background-color: #f6f6f6;
  float: right;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 1px 0 5px 4px rgba(85, 144, 184, 0.6);
  width: 400px;
}
.entry-type {
  width: 350px;
}
</style>

<script>
import PersonsTable from '@/components/PersonsTable'
import ReservationTable from '@/components/ReservationTable'
import library from '@/library/Today'
import { provide, ref } from 'vue'

export default {
  name: "agreement",
  components: {
    PersonsTable,
    ReservationTable,
  },
  setup() {
    
    const products = [
      { id: 1, title: '一括登録', detail: '契約内容' },
    ]

    const selectedUser = JSON.parse(localStorage.getItem('selectedUser'))
    const entryUser = ref(JSON.parse(localStorage.getItem('yoyakuUser')))
    
    provide('users', selectedUser)

    return {
      selectedUser,
      entryUser,
      products,
    }
  },
  methods: {
    // 登録予約に追加
    addEntryUser(users) {

      let existence = false

      // 新規登録は予約者リストに追加
      if (!existence) {
        
        let selected = users.filter(item => item.chk)
        let a = JSON.stringify(this.entryUser.concat().sort())
        let b = JSON.stringify(selected.concat().sort())

        if (a !== b) {
          this.entryUser = selected
        }
        localStorage.setItem('yoyakuUser', JSON.stringify(this.entryUser))
      }
    },
    // 予約者リストから削除
    remove(index) {
      this.entryUser.splice(index, 1)
    },
    addEntry() {
 
      let date = library.getToday(new Date(), 'YYYY/MM/DD hh:mm:ss')
      let history = []
      
      this.entryUser.forEach(eUser => {
        history.push({
          day: date,
          user: 'igaue',
          id: eUser.id,
          name: eUser.name
        })
      });

      let allHistory = JSON.parse(localStorage.getItem('history'))
      allHistory = history.concat(allHistory)
      
      localStorage.setItem('history', JSON.stringify(allHistory))
      this.entryUser = []
      localStorage.setItem('yoyakuUser', JSON.stringify(this.entryUser))
      alert('登録しました。')
    }
  },
};
</script>