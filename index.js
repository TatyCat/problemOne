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
    // loop through the array to look at each object
    for (key in arr[i]) {
      // loop through each object to look at K:V pair
      if (key != 'guest_booking') {
        // if the key != 'guest_booking', add K:V to obj.
        newObj[key] = arr[i][key]
      }
      else if (key == 'guest_booking') {
        //if the key =='guest_booking', add the room #
        newObj["room_no"] = arr[i]["guest_booking"]["room_no"]
        // call function to add sum, passing in the array of numbers
        newObj["some_total"] = sumOfArray(arr[i]["guest_booking"])
      }
    }
    //Loop done, add the object to an array & reset obj
    newArr.push(newObj)
    newObj = {}
  }
  //return the array of objects 
  return newArr;
}


$(document).ready(function () {
  $('#originalArray').html(JSON.stringify(arr, null, 2));
  $('#resultsArray').html(JSON.stringify(mutateArray(arr), null, 2));
});


