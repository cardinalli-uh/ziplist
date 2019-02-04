function zipList(list1, list2) {
  const returnedList = [];
  let i = 0;
  let j = 0;
  while (i < list1.length) {
    returnedList[j] = list1[i];
    j++;
    returnedList[j] = list2[i];
    j++;

    i++;
  }

  return returnedList;
}

console.log(zipList([1, 2, 3], ['a', 'b', 'c']));


function zipListTheEasyWay(list1, list2) {
  const zippedArrays = _.zip(list1, list2);

  return _.flatten(zippedArrays, true);
}

console.log(zipListTheEasyWay([1, 2, 3], ['a', 'b', 'c']));
