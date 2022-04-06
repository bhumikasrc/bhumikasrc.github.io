// set the dimensions and margins of the graph
//replay;
var margin = {top: 10, right: 30, bottom: 40, left: 210},
    width = 250,
    //width = 470
    height = 500 +50;

// append the svg object to the body of the page
var svg0 = d3.select("#lollipop")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
d3.csv("https://gist.githubusercontent.com/bhumikasrc/df862b3cffcb833e5a80d9042286432a/raw/5bcf366ebdde4015eaf5143eff08ebf36aec6784/sizes.csv", function(data) {

// sort data
    data.sort(function(b, a) {
        return a.CaffeineT - b.CaffeineT;
    });

// Add X axis
    var x = d3.scaleLinear()
        .domain([0, 500])
        .range([ 0, width+10])
    //.padding(1);
    svg0.append("g")
        .attr("transform", "translate(0," + (height) + ")")
        .call(d3.axisBottom(x).ticks(5))
        .selectAll("text")
        .attr("transform", "translate(7,0)")
        .style("text-anchor", "end");

// Y axis
    var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d.ProductName; }))
        .padding(1);
    svg0.append("g")
        .call(d3.axisLeft(y))

    //color scale
    var myColor = d3.scaleLinear()
        .range(["#228B22", "#6E260E"])
        .domain([10,190])

    //size scale
    var size = d3.scaleLinear()
        .range([2, 7])
        .domain([0, 77]);



// Lines
    svg0.selectAll("myline")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", x(0))
        .attr("x2", x(0))
        .attr("y1", function(d) { return y(d.ProductName); })
        .attr("y2", function(d) { return y(d.ProductName); })
        .attr("stroke", "grey")

// Circles -> start at X=0
    svg0.selectAll("mycircle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", x(0) )
        .attr("cy", function(d) { return y(d.ProductName); })
        .attr("r", "7")
        .style("fill", "white")
        .attr("stroke", "black")

    svg0.selectAll("mycircle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", x(0) )
        .attr("cy", function(d) { return y(d.ProductName); })
        .attr("r", function(d) { return size(d.SugarT)})
        .style("fill", function (d) { return myColor(d.SodiumT)})
        .attr("stroke", "black")

// Change the X coordinates of line and circle
    svg0.selectAll("circle")
        .transition()
        .duration(2000)
        .attr("cx", function(d) { return x(d.CaffeineT); })

    svg0.selectAll("line")
        .transition()
        .duration(2000)
        .attr("x1", function(d) { return x(d.CaffeineT); })

    svg0.append("line")
        .attr("x1", x(400))
        .attr("y1", 0)
        .attr("x2", x(400))
        .attr("y2", 500)
        .attr("stroke-width", 1)
        .style("stroke-dasharray", ("3, 3"))
        .attr("stroke", "black");

    svg0.append("text")
        .style("text-anchor", "end")
        .attr("dx", "-30em")
        .attr("dy", "22em")
        .attr("transform", "rotate(-90)")
        .text("DAILY MAX CAFFEINE BY FDA")
        .style("font-size", "10px")

    // svg.append("line")                  // attach a line
    //     .style("stroke", "black")          // colour the line
    //     .style("stroke-width", 50)         // adjust line width
    //     .style("stroke-linecap", "butt")  // stroke-linecap type
    //     .attr("x1", 40)     // x position of the first end of the line
    //     .attr("y1", -20)     // y position of the first end of the line
    //     .attr("x2", 170)     // x position of the second end of the line
    //     .attr("y2", -20);

    svg0.append("text")
        .style("text-anchor", "end")
        .attr("dx", "13em")
        .attr("dy", "0em")
        .attr("transform", "translate(7,0)")
        .text("TALL")
        .style("font-size", "10px")
        .attr("font-weight", 700)

    svg0.append("text")
        .style("text-anchor", "end")
        .attr("dx", "15em")
        .attr("dy", "51em")
        .attr("transform", "translate(7,0)")
        .text("Caffeine (g)")
        .style("font-size", "10px")


    svg0.append("g")
        .attr("class", "legendLinear")
        .attr("transform", "translate(00,530)")
        .attr("font-size", "11px");

    var legendLinear = d3.legendColor()
        .title("Sodium (g)")
        .shapeWidth(30)
        .orient('horizontal')
        .scale(myColor);

    svg0.select(".legendLinear")
        .call(legendLinear);


})







