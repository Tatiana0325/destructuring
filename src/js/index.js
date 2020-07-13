export default function destruct(obj) {
    const copyObj = Object.assign(obj);
    for (let i = 0; i < copyObj.special.length; i++) {
        if(!('description' in copyObj.special[i])) {
            Object.defineProperty(copyObj.special[i], 'description', {configurable: true,
                                                                    enumerable: true,
                                                                    value: 'Описание недоступно',
                                                                    writable: true})
        }
    };
    
    return copyObj.special;
}