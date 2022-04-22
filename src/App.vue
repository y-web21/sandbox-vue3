<template>
  <header class="header">
    <img src="/images/logo.svg" alt="">
    <h1>Vue.js ハンズオン</h1>
  </header>
  <main class="main">
    <template v-for="item in items" :key="item.id">
      <div class="item">
        <div class="thumbnail">
          <img :src="item.image" alt="">
        </div>
        <div class="description">
          <h2>{{ item.name }}</h2>
          <p>{{ item.description }}</p>
          <span>¥<span class="price">{{ item.price }}</span></span>
        </div>
      </div>
    </template>
  </main>

<div id="app">
  <!-- :key の index 指定は、並び替えなどで不具合があるため非推奨とのこと -->
  <!-- だが、:key の指定がないとエラーを吐くため必須だと思われる。 []の配列形式だと、indexでも渡しておかないと動かないのでとりあえず渡す -->
  <ul>
    <li v-for="(page, index) in pages" :key="index">{{index}}, {{ page }}</li>
  </ul>
  <!-- key value (index) の取り出し -->
  <!-- 変数の名前は自由だが、value, key, index が固定のようだ。 -->
  <ul>
    <li v-for="(value, key, yandex) in dicts" :key="yandex">{{yandex}}, {{key}}, {{ value }}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'アボカドディップバケッ！',
          description:
            '刻んだ野菜をディップに優しいアボカドに味のソースと混ぜて。こんがり焼いたバゲットとお召し上がれ。',
          price: 48000,
          image: '/images/item1.jpg'
        },
        {
          id: 2,
          name: '小麦粉',
          description:
            '焼きました。夢。',
          price: 20,
          image: '/images/item2.jpg'
        },
        {
          id: 3,
          name: 'HOP WTR',
          description:
            '生まれはロスの炭酸水。CO2!CO2!',
          price: 320,
          image: '/images/item3.jpg'
        },
        {
          id: 4,
          name: 'チーレンチライ',
          description:
            'イタリア大好きなみんなをだっぷりかけたアツアツです。フライの一品フレンチ。',
          price: 670,
          image: '/images/item4.jpg'
        }
      ],
      pages: [
        'page A',
        'page B',
        'page C',
      ],
      dicts: {
        diA: 'dictA',
        diB: 'dictB',
        diC: 'dictC'
      }
    }
  }
}
</script>

<style>
body {
  font-family: sans-serif;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  width: 90%;
  margin: 0 5%;
  color: #242424;
}

.header {
  display: flex;
  align-content: center;
  align-items: center;
  margin-top: 40px;
  margin-bottom: 40px;
}

.header>img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.header>h1 {
  font-size: 80px;
  font-weight: bold;
  line-height: 80px;
  margin-top: 0;
  margin-bottom: 0;
}

.main {
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  column-gap: 24px;
  row-gap: 24px;
}

.item {
  padding: 10px;
  cursor: pointer;
}

.item:hover {
  transition: 0.2s transform ease-out;
  transform: scale(1.05);
}

.item>div.thumbnail>img {
  width: 100%;
  height: calc(100%);
  object-fit: cover;
}

.item>div.description {
  text-align: left;
  margin-top: 20px;
}

.item>div.description>p {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 25px;
}

.item>div.description>span {
  display: block;
  margin-top: 10px;
  font-size: 20px;
}

.item>div.description>span>.price {
  font-size: 28px;
  font-weight: bold;
}
</style>