var margin = {top: 10, right: 30, bottom: 70, left: 10},
    width = 250
        height = 500 +20;
var svg1 = d3.select("#lollipop")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

d3.csv("https://gist.githubusercontent.com/bhumikasrc/df862b3cffcb833e5a80d9042286432a/raw/5bcf366ebdde4015eaf5143eff08ebf36aec6784/sizes.csv", function(data) {

// sort data
    data.sort(function(b, a) {
        return a.CaffeineG - b.CaffeineG;
    });

// Add X axis
    var x = d3.scaleLinear()
        .domain([0, 500])
        .range([ 0, width+10])
    //.padding(1);
    svg1.append("g")
        .attr("transform", "translate(0," + (height) + ")")
        .call(d3.axisBottom(x).ticks(5))
        .selectAll("text")
        .attr("transform", "translate(7,0)")
        .style("text-anchor", "end");

// Y axis
    var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d.ProductName; }))
        .padding(1);
    // svg1.append("g")
    //     .call(d3.axisLeft(y))

    //color scale
    var myColor = d3.scaleLinear()
        .range(["#228B22", "#6E260E"])
        .domain([10,190])

    //size scale
    var size = d3.scaleLinear()
        .range([2, 7])
        .domain([0, 77]);


// Lines
    svg1.selectAll("myline")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", x(0))
        .attr("x2", x(0))
        .attr("y1", function(d) { return y(d.ProductName); })
        .attr("y2", function(d) { return y(d.ProductName); })
        .attr("stroke", "grey")

    svg1.selectAll("mycircle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", x(0) )
        .attr("cy", function(d) { return y(d.ProductName); })
        .attr("r", "7")
        .style("fill", "white")
        .attr("stroke", "black")

    svg1.selectAll("mycircle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", x(0) )
        .attr("cy", function(d) { return y(d.ProductName); })
        .attr("r", function(d) { return size(d.SugarG)})
        .style("fill", function (d) { return myColor(d.SodiumG)})
        .attr("stroke", "black")

// Change the X coordinates of line and circle
    svg1.selectAll("circle")
        .transition()
        .duration(2000)
        .attr("cx", function(d) { return x(d.CaffeineG); })

    svg1.selectAll("line")
        .transition()
        .duration(2000)
        .attr("x1", function(d) { return x(d.CaffeineG); })

    svg1.append("line")
        .attr("x1", x(400))
        .attr("y1", 0)
        .attr("x2", x(400))
        .attr("y2", 500)
        .attr("stroke-width", 1)
        .style("stroke-dasharray", ("3, 3"))
        .attr("stroke", "black");

    svg1.append("text")
        .style("text-anchor", "end")
        .attr("dx", "-30em")
        .attr("dy", "22em")
        .attr("transform", "rotate(-90)")
        .text("DAILY MAX CAFFEINE BY FDA")
        .style("font-size", "10px")

    svg1.append("text")
        .style("text-anchor", "end")
        .attr("dx", "13em")
        .attr("dy", "0em")
        .attr("transform", "translate(7,0)")
        .text("GRANDE")
        .style("font-size", "10px")
        .attr("font-weight", 700)

    svg1.append("text")
        .style("text-anchor", "end")
        .attr("dx", "15em")
        .attr("dy", "51em")
        .attr("transform", "translate(7,0)")
        .text("Caffeine (g)")
        .style("font-size", "10px")

    svg1.append("g")
        .attr("class", "legendSize")
        .attr("transform", "translate(00,530)")
        .attr("font-size", "11px");;

    var legendSize = d3.legendSize()
        .title("Sugar (g)")
        .scale(size)
        .shape('circle')
        .shapePadding(15)
        .labelOffset(20)
        .orient('horizontal')
        .shapePadding(30);

    svg1.select(".legendSize")
        .call(legendSize);
})








