a<!doctype html>
<html>
<head>
  <meta http-equiv="content-type" content="txt/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha256-L/W5Wfqfa0sdBNIKN9cG6QA5F2qx4qICmU2VgLruv9Y=" crossorigin="anonymous">
  <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
  <title>Shorter URL</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      cursor: default;
    }
    html, body {
      height: 100%;
    }
    body {
      display: -webkit-box;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      -webkit-box-pack: center;
      justify-content: center;
      vertical-align: center;
      flex-wrap: wrap;
      align-content: center;

      color: #2a2b2c;
      background-color: #ebedee;
      overflow: hidden;
    }
    .card {
      background-color: transparent;
      width: 768px;
    }
    .card-text {
      text-align: center;
    }
    .card-text > a {
      text-decoration: none;
      color: #007bff;
    }
    .card-text > a {
      cursor: pointer;
    }
    .form-control {
        cursor: auto;
    }
    @media (max-width: 769px) {
      .card {
        width: 80%;
      }
    }
    @media (max-width: 420px) {
      .card {
        width: 95%;
      }
    }
    @media (prefers-color-scheme: dark) { 
      body {
        color: #d9d9d9; 
        background: #1b1b1b;
      }
      .card {
        background-color: #252d38;
      }
    } 
  </style>
</head>
<body>
  <div class="card">
    <h5 class="card-header">🎁 Pendekkan URL-mu </h5>
    <div class="card-body">
      <h5 class="card-title">masukkan URL panjang yang akan dipersingkat :</h5>
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Contoh: https://contoh.com/" id="text">
        <div class="input-group-append">
          <button class="btn btn-primary" type="button" onclick='shorturl()' id="searchbtn">Pendekkan</button>
        </div>
      </div>    
      <div class="card-text">
      <a href="https://facebook.com/kazu.miteku.1">
            <span class="icon is-small">
                <i class="fa fa-facebook"></i>
            </span>
            <span>Facebook</span>
        </a>
        <a href="https://t.me/synerize">
        <i class="fa fa-telegram"></i>
        </span>
            <span>Telegram</span>
        </a>
      </div>
      <p id="notice"></p>             
    </div>
  </div>
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Result</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="result">No result</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" onclick='copyurl("result")' data-toggle="popover" data-placement="bottom" data-content="Copied!">Copy</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>    
        </div>
      </div>
    </div>
  </div>         
  <script src="https://cdn.jsdelivr.net/npm/jquery@3.4.1/dist/jquery.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js" integrity="sha256-WqU1JavFxSAMcLP2WIOI+GB2zWmShMI82mTpLDcqFUg=" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/url-shorten-worker@1.0.5/main.js" crossorigin="anonymous"></script>
</body>
</html>
