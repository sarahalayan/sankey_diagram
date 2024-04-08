
am5.ready(function() {
  var root = am5.Root.new("chartdiv");
  
  root.setThemes([
    am5themes_Animated.new(root)
  ]);
  
  var series = root.container.children.push(am5flow.Sankey.new(root, {
    sourceIdField: "from",
    targetIdField: "to",
    valueField: "value",
    nodeWidth:150,
    paddingRight: 50,
    nodePadding: 15 
  }));
  
  series.nodes.get("colors").set("step", 2);
  
  series.data.setAll([
    { from: "EDL 1", to: "Total EDL", value: 161747.0 },
    { from: "EDL 2", to: "Total EDL", value: 152152.0 },
    { from: "EDL 3", to: "Total EDL", value: 142528.0 },
    { from: "PV EDL", to: "Total Solar", value: 120855.0 },
    { from: "PV GEN", to: "Total Solar", value: 993689.0 },
    { from: "Incomer G3", to: "Total Generators", value: 885492.0},
    { from: "Incomer G4", to: "Total Generators", value: 1695058.0 },
    { from: "Incomer 1 G2", to: "Total Generators", value: 3211884.0 },
    { from: "Incomer 6", to: "Total Generators", value: 134186.0 },
    { from: "Incomer 5 G1", to: "Total Generators", value: 3381035.0 },
    { from: "Incomer 2 G5", to: "Total Generators", value: 3115620.0 },
    { from: "Total EDL", to: "Total Generated", value: 161747.0+152152.0 +142528.0},
    { from: "Total Solar", to: "Total Generated", value: 120855.0+993689.0 },
    { from: "Total Generators", to: "Total Generated", value: 885492.0+1695058.0+3211884.0+ 134186.0+3381035.0+3115620.0},
    { from: "Total Generated", to: "Water Treatment", value: 1739131.0 },
    { from: "Total Generated", to: "Syrup Room", value: 265738.0 },
    { from: "Total Generated", to: "LP Compressors", value: 1526165.0 },
    { from: "Total Generated", to: "HP Compressors", value: 1705859.0 },
    { from: "Total Generated", to: "Administration", value: 612358.0},
    { from: "Total Generated", to: "Lighting", value: 1555135.0},
    { from: "Total Generated", to: "York 2", value: 888741.0},
    { from: "Total Generated", to: "Line18", value: 361997.0 },
    { from: "Total Generated", to: "Juice Trop + MJ", value: 1185959.0},
    { from: "Total Generated", to: "Line 5", value: 1056847.0},
    { from: "Total Generated", to: "Line 8", value: 1269536.0},
    { from: "Total Generated", to: "Line 4", value: 289309.0},
    { from: "Total Generated", to: "Line 7", value: 660985.0},
    { from: "Total Generated", to: "Line 2", value: 30229.0},
    { from: "Total Generated", to: "York 1", value: 518809.0},
    { from: "Total Generated", to: "Line 9", value: 258112.0},
    { from: "Total Generated", to: "Line 6", value: 659502.0},
    { from: "Total Generated", to: "Sugar Sec 18", value: 334254.0},
    { from: "Total Generated", to: "Spare", value: 0.0},
    { from: "Total Generated", to: "Line 17", value: 105791.0},
    { from: "Total Generated", to: "MJ Syrup Room", value: 9442.0},
    { from: "Total Generated", to: "Line 16", value:348144.0},
    { from: "Total Generated", to: "Auxiliaries juice", value: 305972.0},
    

  ]);
  
  series.appear(1000, 100);
  
  });