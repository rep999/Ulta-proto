function isFound(obj, name) {
    obj.some(element => {
        if (element.name === name) {
            return true;
        }
    })
}

export default isFound