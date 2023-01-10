// reformting array objects


const names = [
  {name: "os", likes: "Coding"},
  {name: "tom", likes: "Gaming"},
  {name: "bill", likes: "Skate"}
]

console.log(names)
const namesByLikes = names.map(item => {
  const container = {};
  

  container[item.name] = item.likes;
  container.noOfLettersInName = item.name.length;
  return container;
})

console.log(namesByLikes)
