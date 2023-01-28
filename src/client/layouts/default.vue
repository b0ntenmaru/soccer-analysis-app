<template>
  <div class="min-h-full h-full bg-gray-100">
    <Header />

    <main>
      <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
        <div class='lg:flex lg:columns-2 gap-4'>
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>
