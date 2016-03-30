// Declare 'Plugins' collection.
Interaction = new Mongo.Collection("Interaction");

SharedLink = new SimpleSchema({
  title: {
    type: String,
    max: 200
  },
  url: {
    type: String,
	  regEx: SimpleSchema.RegEx.Url,
    max: 200
  }
});

// Define schema for Examples collection.
Interaction.attachSchema({
  type:{
    type: String,
    allowedValues: ['question','link','task']
  },
  question:{
    type: String,
  	optional: true,
    max: 100,
    autoform: {
      rows: 4
    },
    custom: function () {
      var shouldBeRequired = this.field('type').value == "question";

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") return "required";
        }

        // updates
        else if (this.isSet) {
          if (this.operator === "$set" && this.value === null || this.value === "") return "required";
          if (this.operator === "$unset") return "required";
          if (this.operator === "$rename") return "required";
        }
      }
    }
  },
  link: {
    type: SharedLink,
    optional: true,
    custom: function () {
      var shouldBeRequired = this.field('type').value == "link";

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") return "required";
        }

        // updates
        else if (this.isSet) {
          if (this.operator === "$set" && this.value === null || this.value === "") return "required";
          if (this.operator === "$unset") return "required";
          if (this.operator === "$rename") return "required";
        }
      }
    }
  },
  task: {
    type: String,
    optional: true,
    max: 250,
    autoform: {
      rows: 4
    },
    custom: function () {
      var shouldBeRequired = this.field('type').value == "task";

      if (shouldBeRequired) {
        // inserts
        if (!this.operator) {
          if (!this.isSet || this.value === null || this.value === "") return "required";
        }

        // updates
        else if (this.isSet) {
          if (this.operator === "$set" && this.value === null || this.value === "") return "required";
          if (this.operator === "$unset") return "required";
          if (this.operator === "$rename") return "required";
        }
      }
    }
  },
  timestamp:{
    type: Number,
    autoValue: function () {
      if (this.isInsert) {
        return new Date().getTime();
      }
    },
    autoform: {
      omit:true
    }
  },
  userId:{
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoform: {
      omit:true
    },
    optional:true
  }
});