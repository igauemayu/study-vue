<template>
  <table class="table table-cart">
    <tr v-for="(user, index) in entryUser" :key="index">
      <td>{{ user.id }}</td>
      <td>{{ user.name }}</td>
      <td><a href="#" @click="remove(index)"><i class="fas fa-times-circle"></i>削除</a></td>
    </tr>
    <tr>
      <td colspan="2">合計{{entryUser.length}}人</td>
      <td colspan="3">
        <button 
          @click="entry()"
          v-if="entryUser.length > 0"
          type="button"
          class="btn btn-outline-primary btn-sm"
        >登録
        </button>
      </td>
    </tr>
  </table>
</template>

<script>
export default {
  name: 'ReservationTable',
  props: {
    entryUser: {
      id: { type: String, required: true },
      name:  { type: String, required: true },
    },
  },
  methods: {
    entry() {
      this.$emit('addUser')
    },
    remove(val) {
      this.$emit('remove', val)
    },
  }
}
</script>
