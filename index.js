var arr = [
  {
    'guest_type': 'crew',
    'first_name': 'Marco',
    'last_name': 'Burns',
    'guest_booking': {
      'room_no': 'A0073',
      'some_array': [7, 2, 4]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'John',
    'last_name': 'Doe',
    'guest_booking': {
      'room_no': 'C73',
      'some_array': [1, 3, 5, 2, 4, 3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Jane',
    'last_name': 'Doe',
    'guest_booking': {
      'room_no': 'C73',
      'some_array': [1, 3, 5, 2, 4, 3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Albert',
    'last_name': 'Einstein',
    'guest_booking': {
      'room_no': 'B15',
      'some_array': [2, 5, 6, 3]
    },
  },
  {
    'guest_type': 'crew',
    'first_name': 'Jack',
    'last_name': 'Daniels',
    'guest_booking': {
      'room_no': 'B15',
      'some_array': [2, 5, 6, 3]
    },
  },
  {
    'guest_type': 'guest',
    'first_name': 'Alan',
    'last_name': 'Turing',
    'guest_booking': {
      'room_no': 'B15',
      'some_array': [2, 5, 6, 3]
    },
  },
];

function sumOfArray(arrayNumbers) {
  let arrayOfNum = arrayNumbers["some_array"]
  return arrayOfNum.reduce(function (a, b) {
    return a + b
  }, 0)
}

function mutateArray(arr) {
  let newArr = []
  let newObj = {}
  for (let i = 0; i < arr.length; i++) {
    for (key in arr[i]) {
      if (key != 'guest_booking' && arr[i]["guest_type"] == 'guest') {
        newObj[key] = arr[i][key]
      } else if (key == 'guest_booking' && arr[i]["guest_type"] == 'guest') {
        newObj["room_no"] = arr[i]["guest_booking"]["room_no"]
        newObj["some_total"] = sumOfArray(arr[i]["guest_booking"])
      }

      newArr.sort(function (nameA, nameB) {
        if (nameA.last_name.toLowerCase() > nameB.last_name.toLowerCase()) return 1;
        if (nameA.last_name.toLowerCase() < nameB.last_name.toLowerCase()) return -1;

        if (nameA.first_name.toLowerCase() > nameB.first_name.toLowerCase()) return 1;
        if (nameA.first_name.toLowerCase() < nameB.first_name.toLowerCase()) return -1;
      });
    }

    if (Object.entries(newObj).length != 0) {
      newArr.push(newObj)
      newObj = {}
    }
  }
  return newArr;
}


$(document).ready(function () {
  $('#originalArray').html(JSON.stringify(arr, null, 2));
  $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});


