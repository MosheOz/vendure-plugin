import { Controller, Get } from '@nestjs/common';
import { TokenDetailsEntity } from '../tokenDetails/tokenDetailsEntity';
import { Ctx, InjectableJobQueueStrategy, ProductService, RequestContext } from '@vendure/core'; 
import { getConnection } from "typeorm";
import { TokenDetailsService } from '../tokenDetails/service/tokenDetailsService'


@Controller('success')
export class SuccessPageController {

  @Get(':id')
  async showHtmlPage(@Ctx() ctx: RequestContext){
      console.log(ctx)

      return '<html>  <head>    <link      href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap"      rel="stylesheet"    />  </head>  <style>    body {      text-align: center;      padding: 40px 0;      background: #ebf0f5;    }    h1 {      color: #88b04b;      font-family: "Nunito Sans", "Helvetica Neue", sans-serif;      font-weight: 900;      font-size: 40px;      margin-bottom: 10px;    }    p {      color: #404f5e;      font-family: "Nunito Sans", "Helvetica Neue", sans-serif;      font-size: 20px;      margin: 0;    }    i {      color: #9abc66;      font-size: 100px;      line-height: 200px;      margin-left: -15px;    }    .card {      background: white;      padding: 60px;      border-radius: 4px;      box-shadow: 0 2px 3px #c8d0d8;      display: inline-block;      margin: 0 auto;    }  </style>  <body onload="getDealDetails()">    <div class="card"></div>    <script      src="https://code.jquery.com/jquery-3.5.1.min.js"      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="      crossorigin="anonymous"    ></script>    <script>      const base_url = "http://localhost:3000";      function getDealDetails() {        $.ajax({          url: `${base_url}/NotifyUrl`,          method: "GET",          success: function (result) {  console.log("hello");          $(".card").append(`                <div                    style="                    border-radius: 200px;                    height: 200px;                    width: 200px;                    background: #f8faf5;                    margin: 0 auto;">                    <i class="checkmark">✓</i>                </div>                <h1>Success</h1>                <p>                    We received your purchase request;<br />                    we\'ll be in touch shortly!                </p>                <p>Purchase code: ${result.lowprofilecode}</p>                <button onclick="goHome()">Home Page</button>`);          },        });      }      function goHome() {        window.top.location.href=`${base_url}`;      }    </script>  </body></html>';
    }

  }





