function validate() {
  var source = document.forms["valForm"]["source"].value;
  var provide = document.forms["valForm"]["provide"].value;
  var project = document.forms["valForm"]["project"].value;
  var buckets = document.forms["valForm"]["buckets"].value;
  var cloudStorage = document.forms["valForm"]["cloudStorage"].value;
  var cred = document.forms["valForm"]["cred"].value;
  var running = document.forms["valForm"]["running"].value;

  if (source == "") {
    document.getElementById("newSource").innerHTML ="Please fill this place";
    return false;
  }
  else{
    document.getElementById("newSource").innerHTML ="";

  }
  if (source.charAt(0)=== "-" || source.charAt(0)=== "_" || source.charAt(0)=== "+") {
    document.getElementById("newSource").innerHTML =
      "Cannot start with '-', '_', '+'";
    return false;
  }
  else{
    document.getElementById("newSource").innerHTML ="";

  }
  if (/[^a-zA-Z0-9\-\/]/.test(source)) {
    document.getElementById("newSource").innerHTML ="Special characters are not allowed";
    return false;
  }
  else{
    document.getElementById("newSource").innerHTML ="";

  }

  if (source.length < 5) {
    document.getElementById("newSource").innerHTML = "Minimun 5 characters allowed";
    return false;
  }
  else{
    document.getElementById("newSource").innerHTML ="";

  }
 ////////////////////////////////////////////////////////
  if (provide == "") {
    document.getElementById("newProvide").innerHTML = "Please fill this place";
    return false;
  }
  else{
    document.getElementById("newProvide").innerHTML ="";

  }
  if  (provide.charAt(0)=== "-" || provide.charAt(0)=== "_" || provide.charAt(0)=== "+") {
    document.getElementById("newProvide").innerHTML =
      "Cannot start with '-', '_', '+'";
    return false;
  }
  else{
    document.getElementById("newProvide").innerHTML ="";

  }
  if (/[^a-zA-Z0-9\-\/]/.test(provide)) {
    document.getElementById("newProvide").innerHTML = "Special characters are not allowed";
    return false;
  }
  else{
    document.getElementById("newProvide").innerHTML ="";

  }

  if (provide.length < 5) {
    document.getElementById("newProvide").innerHTML = "Minimun 5 characters allowed";
    return false;
  }
  else{
    document.getElementById("newProvide").innerHTML ="";

  }
 /////////////////////////////////////////////
  if (project == "") {
    document.getElementById("newProject").innerHTML ="Please fill this place";
    return false;
  }
  else{
    document.getElementById("newProject").innerHTML ="";

  }
  if (project.charAt(0)=== "-" || project.charAt(0)=== "_" || project.charAt(0)=== "+") {
    document.getElementById("newProject").innerHTML =
      "Cannot start with '-', '_', '+'";
    return false;
  }
  else{
    document.getElementById("newProject").innerHTML ="";

  }
  if (/[^a-zA-Z0-9\-\/]/.test(project)) {
    document.getElementById("newProject").innerHTML ="Special characters are not allowed";
    return false;
  }
  else{
    document.getElementById("newProject").innerHTML ="";

  }

  if (project.length < 5) {
    document.getElementById("newProject").innerHTML = "Minimun 5 characters allowed";
    return false;
  }
  else{
    document.getElementById("newProject").innerHTML ="";

  }
 ////////////////////////////////////////////////////////
  if (buckets == "") {
    document.getElementById("newBucket").innerHTML =
      "Please fill this place";
    return false;
  }
  else{
    document.getElementById("newBucket").innerHTML ="";

  }
  if (buckets.charAt(0)=== "-" || buckets.charAt(0)=== "_" || buckets.charAt(0)=== "+"){
    document.getElementById("newBucket").innerHTML =
      "Cannot start with '-', '_', '+'";
    return false;
  }
  else{
    document.getElementById("newBucket").innerHTML ="";

  }
  if (/[^a-zA-Z0-9\-\/]/.test(buckets)) {
    document.getElementById("newBucket").innerHTML ="Special characters are not allowed";
    return false;
  }

else{
    document.getElementById("newBucket").innerHTML ="";

  }
  if (buckets.length < 5) {
    document.getElementById("newBucket").innerHTML = "Minimun 5 characters allowed";
    return false;
  }
  else{
    document.getElementById("newBucket").innerHTML ="";

  }
 /////////////////////////////////////////////////
  if (cloudStorage == "") {
    document.getElementById("newCloud").innerHTML =
      "Please fill this place";
    return false;
  }
  else{
    document.getElementById("newCloud").innerHTML ="";

  }
  if (cloudStorage.charAt(0)=== "-" || cloudStorage.charAt(0)=== "_" || cloudStorage.charAt(0)=== "+") {
    document.getElementById("newCloud").innerHTML =
      "Cannot start with '-', '_', '+'";
    return false;
  }
  else{
    document.getElementById("newCloud").innerHTML ="";

  }
  if (/[^a-zA-Z0-9\-\/]/.test(cloudStorage)) {
    document.getElementById("newCloud").innerHTML ="Special characters are not allowed";
    return false;
  }
  else{
    document.getElementById("newCloud").innerHTML ="";

  }

  if (cloudStorage.length < 5) {
    document.getElementById("newCloud").innerHTML = "Minimun 5 characters allowed";
    return false;
  }
  else{
    document.getElementById("newCloud").innerHTML ="";

  }
 /////////////////////////////////////////////////////////
  if (cred == "") {
    document.getElementById("newCred").innerHTML = "Please fill this place";
    return false;
  }
  else{
    document.getElementById("newCred").innerHTML ="";

  }
  if (cred.charAt(0)=== "-" || cred.charAt(0)=== "_" || cred.charAt(0)=== "+") {
    document.getElementById("newCred").innerHTML =
      "Cannot start with '-', '_', '+'";
    return false;
  }
  else{
    document.getElementById("newCred").innerHTML ="";

  }
  if (/[^a-zA-Z0-9\-\/]/.test(cred)) {
    document.getElementById("newCred").innerHTML ="Special characters are not allowed";
    return false;
  }
  else{
    document.getElementById("newCred").innerHTML ="";

  }

  if (cred.length < 5) {
    document.getElementById("newCred").innerHTML ="Minimun 5 characters allowed";
    return false;
  }
  else{
    document.getElementById("newCred").innerHTML ="";

  }
 /////////////////////////////////////////////////////////
  if (running == "") {
    document.getElementById("newRun").innerHTML = "Please fill this place";
    return false;
  }
  else{
    document.getElementById("newRun").innerHTML ="";

  }
  if (running.charAt(0)=== "-" || running.charAt(0)=== "_" || running.charAt(0)=== "+") {
    document.getElementById("newRun").innerHTML =
      "Cannot start with '-', '_', '+'";
    return false;
  }
  else{
    document.getElementById("newRun").innerHTML ="";

  }
  if (/[^a-zA-Z0-9\-\/]/.test(running)) {
    document.getElementById("newRun").innerHTML ="Special characters are not allowed";
    return false;
  }
  else{
    document.getElementById("newRun").innerHTML ="";

  }

  if (running.length < 5) {
    document.getElementById("newRun").innerHTML = "Minimun 5 characters allowed";
    return false;
  }
  else{
    document.getElementById("newRun").innerHTML ="";

  }

}

