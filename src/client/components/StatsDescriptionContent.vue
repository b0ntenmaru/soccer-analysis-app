<template>
  <div style="display: flex; justify-content: space-around; align-items: center;">
    <div style="display: flex; flex-direction: column;">
      <span style="font-size: 40px; font-weight: bold;"><slot name="left-main" /></span>
      <span style="font-size: 12px; color: rgb(95, 95, 95); margin-top: -6px; text-align: right;"><slot name="left-sub" /></span>
    </div>

    <v-divider vertical />

    <div style="display: flex; flex-direction: column;">
      <span style="font-size: 40px; font-weight: bold;"><slot name="right-main" /></span>
      <span style="font-size: 12px; color: rgb(95, 95, 95); margin-top: -6px; text-align: right;"><slot name="right-sub" /></span>
    </div>
  </div>
</template>
