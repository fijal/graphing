function plot(r, target, title) {
    new Chart("stats", {
      type: "line",
      data: {
        labels: r.map(a => a[0]),
    datasets: [{
      backgroundColor: "rgba(0,0,0,1.0)",
      borderColor: "rgba(0,0,0,0.1)",
      data: r.map(a => a[1])
    }]},
    options: {
          hover: {
                        mode: 'nearest',
                        intersect: false,
                        onHover: function (e, item) {
                            if (item.length) {
                                const data = item[0]._chart.config.data.datasets[0].data[item[0]._index];
                                console.log(item, data);
                            }
                        }
                    }
                }
    });
}


$(document).ready(function()
{
    if (data_input == null) {
        $(document).html("You need to have data.js which has data_input = [... 2-element arrays corresponding to date and value ...]")
    } else {
        var data = data_input;
        plot(data, "stats", "performance");
    }
});