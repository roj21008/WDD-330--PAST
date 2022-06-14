import HikesController from "./controler/HikesController";
import HikesView from "./view/HikesView";


const listView = new HikesController('hikeList');
const list = listView.showHikeList();
listView.hikesView.renderHikeList(list,'hikeList');
console.table(listView.hikeModel.getHikeByName('Denanda Falls'));
console.log(list);

