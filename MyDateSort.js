import moment from 'moment';

list.slice().sort((item1, item2) => {
  if (moment(item1.activityTime).isAfter(moment(item2.activityTime))) return -1;
  if (moment(item1.activityTime).isBefore(moment(item2.activityTime))) return 1;
  return 0;
}

// or without moment library
const arrayList = [];
arrayList.slice().sort((item1, item2) => {
  if (item1 < item2) return -1
  if (item1 > item2) return 1;
  return 0;
})