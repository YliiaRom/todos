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
    shadow += `${-i}px ${i}px 0px rgba(0, 0, 0, 0.1)${i < 14 ? ',' : ''}`;
  }
  return shadow;
};

export const shadowTextBalance = () => {
  let shadow = '';
  for (let i = 0; i < 8; i++) {
    shadow += `${i}px ${-i}px 0px rgba(255,255,255,${i * 0.1})${i < 7 ? ',' : ''}`;
  }
  return shadow;
};

// export const shadowBalance = () => {
//   let shadow = '';
//   for (let i = 0; i < 15; i++) {
//     shadow += `${-i}px ${i}px 2px rgba(0, 0, 0, 0.1)${i < 14 ? ',' : ''}`;
//   }
//   return shadow;
// };

//  shadow += `${-i}px ${i}px 0px #00${i + 20}${i < 5 ? ',' : ''}`;

//   shadow += `${-i}px ${i}px 0px #00${i + 10}${i < 2 ? ',' : ''}`;

//переход цвета   for (let i = 0; i < 8; i++) {
//   shadow += `${-i}px ${i}px 0px #7${i}7${i < 7 ? ',' : ''}`;
// }
//  for (let i = 0; i < 8; i++) {
//   shadow += `${-i}px ${i}px 0px rgba(${255 - i * 30}, 0, 0, ${255 - i * 0.2})${i < 7 ? ',' : ''}`;
// }

//  oот цв к чёрномуfor (let i = 0; i < 8; i++) {
// shadow += `${-i}px ${i}px 0px rgb(${255 - i * 30}, ${255 - i * 30}, 0})${i < 7 ? ',' : ''}`;
//hsl----- for (let i = 0; i < 8; i++) {
// shadow += `${-i}px ${i}px 0px hsl(${i * 5}, 100%, 50%)${i < 7 ? ',' : ''}`;

// расплылся низ for (let i = 0; i < 8; i++) {
//   shadow += `${-i}px ${i}px ${i}px #fff ${i < 7 ? ',' : ''}`;
// }

// цвет внизу for (let i = 0; i < 8; i++) {
//   shadow += `${i}px ${-i}px 0px rgba(255,255,255,${i * 0.1})${i < 7 ? ',' : ''}`;
// }
