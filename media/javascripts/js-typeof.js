// @method: typeoflist
// @description: 
// @param: 
// @return: 
var typeoflist = function ($scope) {
    $scope.list = [
        {
        num: '1',
        key: 'Undefined',
        val: '"underfined"'
    },
    {
        num: '2',
        key: 'Null',
        val: '"object"'
    },
    {
        num: '3',
        key: 'Boolean',
        val: '"boolean"'
    },
    {
        num: '4',
        key: 'Number',
        val: '"number"'
    },
    {
        num: '5',
        key: 'String',
        val: '"string"'
    },
    {
        num: '6',
        key: 'Object(native and does not implement[[Call]])',
        val: '"object"'
    },
    {
        num: '7',
        key: 'Object(native or host and does implement[[Call]])',
        val: '"function"'
    },
    {
        num: '8',
        key: 'Object(host and does not implement[[Call]])',
        val: '"undefined", "boolean", "number", "string"'
    }
    ];
};
