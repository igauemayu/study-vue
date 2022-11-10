<template>
  <div><h1>vue機能練習</h1></div>
  <div>
    <h3>１．個人情報</h3>
    <p>チェックボックスで個人を選択します</p>
  </div>
  <div>
    <h3>２．契約登録</h3>
    <p>個人情報画面で選択した個人が表示されます。<br>
    チェックされている状態で予約ボタンを押すと登録予約者に追加され、<br>
    その状態で登録ボタンを押すと本登録になります。</p>
  </div>
  <div>
    <h3>３．履歴確認</h3>
    <p>本登録された履歴が参照できます。</p>
  </div>

  <div>
    <h3>注意</h3>
    <p>2021年4月頃作成したものです。古い記述となっています。</p>
  </div>

  <div class="btn btn04">
	<a href="https://github.com/MayuIgaue/vue-study">gitはこちら</a>
</div>
</template>

<script>

export default {
  name: 'Home',
}
</script>

<style scoped>
div{
  text-align: left;
}

h3{
  background-color: aquamarine;
}
.btn a {
	padding: 50px;
	color: #333;
	font-size: 18px;
	font-weight: 700;
	text-decoration: none;
	transition: 0.3s;
}

.btn{
  background-color: #fff697;
}

.btn:hover {
	background-color: #dbd377;
}
</style>