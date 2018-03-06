import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './welcome.routes';

export class welcomecontroller {
  items = [];
  newItem = '';

  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('item');
    });
  }

  $onInit() {
    this.$http.get('/api/items')
      .then(response => {
        this.items = response.data;
        this.socket.syncUpdates('item', this.items);
      });
  }

  addItem() {
    if(this.newItem) {
      this.$http.post('/api/items', 
      this.newItem
    );
      this.newItem = '';
    }
  }
}

export default angular.module('eatnjoyApp.welcome', [uiRouter])
  .config(routing)
  .component('welcome', {
    template: require('./welcome.html'),
    controller: welcomecontroller
  })
  .name;
