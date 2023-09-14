<template>
  <div class="bg-gray-200 min-h-screen flex items-center justify-center flex-col">
    <div class="bg-white rounded-xl shadow-2xl min-w-xs p-4">
      <form class="mb-3">
        <label for="email" class="block mb-1 font-lato font-semibold text-lg">
          Email
        </label>
        <input type="email" placeholder="Email" class="font-montserrat bg-stone-300 p-2 rounded-md w-full placeholder-gray-500">
      </form>
      <form>
        <label for="password" class="block mb-1 font-lato font-semibold text-lg">
          Password
        </label>
        <input type="password" placeholder="Password" class="font-montserrat bg-stone-300 p-2 rounded-md w-full placeholder-gray-500 ">
      </form>
      <button class='p-2 rounded-md bg-emerald-100 mt-5 hover:scale-105 w-full ease-in duration-300 font-montserrat' type="submit">
            Entrar
          </button>
    </div>
  </div>
</template>