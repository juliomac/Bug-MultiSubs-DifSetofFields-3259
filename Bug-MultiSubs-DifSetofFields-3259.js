Cities = new Mongo.Collection('cities');



if (Meteor.isClient) {

Template.BasicData.onCreated(function(){
  Meteor.subscribe('BasicData');

});


Template.MoreData.onCreated(function(){
  Meteor.subscribe('MoreData');

});

Template.BasicData.helpers({
  MyData: function(){
    return Cities.find();
  }
});



  Template.MoreData.helpers({
    MoreOfMydata: function(){
      // Cities._collection.remove({});
      // Cities.stop();
      return Cities.find();
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {

    if (Cities.find().count() === 0) {
      Cities.insert(
      {   _id: "BR0310001",
          City: "Belo Horizonte",
          details: {
            detail1: "It is located in Brazil",
            detail2: "Nice weather all year long"
          }
      });
    }


    Meteor.publish('BasicData', function() {
      return Cities.find({_id:"BR0310001"}, {fields: {_id: true}});
    });

    Meteor.publish('MoreData', function(check) {
      return Cities.find({_id:"BR0310001"}, {fields: {_id: true, City: true, 'details.detail1':true}});
    });

 });
}
