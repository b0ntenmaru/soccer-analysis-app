
export const useSportmonksApi = () => {
  const config = useRuntimeConfig();
  const apiPath = config.public.API_PATH;
  const apiKey = config.public.API_KEY;

  return {
    apiPath,
    apiKey
  };
};
