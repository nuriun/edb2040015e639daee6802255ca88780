export default function removeDuplicatedItems(array: Array<any>) {
    return array.filter((entitiy, index) => array.indexOf(entitiy) === index);
}
