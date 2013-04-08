<head>
    <link rel="stylesheet" type="text/css" href="library/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="library/bootstrap/css/bootstrap-responsive.min.css">
    <script data-main="main" src="require.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row-fluid">
            <h2>Require.js Demo</h2>
            <a href="" role="button" class="btn bst-js-launchdemo-new">Launch Module With Current jQuery</a>
            <a href="" role="button" class="btn bst-js-launchdemo-old">Launch Module With Old jQuery</a>
            <a href="" role="button" class="btn bst-js-launchdemo-plugin">Launch Plugin</a>
        </div>
    </div>

    <div class="bst-js-my-modal modal hide fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        <div class="modal-header">
            <h3 id="myModalLabel">Modal header</h3>
        </div>
        <div class="modal-body bst-js-modify-this">
            <p>A plugin made this modal.</p>
        </div>
        <div class="modal-footer">
            <button class="btn bst-js-do-something">Plugin, Make A Change!</button>
            <button class="btn btn-primary" data-dismiss="modal" aria-hidden="true">Close</button>
        </div>
    </div>
</body>