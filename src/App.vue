<template>
  <header class="header">
    <img src="/images/logo.svg" alt="" />
    <h1>Vue.js ハンズオン</h1>
  </header>
  <div>商品数(method): {{ stockQuantity() }}</div>
  <div>商品数(computed(property)): {{ stockQuantityComputed }}</div>
  <div>now_method: {{ getDate() }}</div>
  <div>now_computed: {{ getDateComputed }}</div>
  <main class="main">
    <template v-for="item in items" :key="item.id">
      <div v-if="!item.soldOut">
        <!-- 要素によっては、タブフォーカスするのに tabindex の付与が必要。テキストボックスなどはデフォルトでフォーカス可能  -->
        <!--v-on:click との併用も可能。 -->
        <div
          class="item"
          :class="{ 'selected-item': item.selected }"
          @click="item.selected = !item.selected"
          @keyup.enter="item.selected = !item.selected"
          tabindex="0"
        >
          <div class="thumbnail">
            <img :src="item.image" alt="" />
          </div>
          <div class="description">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description }}</p>
            <span
              >¥<span class="price">{{ pricePrefix(item.price) }}</span></span
            >
          </div>
        </div>
      </div>
      <div v-else>うりきれぢゃ・・・<button type="button" @click="stockItem(item)">入荷</button></div>
    </template>

    <input v-on:keyup.enter="alert" />
  </main>

  <h3>food menu</h3>
  <ul>
    <li v-for="food in getFood" :key="food.id">{{ food.name }} - {{ pricePrefix(food.price) }}</li>
  </ul>

  <h3>drink menu</h3>
  <ul>
    <li v-for="drink in getDrink" :key="drink.id">{{ drink.name }} - {{ drink.price }}</li>
  </ul>

  <h3>安いだけのメニュウはこれだ！</h3>
  <p>{{ getLowestPriceItem.name }} {{ pricePrefix(getLowestPriceItem.price) }}</p>
  <h4>安いだけの固形物</h4>
  <p>{{ getLowestPriceFood.name }} {{ pricePrefix(getLowestPriceFood.price) }}</p>
  <h4>安い液体及び流動体</h4>
  <p>{{ getLowestPriceDrink.name }} {{ pricePrefix(getLowestPriceDrink.price) }}</p>

  <!-- :key の index 指定は、並び替えなどで不具合があるため非推奨とのこと -->
  <!-- だが、:key の指定がないとエラーを吐くため必須だと思われる。 []の配列形式だと、indexでも渡しておかないと動かないのでとりあえず渡す -->
  <ul>
    <li v-for="(page, index) in pages" :key="index">{{ index }}, {{ page }}</li>
  </ul>
  <!-- key value (index) の取り出し -->
  <!-- 変数の名前は自由だが、value, key, index が固定のようだ。 -->
  <ul>
    <li v-for="(value, key, yandex) in dicts" :key="yandex">{{ yandex }}, {{ key }}, {{ value }}</li>
  </ul>

  <!-- v-show は、display: none;として処理されるだけで、DOMには存在する。 -->
  <!-- DOMを再構成しない分切り替えコストに優れるが、初期のDOM量は増える -->
  <div v-show="true">something</div>
  <div v-show="false">something</div>

  {{ u(200) }}
  {{ getFood }}
</template>

<script>
import util from './utility'

export default {
  name: "App",
  data() {
    return {
      u: util,
      items: [
        {
          id: 1,
          name: "アボカドディップバケッ！",
          category: "food",
          description:
            "刻んだ野菜をディップに優しいアボカドに味のソースと混ぜて。こんがり焼いたバゲットとお召し上がれ。",
          price: 48000,
          image: "/images/item1.jpg",
          soldOut: false,
          selected: false,
        },
        {
          id: 2,
          name: "小麦粉",
          category: "food",
          description: "焼きました。ゆ、夢～。",
          price: 20,
          image: "/images/item2.jpg",
          soldOut: false,
          selected: false,
        },
        {
          id: 3,
          name: "HOP WTR",
          category: "drink",
          description: "生まれはロスの炭酸水。CO2!CO2!",
          price: 320,
          image: "/images/item3.jpg",
          soldOut: true,
          selected: false,
        },
        {
          id: 4,
          name: "チーレンチライ",
          category: "food",
          description: "イタリア大好きなみんなをだっぷりかけたアツアツです。フライの一品フレンチ。",
          price: 670,
          image: "/images/item4.jpg",
          soldOut: false,
          selected: false,
        },
      ],
      pages: ["page A", "page B", "page C"],
      dicts: {
        diA: "dictA",
        diB: "dictB",
        diC: "dictC",
      },
    };
  },
  methods: {
    /**
     * 価格を3桁ごとのカンマ付きで返す
     * @param {number} price 価格
     */
    pricePrefix(price) {
      return price.toLocaleString();
    },
    /**
     * 在庫のある商品数を返す
     */
    stockQuantity() {
      return this.items.filter((item) => item.soldOut === false).length;
    },
    /**
     * 商品の在庫状況を変更する
     * @param {object} 商品情報
     */
    stockItem(item) {
      item.soldOut = false;
    },
    /**
     * 現在時刻を取得する
     */
    getDate() {
      return Date.now();
    },
    alert() {
      alert("keyup しましたね！！");
    },
    getLowestPrice(items) {
      console.log(items[0]);
      return items[
        (() => {
          let min = 10000000;
          let index = 0;
          for (let i = 0; i < items.length; i++) {
            if (min > items[i].price) {
              min = items[i].price;
              index = i;
            }
          }
          return index;
        })()
      ];
    },
  },
  computed: {
    stockQuantityComputed() {
      return this.items.filter((item) => item.soldOut === false).length;
    },
    getDateComputed() {
      return Date.now();
    },
    getLowestPriceItem() {
      return this.getLowestPrice(this.items);
    },
    getLowestPriceFood() {
      return this.getLowestPrice(this.getFood);
    },
    getLowestPriceDrink() {
      return this.getLowestPrice(this.getDrink);
    },
    getFood() {
      return this.items.filter((item) => item.category === "food");
    },
    getDrink() {
      return this.items.filter((item) => item.category === "drink");
    },
  },
};
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

.header > img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.header > h1 {
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

.item > div.thumbnail > img {
  width: 100%;
  height: calc(100%);
  object-fit: cover;
}

.item > div.description {
  text-align: left;
  margin-top: 20px;
}

.item > div.description > p {
  margin-top: 0px;
  margin-bottom: 0px;
  font-size: 18px;
  line-height: 25px;
}

.item > div.description > span {
  display: block;
  margin-top: 10px;
  font-size: 20px;
}

.item > div.description > span > .price {
  font-size: 28px;
  font-weight: bold;
}

.selected-item {
  background-color: #e3f2fd;
}
</style>
