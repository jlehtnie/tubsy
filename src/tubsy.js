$(document).ready(function() {
    $(function () {
        var squares = [];
        var SIZE = 16;
        var symbol = "X";

        setSquareToSymbol = function () {
            $(this).html() ? $(this).html("") : $(this).html(symbol);
            console.log($(this));
        };

        $.fn.addRow = function () {
            var row = $("<tr>");
            $(this).append(row);
            for (var i = 0; i < SIZE; i += 1) {
                var cell = $("<td height=50 width=50 align=center valign=center></td>");
                cell.click(setSquareToSymbol);
                row.append(cell);
                squares.push(cell);
            }
        };

        addRowToTable = function () {
            $("table").addRow()
        }


        run = function () {
            var board = $("<table border=1 cellspacing=0>");
            board.addRow();
            var root = $(document.getElementById("tubsy") || document.body)
            root.append(board);
            root.append($("<a href='#'>add row</a>").click(addRowToTable));
        };
        run();
    });
});
