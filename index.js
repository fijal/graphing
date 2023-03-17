function plot(r, target, title) {
    MG.data_graphic({
        title: title,
        data: r,
        x_accessor: 'date',
        y_accessor: 'value',
        target: target,
//        interpolate: d3.curveLinear,
        right: 40,
        width: 800,
        brush: 'xy',
        height: 400
    });
}


$(document).ready(function()
{
    if (data_input == null) {
        $(document).html("You need to have data.js which has data_input = [... 2-element arrays corresponding to date and value ...]")
    } else {
        var data = [data_input.map((elem => ({ date: new Date(elem[0]), value: elem[1] })))];
        plot(data, "#stats", "performance")
    }
});