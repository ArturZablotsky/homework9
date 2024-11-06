function groupBy(array, callback) {
    return array.reduce((result, item) => {
        const key = callback(item);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
        return result;
    }, {});
};
const data = [
    {type: "fruit", name: "banana"},
    {type: "pet", name: "dog"},
    {type: "fruit", name: "apple"},
    {type: "pet", name: "cat"},
    {type: "fruit", name: "cherry"}
];
const grouped = groupBy(data, item => item.type);
console.log(grouped);