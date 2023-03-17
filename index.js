function plot(r, target, title) {
    console.log(r.map(a => a[0]));
    new Chart("stats", {
      type: "line",
      data: {
        labels: r.map(a => a[0]),
    datasets: [{
      backgroundColor: "rgba(0,0,0,1.0)",
      borderColor: "rgba(0,0,0,0.1)",
      data: r.map(a => a[1])
    }]},
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