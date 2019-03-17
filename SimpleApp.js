angular.module('SimpleApp', [])
  .controller('SimpleAppController',['$scope', function($scope) {
    var SimpleApp = this;
      SimpleApp.touch = false;
      SimpleApp.formValid = true;

      SimpleApp.validate = function(){

      SimpleApp.touch = true;
      SimpleApp.formValid = true;
      var allowedName = /^[A-Za-z]*$/;
      var emailpattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var phpattern = /^[0-9]*$/;
      var urlpattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
      var regex = new RegExp(urlpattern);
      var t = SimpleApp.url;
      if(!allowedName.test(SimpleApp.name) || SimpleApp.name.length<3 || SimpleApp.name.length>30 ){
       SimpleApp.formValid = false;
      }
      console.log(SimpleApp.phone.length);
      if(!phpattern.test(SimpleApp.phone) || SimpleApp.phone.length<10 || SimpleApp.phone[0]==0 || SimpleApp.phone[0]==1){
       SimpleApp.formValid = false;
      }
      if(!t.match(regex)){
       SimpleApp.formValid = false;
      }
      if(!emailpattern.test(SimpleApp.email)){
       SimpleApp.formValid = false;
      }
      
    };
  }]);