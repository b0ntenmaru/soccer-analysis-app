export default defineNuxtPlugin(async () => {
  if (process.env.NODE_ENV === 'development') {
    const { setupWorker } = await import('msw')
    const { handlers } = await import('@/mocks/handlers')

    const worker = setupWorker(...handlers);
    await worker.start({
      onUnhandledRequest: 'bypass',
    });
  }
});
