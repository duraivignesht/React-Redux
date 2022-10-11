export const slowTransformation = (value) => {
  const transformed = value ? value.toFixed(2) : Number(0).toFixed(2);

  const [dollars, cents] = transformed.split('.');

  return { dollars, cents };
};
