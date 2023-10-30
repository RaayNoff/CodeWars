const objects = [
    { id: 1, name: 'Test1', object_type: 1 },
    { id: 2, name: 'Test2', object_type: 1 },
    { id: 3, name: 'Test3', object_type: 2 },
    { id: 4, name: 'Test4', object_type: 3 }
]


const object_types = [
    { id: 1, class: "Устройства" },
    { id: 2, class: "Устройства" },
    { id: 3, class: "Порты" },
    { id: 4, class: "Кабеля" },
]

const getNameOfDevicesObjects = (objects, classFilter) => objects
    .filter(obj =>
        object_types
            .reduce((prev, curr) => curr.class === classFilter ? [...prev, curr.id] : [...prev], [])
            .includes(obj.object_type))
    .map(obj => obj.name)
    .join(', ');



console.log(getNameOfDevicesObjects(objects, 'Устройства'))
