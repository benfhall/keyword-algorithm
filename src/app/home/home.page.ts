import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  searchKeyword() {

    var results = []
    results.length = 0;

    let comments = document.getElementById("comments-box").value
    const commentsArray = comments.split("\n");
    var keyword = document.getElementById("keyword-box").value

    console.log(commentsArray)
    console.log(keyword)

    for (var i = 0; i <= (commentsArray.length - 1); i++) {
      console.log(commentsArray[i])
      if (commentsArray[i].toLowerCase().includes(keyword.toLowerCase())) {
        results += "<ion-item>" + commentsArray[i] + "</ion-item>"
      }
    }

    document.getElementById("result-box").innerHTML = results
    console.log(results)

  }

}
