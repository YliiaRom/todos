export const shadowBox = () => {
  let shadow = '';
  for (let i = 0; i < 15; i++) {
    shadow += `${-i}px ${i}px 0 #d9d9d9${i < 14 ? ',' : ''}`;
  }
  return shadow;
};
export const shadowBox2 = () => {
  let shadow = '';
  for (let i = 0; i < 15; i++) {
    shadow += `${-i}px ${i}px 0px rgba(0, 0, 0, 0.1)${i < 14 ? ',' : ''}`;
  }
  return shadow;
};
export const shadowBalance = () => {
  let shadow = '';
  for (let i = 0; i < 15; i++) {
    shadow += `${-i}px ${i}px 2px rgba(0, 0, 0, 0.1)${i < 14 ? ',' : ''}`;
  }
  return shadow;
};
