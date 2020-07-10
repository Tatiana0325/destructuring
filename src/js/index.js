export default function destruct(obj) {
    const {special} = obj;

    special.forEach(item => {
        if (!('description' in item)) {
            item['description'] = 'Описание недоступно';
        }
    });
    
    return special;
}