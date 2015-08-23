Cities = new Mongo.Collection('cities');



if (Meteor.isClient) {

  Template.BasicData.helpers({
    MyData: function(){
      Meteor.subscribe('BasicData');
      return Cities.find();
    }
  });

  Template.MoreData.helpers({
    MoreOfMydata: function(){
      // Cities._collection.remove({});
      // Cities.stop();
      Meteor.subscribe('MoreData');
      return Cities.find();
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
/*
    Cities.insert(
    {   _id: "BR0310001",
        City: "Belo Horizonte"
    });
*/



    Meteor.publish('BasicData', function() {
      return Cities.find({_id:"BR0310001"}, {fields: {_id: true}});
    });

    Meteor.publish('MoreData', function() {
      return Cities.find({_id:"BR0310001"}, {fields: {_id: true, City: true}});
    });  });
}
