import destruct from '../js/index';

test('Function destruct() check', () => {
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
          }
        ]	
      };
    
    const special = destruct(character);

    expect(special).toEqual([{id: 8, 
                            name: "Двойной выстрел", 
                            icon: "http://...", 
                            description: 'Двойной выстрел наносит двойной урон'}, 
                            {id: 9,
                            name: 'Нокаутирующий удар',
                            icon: 'http://...',
                            description: "Описание недоступно"
                            }])
})