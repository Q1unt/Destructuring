const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]
  };
 
export function special() {
    const specialarray = character.special
    let array = []
    let array1 = []
    for (const obj of specialarray) {
        if("description" in obj) {
            array.push(obj)
        }else{
            obj["description"] = "Описание недоступно";
            array1.push(obj)
            }; 
    };
    const array3 = [...array, ...array1]
    return array3
};