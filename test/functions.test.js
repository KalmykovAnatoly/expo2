import * as fun from '../functions';

test("Function should delete object from array", () => {
    expect(fun.deleteFromArray([{x: 1, y: 2}, {x: 2, y: 3}, {x: 3, y: 4}], {x: 2, y: 3})).toEqual([{x: 1, y: 2}, {
        x: 3,
        y: 4
    }])
});

test("Function should delete object from array", () => {
    expect(fun.deleteFromArray([{x: 0, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}], {x: 0, y: 0})).toEqual([{x: 0, y: 1}, {
        x: 1,
        y: 0
    }])
});

test("Function should delete object from array", () => {
    const original = [{x: 0, y: 0}, {x: 1, y: 1}];
    const copied = original.slice();
    copied[1] = {x: 2, y: 2};

    expect(original).toEqual([{x: 0, y: 0}, {x: 1, y: 1}]);
    expect(copied).toEqual([{x: 0, y: 0}, {x: 2, y: 2}])
});