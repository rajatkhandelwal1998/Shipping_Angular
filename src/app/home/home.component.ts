import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    // var a = 0;
    // $(window).scroll(function() {

// tslint:disable-next-line: prefer-const
      // var oTop = $('#cntr').offset().top - window.innerHeight;
      // if (a == 0 && $(window).scrollTop() > oTop) {
      //   $('.counter').each(function() {
      //     var $this = $(this),
      //       countTo = $this.attr('data-count');
      //     $({
      //       countNum: $this.text()
      //     }).animate({
      //         countNum: countTo
      //       },

      //       {

      //         duration: 4000,
      //         easing: 'swing',
      //         step: function() {
      //           $this.text(Math.floor(this.countNum));
      //         },
      //         complete: function() {
      //           $this.text(this.countNum);
                //alert('finished');
    //           }

    //         });
    //     });
    //     a = 1;
    //   }

    // });

    $('.count').each(function () {
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      }, {
          duration: 4000,
          easing: 'swing',
          step: function (now) {
              $(this).text(Math.ceil(now));
          }
      });
  });

  }

}
