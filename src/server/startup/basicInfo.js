if (!BasicInfo.findOne()){
  //Add Test Cam
  BasicInfo.insert({
	  title: "Information about the Stream"
  });
}
