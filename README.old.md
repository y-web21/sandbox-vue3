# vue3-handson

[Vue.js 3 ハンズオン | Vue3 Hands-on](https://handson.vuejs-jp.org/)

[Vue.js 3 official](https://v3.ja.vuejs.org/)
## vue/cli installation

https://cli.vuejs.org/guide/installation.html

```bash
sudo n lts
   installed : v16.14.2 (with npm 8.5.0)
sudo npm install -g @vue/cli
vue --version
@vue/cli 5.0.4
vue create .
vue serve
```
```bash
mkdir -p public/images
curl https://handson.vuejs-jp.org/vue3-lab-handson-images.zip --output a && unzip a -d public/images/ && rm a
```

準備完了。ハンズオン本編へ

[data を定義し、商品をレンダリングする | Vue3 Hands-on](https://handson.vuejs-jp.org/rendering.html#%E5%95%86%E5%93%81%E3%82%92%E3%83%AC%E3%83%B3%E3%82%BF%E3%82%99%E3%83%AA%E3%83%B3%E3%82%AF%E3%82%99)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
