<template>
  <div id="app">
    <div id="nav">

    </div>
    <transition  name="v" model="out-in" enter-active-class="animated fadeIn" leave-active-class="animated fadeout">
        <router-view/>
    </transition>
  
  </div>
</template>

<style>
*{ margin: 0; padding: 0; }
body{
  font-size: .75rem;
  background: #f8f8f8;
}
a{
  text-decoration: none;
  color: #333;
}
ul li,ol li{
  list-style: none;
}
img{
  display: block;
}
</style>
