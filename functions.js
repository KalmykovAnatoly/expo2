export function deleteFromArray(arr, object){
    const result = [];
    for (let i in arr){
        if (arr[i].x!==object.x || arr[i].y!==object.y){
            result.push(arr[i]);
        }
    }
    return result;
}