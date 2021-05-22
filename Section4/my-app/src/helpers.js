function choice(items) {
    return items[Math.floor(Math.random() * items.length)]
}

function remove(items, item) {
    for (let i = 0; i < items.length; i++) {
        if (items[i] === item) {
            return items.splice(i, 1);
        }
    }
    return null;
}

export {choice, remove};