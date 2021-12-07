const arr = [1, 6546, 5, "last"];
const lastCard = (arr) => {
  const cardLength = arr.length;

  if (arr == null || arr.Length === 0) return;
  return cardLength >= 1 ? arr[cardLength - 1] : arr[cardLength];
};
console.log(lastCard(arr));
console.log(lastCard([]));
console.log(
  lastCard([
    {
      title: `demo card one`,
      description: `This is card `,
      bgColor: "#000000",
    },
    {
      title: `demo card two`,
      description: `This is card `,
      bgColor: "#000000",
    },
  ])
);
