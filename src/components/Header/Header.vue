<script setup></script>

<template>
  <header class="p-8 shadow-md">
    <nav>
      <ul class="flex gap-10 justify-end">
        <!-- <li><a href="/">Clientes</a></li>
        <li><a href="/">Produtos</a></li> -->
        <router-link to="/">Home</router-link>
        <router-link to="/clients">Clientes</router-link>
        <router-link to="/products">Produtos</router-link>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
