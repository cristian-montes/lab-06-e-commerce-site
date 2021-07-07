// FUNCTION TO FIND ID IN THE AVOCADO OBJECT
export function findById(itemS, id){
    for (let item of itemS){
        if (item.id === id)
            return item;
    }
}