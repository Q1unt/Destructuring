import { special } from "../Destructuring";

test("Проверка получаниея данных", () => {
    let resoult = [
        {
          id: 8,
          name: 'Двойной выстрел',
          icon: 'http://...',
          description: 'Двойной выстрел наносит двойной урон'
        },
        {
          id: 9,
          name: 'Нокаутирующий удар',
          icon: 'http://...',
          description: 'Описание недоступно'
        }
      ];
    expect(special()).toEqual(resoult);
});