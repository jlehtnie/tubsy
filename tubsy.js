$(window).load(function(){
    $(function () {
        var squares = [];
        var SIZE = 16;
        var symbol = "X";

        /*
         * Set the clicked-on square to the current symbol
         */
        set = function () {
            $(this).html() ? $(this).html("") : $(this).html(symbol);
            console.log($(this));
        };

        /*
         * Create and attach the DOM elements for the board as an
         * HTML table, assign the indicators for each cell, and start
         */
        run = function () {
            var board = $("<table border=1 cellspacing=0>");
            var row = $("<tr>");
            board.append(row);
            for (var i = 0; i < SIZE; i += 1) {
                var cell = $("<td height=50 width=50 align=center valign=center></td>");
                cell.click(set);
                row.append(cell);
                squares.push(cell);
            }

            // Attach under tubsy if present, otherwise to body.
            $(document.getElementById("tubsy") || document.body).append(board);
        };
        run();
    });
});