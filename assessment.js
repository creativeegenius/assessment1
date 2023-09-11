// Assessement code  - Quadterrell McCauley

// dependency / item array

let input = {
    "t-shirt": "dress shirt",
    "dress shirt": "pants",
    "dress shirt": "suit jacket",
    "tie": "suit jacket",
    "pants": "suit jacket",
    "belt": "suit jacket",
    "suit jacket": "overcoat",
    "dress shirt": "tie",
    "suit jacket": "sun glasses",
    "sun glasses": "overcoat",
    "left sock": "pants",
    "pants": "belt",
    "suit jacket": "left shoe",
    "suit jacket": "right shoe",
    "left shoe": "overcoat",
    "right sock": "pants",
    "right shoe": "overcoat",
    "t-shirt": "suit jacket"
};

const dressOrderArray = ['left sock', 'right sock', 't-shirt', 'dress shirt', 'pants', 'tie', 'belt', 'suit jacket', 'left shoe', 'right shoe', 'sun glasses', 'overcoat'];

// convert input object to a map
function objectToMap(obj) {
    const resultMap = new Map();

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            resultMap.set(key, obj[key]);
        }
    }

    return resultMap;
}

const getDressedMap = objectToMap(input);

// Convert map to array
function mapToArray(map) {
    return [...map];
}

const getDressedArray = mapToArray(getDressedMap);

function orderMapByArray(map, orderArray) {
    const orderedMap = new Map();

    // Iterate through the orderArray
    for (const key of orderArray) {
        // Check if the key exists in the original map
        if (map.has(key)) {
            // Add the key-value pair to the orderedMap
            orderedMap.set(key, map.get(key));
        }
    }

    // Add any remaining entries from the original map to the end of the orderedMap
    for (const [key, value] of map) {
        orderedMap.set(key, value);
    }

    return orderedMap;
}

const orderedDressMap = orderMapByArray(getDressedMap, dressOrderArray);

function getMapKeys(map) {
    return Array.from(map.keys());
}

const dressArray = getMapKeys(orderedDressMap);

function mergeArrays(arr1, arr2) {
    const set1 = new Set(arr1);
  
    // Iterate through the second array and add unique items to the first array
    for (const item of arr2) {
      if (!set1.has(item)) {
        arr1.push(item);
      }
    }
  
    return arr1;
  }
  
  const howToDressArray = mergeArrays(dressArray, dressOrderArray);
  console.log(howToDressArray);