var margin = {top: 10, right: 30, bottom: 70, left: 10},
    width = 250
height = 500-30;
var svg2 = d3.select("#lollipop")
    .append("svg")
    .attr("width", 290)
    .attr("height", 600)
    .append("g")
    .attr("transform",
        "translate(" + 10 + "," + 10 + ")");

d3.csv("https://gist.githubusercontent.com/bhumikasrc/df862b3cffcb833e5a80d9042286432a/raw/5bcf366ebdde4015eaf5143eff08ebf36aec6784/sizes.csv", function(data) {

// sort data
    data.sort(function(b, a) {
        return a.CaffeineV - b.CaffeineV;
    });

// Add X axis
    var x = d3.scaleLinear()
        .domain([0, 500])
        .range([ 0, width+10])
    //.padding(1);
    svg2.append("g")
        .attr("transform", "translate(0," + (height) + ")")
        .call(d3.axisBottom(x).ticks(5))
        .selectAll("text")
        .attr("transform", "translate(7,0)")
        .style("text-anchor", "end");

// Y axis
    var y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d.ProductName; }))
        .padding(1);
    // svg1.append("g")
    //     .call(d3.axisLeft(y))

    //color scale
    var myColor = d3.scaleLinear()
        .range(["#228B22", "#6E260E"])
        .domain([10,190])

    //size scale
    var size = d3.scaleLinear()
        .range([2, 7])
        .domain([0, 77]);


// Lines
    svg2.selectAll("myline")
        .data(data)
        .enter()
        .append("line")
        .attr("x1", x(0))
        .attr("x2", x(0))
        .attr("y1", function(d) { return y(d.ProductName); })
        .attr("y2", function(d) { return y(d.ProductName); })
        .attr("stroke", "grey")

    svg2.selectAll("mycircle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", x(0) )
        .attr("cy", function(d) { return y(d.ProductName); })
        .attr("r", "7")
        .style("fill", "white")
        .attr("stroke", "black")

    svg2.selectAll("mycircle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", x(0) )
        .attr("cy", function(d) { return y(d.ProductName); })
        .attr("r", function(d) { return size(d.SugarV)})
        .style("fill", function (d) { return myColor(d.SodiumV)})
        .attr("stroke", "black")

// Change the X coordinates of line and circle
    svg2.selectAll("circle")
        .transition()
        .duration(2000)
        .attr("cx", function(d) { return x(d.CaffeineV); })

    svg2.selectAll("line")
        .transition()
        .duration(2000)
        .attr("x1", function(d) { return x(d.CaffeineV); })

    svg2.append("line")
        .attr("x1", x(400))
        .attr("y1", 0)
        .attr("x2", x(400))
        .attr("y2", 500)
        .attr("stroke-width", 1)
        .style("stroke-dasharray", ("3, 3"))
        .attr("stroke", "black");

    svg2.append("text")
        .style("text-anchor", "end")
        .attr("dx", "-30em")
        .attr("dy", "22em")
        .attr("transform", "rotate(-90)")
        .text("DAILY MAX CAFFEINE BY FDA")
        .style("font-size", "10px")

    svg2.append("text")
        .style("text-anchor", "end")
        .attr("dx", "13em")
        .attr("dy", "0em")
        .attr("transform", "translate(7,0)")
        .text("VENTI")
        .style("font-size", "10px")
        .attr("font-weight", 700)

    svg2.append("text")
        .style("text-anchor", "end")
        .attr("dx", "15em")
        .attr("dy", "51em")
        .attr("transform", "translate(7,0)")
        .text("Caffeine (g)")
        .style("font-size", "10px")
})
